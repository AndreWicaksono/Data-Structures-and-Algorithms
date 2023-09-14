### Doubly Linked Lists: Swap Nodes in Pairs

> This exercise was included in Udemy course that I took: [JavaScript Data Structures & Algorithms + LEETCODE Exercises (by Scott Barrett)](https://www.udemy.com/course/data-structures-algorithms-javascript/).

Implement a member function called swapPairs() that swaps every two adjacent nodes of a doubly linked list.

Note: This DoublyLinkedList does not have a tail pointer which will make the implementation easier.

Output:

    The function should modify the doubly linked list in-place, swapping every two adjacent nodes.

Constraints:

    You can only traverse the doubly linked list once.

**Example 1:**

Suppose you have a DoublyLinkedList object, list, with the following values:
1 <-> 2 <-> 3 <-> 4 <-> 5

After calling the swapPairs() function:

`list.swapPairs();`

The doubly linked list should now have the following values:
2 <-> 1 <-> 4 <-> 3 <-> 5

**Example 2:**

Now suppose you have a DoublyLinkedList object, list, with the following values:
3 <-> 1 <-> 2 <-> 4

After calling the swapPairs() function:

`list.swapPairs();`

The doubly linked list should now have the following values:
1 <-> 3 <-> 4 <-> 2


#### Approach that I used
1. Create 4 pointers: `pointerStart`, `pointerEnd`, `pointerPreviousBlock` & `pointerNextBlock`.
2. `head` of Linked Lists will be start at `head.next`.
3. Create & set up iteration: total iteration = length / 2.
3. Update pointer link in iteration & add conditional logic for odd length.
