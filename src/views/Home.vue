<template>
  <div class="home">
    <div class="mx-auto max-w-screen-lg">
      <div class="flex items-center flex-col justify-center">
        <p 
          class="mb-6 my-10 text-2xl text-center text-gray-500" 
          v-if="typeof $store.state.quote._id != 'undefined'">
          <span>"{{ $store.state.quote.body}}"</span><br>
          <span class="text-gray-400">- {{ $store.state.quote.email }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

