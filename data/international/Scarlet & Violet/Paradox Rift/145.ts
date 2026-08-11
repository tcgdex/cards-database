import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [190],
	set: Set,

	name: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'es-es': "Aipom",
		'it-it': "Aipom",
		'pt-br': "Aipom",
		'de-de': "Griffel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Filch",
			'fr-fr': "Maraudage",
			'es-es': "Birlar",
			'it-it': "Furtarello",
			'pt-br': "Furtar",
			'de-de': "Mopsen"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre uma carta.",
			'de-de': "Ziehe 1 Karte."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Smack",
			'fr-fr': "Claque",
			'es-es': "Palmetazo",
			'it-it': "Schiaffo",
			'pt-br': "Estalo",
			'de-de': "Klatscher"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It searches for prey from the tops of trees. When it spots its favorite food, Bounsweet, Aipom gets excited and pounces.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740684,
				tcgplayer: 523826,
				cardtrader: 265248
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740684,
				tcgplayer: 523826,
				cardtrader: 265248
			}
		},
	],

	illustrator: "aspara",

	
}

export default card
