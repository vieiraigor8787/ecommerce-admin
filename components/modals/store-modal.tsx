"use client"

import {useStoreModal} from "@/hooks/use-store-modal"
import { Modal } from '../ui/modal'

export default function StoreModal() {
  const storeModel = useStoreModal()

  return ( 
    <Modal title="create store" description='add a nwe store to manage products and categories' isOpen={storeModel.isOpen} onClose={storeModel.onClose}>
      Future create store form
    </Modal>
  )
}
