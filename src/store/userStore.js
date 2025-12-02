import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      babyAge: null,
      babyBirthDate: null,
      
      setUser: (user) => set({ user }),
      
      setBabyInfo: (birthDate) => {
        const today = new Date();
        const birth = new Date(birthDate);
        const ageInMonths = (today.getFullYear() - birth.getFullYear()) * 12 + 
                           (today.getMonth() - birth.getMonth());
        
        set({ babyBirthDate: birthDate, babyAge: ageInMonths });
      },
      
      logout: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
    }
  )
);
