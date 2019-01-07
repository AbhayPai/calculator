import Event from "./Helpers/event";

export function ready() {
    return Event.ready.apply(this, arguments);
}

export function addEventListener() {
    return Event.addEventListener.apply(this, arguments);
}

export function removeEventListener() {
    return Event.removeEventListener.apply(this, arguments);
}

export function invoke() {
    return Event.invoke.apply(this, arguments);
}

export function listen() {
    return Event.listen.apply(this, arguments);
}

export function delegate() {
    return Event.delegate.apply(this, arguments);
}

export function getTarget() {
    return Event.getTarget.apply(this, arguments);
}

export function preventDefault() {
    return Event.preventDefault.apply(this, arguments);
}

export function triggerEvent() {
    return Event.triggerEvent.apply(this, arguments);
}
