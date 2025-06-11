import mongoose from "mongoose";
import "dotenv/config";
const url = process.env.DB_URL;
import topicModel from "./src/models/schema/topic.schema.js";

async function seedData() {
  try {
    await mongoose.connect(url);

    const dataStructurestopics = [
      {
        name: "Arrays and Strings",
        subtopics: [
          {
            name: "Two Pointers",
            leetcode: "https://leetcode.com/problem-list/two-pointers",
            youTube: "https://youtu.be/B2L4mAglJZA?si=lTrjkCuQS-LRLVgL",
            articleLink: "https://leetcode.com/articles/two-pointer-technique",
            level: "Medium"
          },
          {
            name: "Sliding Window",
            leetcode: "https://leetcode.com/tag/sliding-window/",
            youTube: "https://youtu.be/8DEdxM2EDgg",
            articleLink: "https://leetcode.com/articles/sliding-window-maximum/",
            level: "Medium"
          },
          {
            name: "Prefix Sum",
            leetcode: "https://leetcode.com/tag/prefix-sum/",
            youTube: "https://youtu.be/H3ZhB2D3QvY",
            articleLink: "https://leetcode.com/problems/range-sum-query-immutable/",
            level: "Easy"
          }
        ]
      },
      {
        name: "Linked List",
        subtopics: [
          {
            name: "Reversal Techniques",
            leetcode: "https://leetcode.com/problems/reverse-linked-list/",
            youTube: "https://youtu.be/O0By4Zq0OFc",
            articleLink: "https://leetcode.com/articles/reverse-linked-list/",
            level: "Easy"
          },
          {
            name: "Cycle Detection",
            leetcode: "https://leetcode.com/problems/linked-list-cycle/",
            youTube: "https://youtu.be/gBTe7lFR3vc",
            articleLink: "https://leetcode.com/articles/linked-list-cycle/",
            level: "Easy"
          },
          {
            name: "Merge K Sorted Lists",
            leetcode: "https://leetcode.com/problems/merge-k-sorted-lists/",
            youTube: "https://youtu.be/q5a5OiGbT6Q",
            articleLink: "https://leetcode.com/articles/merge-k-sorted-list/",
            level: "Hard"
          }
        ]
      },
      {
        name: "Trees",
        subtopics: [
          {
            name: "Binary Tree Traversals",
            leetcode: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
            youTube: "https://youtu.be/M6lYob8STMI",
            articleLink: "https://leetcode.com/articles/binary-tree-inorder-traversal/",
            level: "Medium"
          },
          {
            name: "Binary Search Tree",
            leetcode: "https://leetcode.com/tag/binary-search-tree/",
            youTube: "https://youtu.be/pYT9F8_LFTM",
            articleLink: "https://leetcode.com/articles/validate-binary-search-tree/",
            level: "Medium"
          },
          {
            name: "Lowest Common Ancestor",
            leetcode: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
            youTube: "https://youtu.be/13m9ZCB8gjw",
            articleLink: "https://leetcode.com/articles/lowest-common-ancestor-of-a-binary-tree/",
            level: "Medium"
          }
        ]
      },
      {
        name: "Stacks and Queues",
        subtopics: [
          {
            name: "Monotonic Stack",
            leetcode: "https://leetcode.com/problems/daily-temperatures/",
            youTube: "https://youtu.be/WGm4Kj3lhRI",
            articleLink: "https://leetcode.com/articles/daily-temperatures/",
            level: "Medium"
          },
          {
            name: "Implement Queue using Stack",
            leetcode: "https://leetcode.com/problems/implement-queue-using-stacks/",
            youTube: "https://youtu.be/Tq3uT4NB13Q",
            articleLink: "https://leetcode.com/articles/implement-queue-using-stacks/",
            level: "Easy"
          }
        ]
      },
      {
        name: "Graphs",
        subtopics: [
          {
            name: "BFS / DFS",
            leetcode: "https://leetcode.com/tag/breadth-first-search/",
            youTube: "https://youtu.be/Tl7mi9QmLns",
            articleLink: "https://leetcode.com/problems/rotting-oranges/",
            level: "Medium"
          },
          {
            name: "Topological Sort",
            leetcode: "https://leetcode.com/problems/course-schedule/",
            youTube: "https://youtu.be/qW1O1aL1-Vg",
            articleLink: "https://leetcode.com/articles/course-schedule/",
            level: "Medium"
          },
          {
            name: "Dijkstra’s Algorithm",
            leetcode: "https://leetcode.com/problems/network-delay-time/",
            youTube: "https://youtu.be/EFg3u_E6eHU",
            articleLink: "https://leetcode.com/problems/network-delay-time/",
            level: "Hard"
          }
        ]
      },
      {
        name: "Heaps",
        subtopics: [
          {
            name: "Min Heap / Max Heap",
            leetcode: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
            youTube: "https://youtu.be/3DdP6Ef8YZM",
            articleLink: "https://leetcode.com/articles/kth-largest-element-in-an-array/",
            level: "Medium"
          },
          {
            name: "Heapify",
            leetcode: "https://leetcode.com/problems/merge-k-sorted-lists/",
            youTube: "https://youtu.be/q5a5OiGbT6Q",
            articleLink: "https://leetcode.com/articles/merge-k-sorted-list/",
            level: "Hard"
          }
        ]
      },
      {
        name: "Dynamic Programming",
        subtopics: [
          {
            name: "0/1 Knapsack",
            leetcode: "https://leetcode.com/problems/partition-equal-subset-sum/",
            youTube: "https://youtu.be/GS_OqZb2CWc",
            articleLink: "https://leetcode.com/articles/partition-equal-subset-sum/",
            level: "Medium"
          },
          {
            name: "Longest Common Subsequence",
            leetcode: "https://leetcode.com/problems/longest-common-subsequence/",
            youTube: "https://youtu.be/Ua0GhsJSlWM",
            articleLink: "https://leetcode.com/articles/longest-common-subsequence/",
            level: "Medium"
          },
          {
            name: "Tabulation & Memoization",
            leetcode: "https://leetcode.com/problems/climbing-stairs/",
            youTube: "https://youtu.be/Y0lT9Fck7qI",
            articleLink: "https://leetcode.com/articles/climbing-stairs/",
            level: "Easy"
          }
        ]
      }
    ];

    await topicModel.deleteMany({});
    await topicModel.insertMany(dataStructurestopics);
    console.log("Seeding completed.");
  } catch (error) {
    console.error("Seeding error:", error);
  } finally {
    mongoose.disconnect();
  }
}

seedData();
