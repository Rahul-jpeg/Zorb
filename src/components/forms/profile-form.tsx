'use client';
import { ZIndex } from '@tsparticles/engine';
import { userAgent } from 'next/server';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  EditProfileUserSchemaType,
  EditUserProfileSchema,
} from '@/lib/types';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';

type Props = {};

const ProfileForm = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<EditProfileUserSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={() => {}}
      >
        <FormField
          disabled={isLoading}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">
                Full Name
              </FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          disabled={true}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  type="email"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="self-start hover:bg-[#2F006a] bg-[#20004d] text-white"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving
            </>
          ) : (
            'Save'
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ProfileForm;
