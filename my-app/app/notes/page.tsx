import { createClient } from '@/utils/supabase/server'

export default async function Page() {
    const supabase = createClient()
    const { data: notes, error } = await (await supabase).from('notes').select()
    
    console.log('Supabase response:', { data: notes, error })  // This will show in your server console
    
    if (error) {
      console.error('Supabase error:', error)
      return <div>Error loading notes</div>
    }
  
    return <pre>{JSON.stringify(notes, null, 2)}</pre>
  }