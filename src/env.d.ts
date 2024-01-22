interface ImportMetaEnv {
	readonly SUPABASE_URL: string
	readonly SUPABASE_ANON_KEY: string
	readonly NODE_ENV: 'DEVELOPMENT' | 'PRODUCTION'
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
