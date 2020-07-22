# inner join 与 left join 之间的区别

[[TOC]]

### 区别

left join(左联接) 返回包括**左表中的所有记录和右表中联结字段相等**的记录 
right join(右联接) 返回包括**右表中的所有记录和左表中联结字段相等**的记录
inner join(等值连接) 只返回**两个表中联结字段相等**的行

### 举例

***

表A记录如下：

```text
aID　　　　　aNum
1　　　　　a20050111
2　　　　　a20050112
3　　　　　a20050113
4　　　　　a20050114
5　　　　　a20050115
```

表B记录如下:

```text
bID　　　　　bName
1　　　　　2006032401
2　　　　　2006032402
3　　　　　2006032403
4　　　　　2006032404
8　　　　　2006032408
```

***

#### left join

sql语句如下: 

```sql
select * from A
left join B 
on A.aID = B.bID
```

结果如下:

```text
aID　　　　　aNum　　　　　bID　　　　　bName
1　　　　　a20050111　　　　1　　　　　2006032401
2　　　　　a20050112　　　　2　　　　　2006032402
3　　　　　a20050113　　　　3　　　　　2006032403
4　　　　　a20050114　　　　4　　　　　2006032404
5　　　　　a20050115　　　　NULL　　　　　NULL
```

（所影响的行数为 5 行）

结果说明:
left join是以A表的记录为基础的,A可以看成左表,B可以看成右表,left join是以左表为准的.
换句话说,左表(A)的记录将会全部表示出来,而右表(B)只会显示符合搜索条件的记录(例子中为: A.aID = B.bID).
B表记录不足的地方均为NULL.

***

#### right join

sql语句如下:

```sql
select * from A
right join B 
on A.aID = B.bID
```

结果如下:

```text
aID　　　　　aNum　　　　　bID　　　　　bName
1　　　　　a20050111　　　　1　　　　　2006032401
2　　　　　a20050112　　　　2　　　　　2006032402
3　　　　　a20050113　　　　3　　　　　2006032403
4　　　　　a20050114　　　　4　　　　　2006032404
NULL　　　　　NULL　　　　　8　　　　　2006032408
```

（所影响的行数为 5 行）

结果说明:
仔细观察一下,就会发现,和left join的结果刚好相反,这次是以右表(B)为基础的,A表不足的地方用NULL填充.

***

#### inner join

sql语句如下: 

```sql
select * from A
innerjoin B 
on A.aID = B.bID
```

结果如下:

```text
aID　　　　　aNum　　　　　bID　　　　　bName
1　　　　　a20050111　　　　1　　　　　2006032401
2　　　　　a20050112　　　　2　　　　　2006032402
3　　　　　a20050113　　　　3　　　　　2006032403
4　　　　　a20050114　　　　4　　　　　2006032404
```

结果说明:
很明显,这里只显示出了 A.aID = B.bID的记录.这说明inner join并不以谁为基础,它只显示符合条件的记录.

