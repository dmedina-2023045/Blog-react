import { useState } from 'react'
import toast from 'react-hot-toast'

export const useComments = () => {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const addNewComment = (comment) => {
    setComments(prev => [comment, ...prev])
  }
  return {
    getComments,
    allComments: comments,
    isLoading,
    addNewComment
  }
}