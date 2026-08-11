import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [78],
	set: Set,

	name: {
		'en-us': "Rapidash",
		'fr-fr': "Galopa",
		'de-de': "Gallopa",
		'it-it': "Rapidash",
		'es-es': "Rapidash",
		'pt-br': "Rapidash",
		'es-mx': "Rapidash"
	},

	illustrator: "SIE NANAHARA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta",
		'de-de': "Ponita",
		'it-it': "Ponyta",
		'es-es': "Ponyta",
		'pt-br': "Ponyta",
		'es-mx': "Ponyta"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Hurried Gait",
			'fr-fr': "Allure Pressée",
			'de-de': "Eiliger Gang",
			'it-it': "Andatura Frettolosa",
			'es-es': "Marcha Apresurada",
			'pt-br': "Marcha Apressada",
			'es-mx': "Marcha Apresurada"
		},

		effect: {
			'en-us': "Once during your turn, you may draw a card.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez piocher une carte.",
			'de-de': "Einmal während deines Zuges kannst du 1 Karte ziehen.",
			'it-it': "Una sola volta durante il tuo turno, puoi pescare una carta.",
			'es-es': "Una vez durante tu turno, puedes robar 1 carta.",
			'pt-br': "Uma vez durante o seu turno, você poderá comprar uma carta.",
			'es-mx': "Una vez durante tu turno, puedes robar 1 carta."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Fire Mane",
			'fr-fr': "Crinière de Feu",
			'de-de': "Flammenmähne",
			'it-it': "Criniera di Fuoco",
			'es-es': "Crin de Fuego",
			'pt-br': "Crina de Fogo",
			'es-mx': "Melena de Fuego"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825903,
				tcgplayer: 632853
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825903,
				tcgplayer: 632853
			}
		},
	],
}

export default card
