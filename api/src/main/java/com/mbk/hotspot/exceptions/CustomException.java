package com.mbk.hotspot.exceptions;

@SuppressWarnings("unused")
public class CustomException extends RuntimeException {
    private final String message;

    public CustomException(String message) {
        super(message);
        this.message = message;
    }

    @Override
    public String getMessage() {
        return super.getMessage();
    }
}
