# Longest Work Slot

26 nurses have employee numbers 0 through 25 that map to ids 'a' through 'z'. They work in shifts beginning at time 0, and only one works at a time. When one stops, the next nurse begins immediately.

Given the employee numbers and the times at which their shifts end in a 2-D array where each element is [employee number, leave time], find the ID of the nurse with the longest single shift.

Note: If the same employee has two contiguous shifts, they are considered to be different.

Example

leave Times = [[0, 3], [2, 5], [0, 9], [1,15]]

In the example, the time slots are as follows:

    Employee 0 works from t=0 to t=3, i.e., for 3 units of time.
    2 works from t=3 to t=5, 2 units.
    0 works from t=5 to t=9, 4 units.
    1 works from t=9 to t=15, 6 units.

The longest shift is of 6 units by employee 1, so return the ID of employee 1, i.e., 'b'.

Function Description

Complete the function findLongestSingleSlot in the editor below.

findLongestSingleSlot has the following parameter(s):
    int leaveTimes[n][2]: the first column contains the employee number, the second contains the time at which the employee leaves the task.

Returns:

    char: the ID of the employee that has the longest single slot.

Constraints

    1 ≤ n ≤ 105
    0 ≤ leaveTimes[i][0] ≤ 25 (0 ≤ i < n)
    1 ≤ leaveTimes[i][1] ≤ 108 (0 ≤ i < n)
    There will only be one employee having the longest single time slot.
    leaveTimes is sorted in ascending order of leaveTimes[i][1]

Input Format For Custom Testing

The first line contains an integer, n, the number of elements in leaveTimes.

The second line contains the integer 2, the number of columns in each leaveTimes[i].

Each line i of the n subsequent lines (where 0 ≤ i < n) contains two space-separated integers, leaveTimes[i][0] and leaveTimes[i][1].

Sample Case

Sample Input For Custom Testing

```bash
STDIN    Function
-----    --------
5     →  leaveTimes[] size n = 5
2     →  leaveTimes[][] size = 2
0 1   →  leaveTimes = [[0, 1], [0, 3], [4, 5], [5, 6], [4, 10]]
0 3
4 5
5 6
4 10
```

Sample Output

```bash
  e
```

Explanation

The time slots are as follows:

    Employee 0 works from t=0 to t=1, i.e, for 1-0=1 unit of time.
    Employee 0 works from t=1 to t=3, i.e, for 3-1=2 unit of time.
    Employee 4 works from t=3 to t=5, i.e, for 5-2=4 units of time.
    Employee 5 works from t=5 to t=6, i.e, for 6-5=1 units of time.
    Employee 4 works from t=6 to t=10, i.e, for 10-6=4 units of time. 
    The longest time slot is of 4 units of time, by employee 4, who has Id = 'e'. 
    Note that the first two slots by employee 0 are to be considered two different slots.

