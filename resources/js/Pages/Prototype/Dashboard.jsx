import React from 'react';
import { Head } from '@inertiajs/react';
import Authenticated from '@/Layouts/Authenticated/Index';

export default function Dashboard() {
  return (
    <>
        <Head title='Dashboard'/>
        <Authenticated/>
    </>
  )
}
