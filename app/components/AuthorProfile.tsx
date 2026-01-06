interface AuthorProfileProps {
  author: {
    name: string
    bio: string
    avatarUrl: string
  }
}

export function AuthorProfile({ author }: AuthorProfileProps) {
  return (
    <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex items-start gap-4">
        <img
          src={author.avatarUrl}
          alt={`${author.name}'s avatar`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-bold text-lg text-neutral-900 dark:text-neutral-100">
            {author.name}
          </h3>
          <p className="mt-1 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
            {author.bio}
          </p>
        </div>
      </div>
    </div>
  )
}
