export interface UseCaseHandler<TRequest, TResponse> {
  handle(request: TRequest): Promise<TResponse>
}
