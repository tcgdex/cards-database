import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Poké Pad",
		'fr-fr': "Poké Registre",
		'es-es': "Pokétableta",
		'es-mx': "Pokétableta",
		'de-de': "Poképad",
		'it-it': "Poké Pad",
		'pt-br': "Poké Tablet"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for a Pokémon that doesn't have a Rule Box, reveal it, and put it into your hand. Then, shuffle your deck. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)",
		'fr-fr': "Cherchez dans votre deck un Pokémon n'ayant pas d'encadré Règle, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck. (Les Pokémon-ex, Pokémon-V, etc. ont des encadrés Règle.)",
		'es-es': "Busca en tu baraja 1 Pokémon que no tenga un recuadro de regla, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja. (Los Pokémon ex, Pokémon V, etc., tienen recuadros de regla).",
		'es-mx': "Busca en tu mazo 1 Pokémon que no tenga un Recuadro de Regla, muéstralo y ponlo en tu mano. Después, baraja tu mazo. (Los Pokémon ex, los Pokémon V, etc., tienen Recuadros de Regla).",
		'de-de': "Durchsuche dein Deck nach 1 Pokémon, das kein Regelfeld hat, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck. (Pokémon-ex, Pokémon-V usw. haben Regelfelder.)",
		'it-it': "Cerca nel tuo mazzo un Pokémon che non ha una regola speciale, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia il tuo mazzo. I Pokémon-ex, i Pokémon-V, ecc. hanno regole speciali.",
		'pt-br': "Procure no seu baralho por um Pokémon que não tiver uma Caixa de Regras, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho. (Pokémon ex, Pokémon V, etc. têm Caixas de Regras.)"
	},

	trainerType: "Item",
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684332,
				cardmarket: 877498
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684332,
				cardmarket: 877498
			}
		}
	],

}

export default card
