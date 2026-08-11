import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [607],
	set: Set,

	name: {
		'en-us': "Litwick",
		'fr-fr': "Funécire",
		'de-de': "Lichtel",
		'it-it': "Litwick",
		'pt-br': "Litwick",
		'es-es': "Litwick",
		'es-mx': "Litwick"
	},

	illustrator: "satoma",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Brighten and Burn",
			'fr-fr': "Brille et Brûle",
			'de-de': "Erleuchten und Verbrennen",
			'it-it': "Illumina e Brucia",
			'pt-br': "Clarear e Queimar",
			'es-es': "Iluminar y Quemar",
			'es-mx': "Iluminar y Quemar"
		},

		effect: {
			'en-us': "Look at the top card of your deck. You may discard that card.",
			'fr-fr': "Regardez la carte du dessus de votre deck. Vous pouvez défausser cette carte-là.",
			'de-de': "Schau dir die oberste Karte deines Decks an. Du kannst jene Karte auf deinen Ablagestapel legen.",
			'it-it': "Guarda la prima carta del tuo mazzo. Puoi scartare quella carta.",
			'pt-br': "Olhe a carta de cima do seu baralho. Você pode descartar aquela carta.",
			'es-es': "Mira la primera carta de tu baraja. Puedes descartar esa carta.",
			'es-mx': "Mira la primera carta de tu mazo. Puedes descartar esa carta."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835931,
				tcgplayer: 642464
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835931,
				tcgplayer: 642464
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836521,
				tcgplayer: 642709
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836522,
				tcgplayer: 642637
			}
		},
	],
}

export default card
