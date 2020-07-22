[[toc]]

#  MyBatis 用法

## Mybatis-Generator逆向生成

> 文件列表展示

![image-20200722144649371](https://kevingao-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200722144649371.png)

1. **pom**引入依赖

   ```xml
    <!--mybatis 生成器-->
           <dependency>
               <groupId>org.mybatis.generator</groupId>
               <artifactId>mybatis-generator-core</artifactId>
               <version>1.3.7</version>
           </dependency>
   ```

2. 配置**application.yml**

   让spring去加载mapper.xml

   ```yml
   mybatis:
     mapper-locations:
       - classpath:mapper/*.xml
       - classpath*:ltd/ygao/mall01/mbg/mapper/*.xml
   ```

3. 配置**generatorConfig.xml**

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE generatorConfiguration
           PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
           "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">
   <generatorConfiguration>
       <properties resource="generator.properties"/>需要改动
       <context id="MySqlContext" targetRuntime="MyBatis3" defaultModelType="flat">
           <property name="beginningDelimiter" value="`"/>
           <property name="endingDelimiter" value="`"/>
           <property name="javaFileEncoding" value="UTF-8"/>
           <!--生成mapper.xml时覆盖原文件-->
           <plugin type="org.mybatis.generator.plugins.UnmergeableXmlMappersPlugin" />
           <!-- 为模型生成序列化方法-->
           <plugin type="org.mybatis.generator.plugins.SerializablePlugin"/>
           <!-- 为生成的Java模型创建一个toString方法 -->
           <plugin type="org.mybatis.generator.plugins.ToStringPlugin"/>
           <!--可以自定义生成model的代码注释-->
           <commentGenerator type="ltd.ygao.mall01.mbg.CommentGenerator">需要改动
               <!-- 是否去除自动生成的注释 true：是 ： false:否 -->
               <property name="suppressAllComments" value="true"/>
               <property name="suppressDate" value="true"/>
               <property name="addRemarkComments" value="true"/>
           </commentGenerator>
   
           <!--配置数据库连接-->
           <jdbcConnection driverClass="${jdbc.driverClass}"
                           connectionURL="${jdbc.connectionURL}"
                           userId="${jdbc.userId}"
                           password="${jdbc.password}">
               <!--解决mysql驱动升级到8.0后不生成指定数据库代码的问题-->
               <property name="nullCatalogMeansCurrent" value="true" />
           </jdbcConnection>
           <!--指定生成model的路径-->
           <javaModelGenerator targetPackage="ltd.ygao.mall01.mbg.model" targetProject="mall-01\src\main\java"/>需要改动
           <!--指定生成mapper.xml的路径-->
           <sqlMapGenerator targetPackage="ltd.ygao.mall01.mbg.mapper" targetProject="mall-01\src\main\resources"/>需要改动
           <!--指定生成mapper接口的的路径-->
           <javaClientGenerator type="XMLMAPPER" targetPackage="ltd.ygao.mall01.mbg.mapper"
                                targetProject="mall-01\src\main\java"/>需要改动
           <!--生成全部表tableName设为%-->
           <table tableName="pms_brand">
               <generatedKey column="id" sqlStatement="MySql" identity="true"/>
           </table>
   
       </context>
   
   </generatorConfiguration>
   ```

4. 配置**generator.properties**

   ```properties
   jdbc.driverClass=com.mysql.cj.jdbc.Driver
   jdbc.connectionURL=jdbc:mysql://localhost:3306/mall?useUnicode=true&characterEncoding=utf-8&serverTimezone=Asia/Shanghai
   jdbc.userId=root
   jdbc.password=root
   ```

5. 配置 **MyBatisConfig**

   ```java
   package ltd.ygao.mall01.config;
   
   import org.mybatis.spring.annotation.MapperScan;
   import org.springframework.context.annotation.Configuration;
   
   /**
    * @author Kevin Gao
    * @version 1.0
    * @ClassName MyBatisConfig.java
    * @Description TODO
    * @date 2020/7/22 13:37
    * @Content:
    */
   @Configuration
   @MapperScan("ltd.ygao.mall01.mbg.mapper")
   public class MyBatisConfig {
   }
   ```

6. 配置 **CommentGenerator**

   ```java
   package ltd.ygao.mall01.mbg;
   
   import org.mybatis.generator.api.IntrospectedColumn;
   import org.mybatis.generator.api.IntrospectedTable;
   import org.mybatis.generator.api.dom.java.Field;
   import org.mybatis.generator.internal.DefaultCommentGenerator;
   import org.mybatis.generator.internal.util.StringUtility;
   
   import java.util.Properties;
   
   /**
    * @author Kevin Gao
    * @version 1.0
    * @ClassName CommentGenerator.java
    * @Description TODO
    * @date 2020/7/22 13:43
    * @Content:
    */
   public class CommentGenerator extends DefaultCommentGenerator {
       private boolean addRemarkComments = false;
       /**
        * 设置用户配置的参数
        */
       @Override
       public void addConfigurationProperties(Properties properties) {
           super.addConfigurationProperties(properties);
           this.addRemarkComments = StringUtility.isTrue(properties.getProperty("addRemarkComments"));
       }
       /**
        * 给字段添加注释
        */
       @Override
       public void addFieldComment(Field field, IntrospectedTable introspectedTable,
                                   IntrospectedColumn introspectedColumn) {
           String remarks = introspectedColumn.getRemarks();
           //根据参数和备注信息判断是否添加备注信息
           if (addRemarkComments && StringUtility.stringHasValue(remarks)) {
               addFieldJavaDoc(field, remarks);
           }
       }
       /**
        * 给model的字段添加注释
        */
       private void addFieldJavaDoc(Field field, String remarks) {
           //文档注释开始
           field.addJavaDocLine("/**");
           //获取数据库字段的备注信息
           String[] remarkLines = remarks.split(System.getProperty("line.separator"));
           for (String remarkLine : remarkLines) {
               field.addJavaDocLine(" * " + remarkLine);
           }
           addJavadocTag(field, false);
           field.addJavaDocLine(" */");
       }
   
   }
   ```

7. 配置 **Generator** 启动类

   ```java
   package ltd.ygao.mall01.mbg;
   
   import org.mybatis.generator.api.MyBatisGenerator;
   import org.mybatis.generator.config.Configuration;
   import org.mybatis.generator.config.xml.ConfigurationParser;
   import org.mybatis.generator.internal.DefaultShellCallback;
   
   import java.io.InputStream;
   import java.util.ArrayList;
   import java.util.List;
   
   /**
    * @author Kevin Gao
    * @version 1.0
    * @ClassName Generator.java
    * @Description TODO
    * @date 2020/7/22 13:34
    * @Content:
    */
   public class Generator {
       public static void main(String[] args) throws Exception {
           //MBG 执行过程中的警告信息
           List<String> warnings = new ArrayList<String>();
           //当生成的代码重复时，覆盖原代码
           boolean overwrite = true;
           //读取我们的 MBG 配置文件
           InputStream is = Generator.class.getResourceAsStream("/generatorConfig.xml");
           ConfigurationParser cp = new ConfigurationParser(warnings);
           Configuration config = cp.parseConfiguration(is);
           is.close();
           DefaultShellCallback callback = new DefaultShellCallback(overwrite);
           //创建 MBG
           MyBatisGenerator myBatisGenerator = new MyBatisGenerator(config, callback, warnings);
           //执行生成代码
           myBatisGenerator.generate(null);
           //输出警告信息
           for (String warning : warnings) {
               System.out.println(warning);
           }
       }
   }
   ```

   

