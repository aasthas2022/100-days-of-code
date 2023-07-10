/* 1757. Recyclable and Low Fat Products
 - https://leetcode.com/problems/recyclable-and-low-fat-products/ */

SELECT product_id
    FROM Products
    WHERE low_fats = 'Y' AND recyclable = 'Y'

/** Learning:
SQL (Structured Query Language) uses a single equals sign (=) as the equality operator instead of the double equals sign (==) that some other programming languages use, such as JavaScript, C++, or Python.

There are a few reasons for this:
- Legacy and Consistency: SQL was initially developed in the early 1970s, and the syntax was inspired by the mathematical notation, which uses a single equals sign for equality. Since then, it has maintained its original syntax for backward compatibility and consistency.
- Different Purpose: Unlike languages like C++ or JavaScript, which are general-purpose programming languages and use == for equality comparison and = for assignment, SQL is a declarative language primarily used for data manipulation and retrieval. In SQL, = is used for comparison, not assignment, as assignment doesn't occur in the same way as in other languages. SQL's syntax reflects its specific use cases and goals.
- Simplicity: SQL aims to be a simple and human-readable language. Using a single equals sign for equality is more straightforward and easier for non-programmers to understand.

It's important to note that while SQL does not use == for equality, it does have other operators, like != or <> for inequality, as well as various keywords like BETWEEN, IN, LIKE, and others to create more complex query conditions.
**/