export const createThreadUseCase = async () => {
  
  try {
    console.log('Creating thread...', import.meta.env.VITE_ASSISTANT_API);
    const resp = await fetch(`${ import.meta.env.VITE_ASSISTANT_API }/create-thread`,{
      method: 'POST'
    });

    const { id } = await resp.json() as { id: string };
    console.log('Thread created with ID:', id);
    return id;

  } catch (error) {

    throw new Error('Error creating thread');
  }

}