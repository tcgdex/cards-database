import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [625],
	set: Set,

	name: {
		'en-us': "Bisharp",
		'fr-fr': "Scalproie",
		'es-es': "Bisharp",
		'it-it': "Bisharp",
		'pt-br': "Bisharp",
		'de-de': "Caesurio"
	},

	illustrator: "DOM",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
		'es-es': "Pawniard",
		'it-it': "Pawniard",
		'pt-br': "Pawniard",
		'de-de': "Gladiantri"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Spike Draw",
			'fr-fr': "Pique-Pioche",
			'es-es': "Robo Pico",
			'it-it': "Battipesca",
			'pt-br': "Comprada Espinhosa",
			'de-de': "Stachelzug"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Power Edge",
			'fr-fr': "Lame Puissante",
			'es-es': "Filo Poderoso",
			'it-it': "Colpotente",
			'pt-br': "Gume Poderoso",
			'de-de': "Kraftklinge"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It's accompanied by a large retinue of Pawniard. Bisharp keeps a keen eye on its minions, ensuring none of them even think of double-crossing it.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691811,
				tcgplayer: 478231
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691811,
				tcgplayer: 478231
			}
		},
	],
}

export default card
