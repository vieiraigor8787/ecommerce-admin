'use client'

import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from './dialog'

interface ModalProps {
  title: string
  description: string
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  children,
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>{title}</DialogHeader>
        <DialogDescription>{description}</DialogDescription>
      </DialogContent>
      <DialogContent>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  )
}
