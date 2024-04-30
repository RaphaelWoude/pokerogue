import { SimpleTranslationEntries } from "#app/plugins/i18n";

/**
 * The menu namespace holds most miscellaneous text that isn't directly part of the game's
 * contents or directly related to Pokemon data. This includes menu navigation, settings,
 * account interactions, descriptive text, etc.
 */
export const menu: SimpleTranslationEntries = {
    "cancel": "Annuleren",
    "continue": "Ga verder",
    "dailyRun": "Dagelijkse Run (Beta)",
    "loadGame": "Spel laden",
    "newGame": "Nieuw spel",
    "selectGameMode": "Selecteer een spelmodus.",
    "logInOrCreateAccount": "Log in of maak een account aan om te beginnen. Geen e-mail nodig!",
    "username": "Gebruikersnaam",
    "password": "Wachtwoord",
    "login": "Inloggen",
    "register": "Registreer",
    "emptyUsername": "Gebruikersnaam mag niet leeg zijn",
    "invalidLoginUsername": "De opgegeven gebruikersnaam is ongeldig",
    "invalidRegisterUsername": "Gebruikersnaam mag alleen letters, cijfers of underscores bevatten",
    "invalidLoginPassword": "Het opgegeven wachtwoord is ongeldig",
    "invalidRegisterPassword": "Wachtwoord moet 6 tekens of langer zijn",
    "usernameAlreadyUsed": "De opgegeven gebruikersnaam is al in gebruik",
    "accountNonExistent": "De opgegeven gebruiker bestaat niet",
    "unmatchingPassword": "Het opgegeven wachtwoord komt niet overeen",
    "passwordNotMatchingConfirmPassword": "Wachtwoord moet overeenkomen met wachtwoord bevestigen",
    "confirmPassword": "Wachtwoord bevestigen",
    "registrationAgeWarning": "Door je te registreren bevestig je dat je 13 jaar of ouder bent.",
    "backToLogin": "Terug naar Inloggen",
    "failedToLoadSaveData": "Opgeslagen gegevens kunnen niet worden geladen. \nLaad de pagina opnieuw. If this continues, please contact the administrator.",
    "sessionSuccess": "Sessie succesvol geladen.",
    "failedToLoadSession": "Je sessiegegevens konden niet worden geladen.\nHet kan beschadigd zijn.",
    "boyOrGirl": "Ben je een jongen of een meisje?",
    "boy": "Jongen",
    "girl": "Meisje",
    "bossAppeared": "{{bossName}} verscheen.",
    "trainerAppeared": "{{trainerName}}\nwil graag vechten!",
    "singleWildAppeared": "Een wilde {{pokemonName}} is verschenen!",
    "multiWildAppeared": "Een wilde {{pokemonName1}}\nen {{pokemonName2}} appeared!",
    "playerComeBack": "Kom terug, {{pokemonName}}!",
    "trainerComeBack": "{{trainerName}} heeft {{pokemonName}} teruggetrokken!",
    "playerGo": "Go! {{pokemonName}}!",
    "trainerGo": "{{trainerName}} stuurt {{pokemonName}} uit!",
    "switchQuestion": "Wil je\n{{pokemonName}} wisselen?",
    "trainerDefeated": `Je hebt\n{{trainerName}} verslagen!`,
    "pokemonCaught": "{{pokemonName}} is gevangen!",
    "pokemon": "Pokémon",
    "sendOutPokemon": "Go! {{pokemonName}}!",
    "attackFailed": "Maar het is mislukt!",
    "attackHitsCount": `{{count}} keer geraakt!`,
    "expGain": "{{pokemonName}} kreeg\n{{exp}} EXP. Punten!",
    "levelUp": "{{pokemonName}} groeide naar\nLv. {{level}}!",
    "learnMove": "{{pokemonName}} heeft\n{{moveName}} geleerd!",
    "learnMovePrompt": "{{pokemonName}} wil de stap\n {{moveName}} leren.",
    "learnMoveLimitReached": "Echter, {{pokemonName}} kent\nal vier moves.",
    "learnMoveReplaceQuestion": "Mag er een stap vergetten worden en, vervangen worden door {{moveName}}?",
    "learnMoveStopTeaching": "Stop met het leren van\n{{moveName}}?",
    "learnMoveNotLearned": "{{pokemonName}} heeft de stap {{moveName}} niet geleerd.",
    "learnMoveForgetQuestion": "Welke stap moet je vergeten?",
    "learnMoveForgetSuccess": "{{pokemonName}} vergat hoe {{moveName}} te gebruiken.",
    "levelCapUp": "Het level niveau\n is verhoogd naar {{levelCap}}!",
    "moveNotImplemented": "{{moveName}} is nog niet geïmplementeerd en kan niet worden geselecteerd.",
    "moveDisabled": "{{moveName}} is uitgeschakeld!",
    "noPokeballForce": "Een onzichtbare kracht verhindert\nhet gebruik van Poké Balls.",
    "noPokeballTrainer": "Je kunt de Pokémon\nvan een andere trainer niet vangen!",
    "noPokeballMulti": "Je kunt alleen een Poké Ball\ngooien als er nog één Pokémon over is!",
    "noPokeballStrong": "Deze Pokémon is te sterk om gevangen te worden!\nJe moet hem eerst verzwakken!",
    "noEscapeForce": "Een onzichtbare kracht\n voorkomt ontsnapping.",
    "noEscapeTrainer": "Je kunt niet weglopen\n voor een trainersgevecht!",
    "noEscapePokemon": "{{pokemonName}}'s {{moveName}}\nvoorkomt {{escapeVerb}}!",
    "runAwaySuccess": "Je bent veilig weggekomen!",
    "runAwayCannotEscape": 'Je kunt niet ontsnappen!',
    "escapeVerbSwitch": "schakelen",
    "escapeVerbFlee": "vluchtend",
    "notDisabled": "{{moveName}} is niet meer uitgeschakeld!",
    "skipItemQuestion": "Weet je zeker dat je een item wilt overslaan?",
    "eggHatching": "Oh?",
    "ivScannerUseQuestion": "IV Scanner gebruiken op {{pokemonName}}?",
} as const;