//api base config with fetch

export const baseApi = async (input: string | URL | Request, init?: RequestInit | undefined): Promise<Response> => {
	return await fetch(input, init)
}
