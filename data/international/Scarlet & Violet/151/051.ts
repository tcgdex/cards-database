import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [51],
	set: Set,

	name: {
		'fr-fr': "Triopikeur",
		'en-us': "Dugtrio",
		'es-es': "Dugtrio",
		'it-it': "Dugtrio",
		'pt-br': "Dugtrio",
		'de-de': "Digdri"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Taupiqueur",
		'en-us': "Diglett",
		'es-es': "Diglett",
		'it-it': "Diglett",
		'pt-br': "Diglett",
		'de-de': "Digda"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Culbute Surprise",
			'en-us': "Headbutt Bounce",
			'es-es': "Bote Cabezazo",
			'it-it': "Rimbalzo Bottintesta",
			'pt-br': "Cabeçada Ricochete",
			'de-de': "Abrupter Kopfstoß"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'fr-fr': "Boue-Bombe",
			'en-us': "Mud Bomb",
			'es-es': "Bomba Fango",
			'it-it': "Pantanobomba",
			'pt-br': "Bomba de Lama",
			'de-de': "Schlammbombe"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Its three heads bob separately up and down to loosen the soil nearby, making it easier for it to burrow.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733646,
				tcgplayer: 516216,
				cardtrader: 261171
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733646,
				tcgplayer: 516216,
				cardtrader: 261171
			}
		},
	],

	illustrator: "Miki Tanaka",

	
}

export default card
