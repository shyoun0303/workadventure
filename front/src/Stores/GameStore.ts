import { writable } from "svelte/store";

export const userMovingStore = writable(false);

export const requestVisitCardsStore = writable<string | null>(null);

export const requestActionsMenuStore = writable(false);

export const actionsMenuPlayerNameStore = writable<string | null>(null);

export const userIsAdminStore = writable(false);

export const limitMapStore = writable(false);
