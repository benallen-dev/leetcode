package main

import (
	"fmt"
	"time"
)

/**
 * Definition for singly-linked list.
 */
type ListNode struct {
	Val  int
	Next *ListNode
}
func hasCycle(head *ListNode) bool {
	// Special case
	if head == nil {
		return false
	}

	var visited map[*ListNode]bool = make(map[*ListNode]bool)
	curr := head

	for ok := false ; !ok ; ok = visited[curr] {
		visited[curr] = true

		if curr.Next == nil {
			return false
		}

		curr = curr.Next
	}
	
	return true
}

func testCase1() {

	var (
		node1 = ListNode{Val: 3, Next: nil}
		node2 = ListNode{Val: 2, Next: nil}
		node3 = ListNode{Val: 0, Next: nil}
		node4 = ListNode{Val: -4, Next: nil}
	)

	node1.Next = &node2
	node2.Next = &node3
	node3.Next = &node4
	node4.Next = &node2

	fmt.Println(hasCycle(&node1))
}

func main() {
	now := time.Now()
	testCase1()
	fmt.Println(time.Since(now))
}
