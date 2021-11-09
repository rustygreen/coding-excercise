let userHasPermission = subscription.isTrial || account.balance > 0 || user.isAuthenticated;
if (userHasPermission) {
  allowAccess();
}

/*
 * It may not be clear what we're checking for in the if statement just based on the conditions. By moving this to a descriptive variable,
 * the intent of this code is more obvious.
 */