import Config

if config_env() == :prod do
  secret_key_base =
    System.get_env("SECRET_KEY_BASE") ||
      raise "SECRET_KEY_BASE not set. You can generate one with: mix phx.gen.secret"

  config :chat_core, ChatCore.Endpoint,
    secret_key_base: secret_key_base
end
