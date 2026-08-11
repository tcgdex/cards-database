import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [946],
	set: Set,

	name: {
		'en-us': "Bramblin",
		'fr-fr': "Virovent",
		'es-es': "Bramblin",
		'it-it': "Bramblin",
		'pt-br': "Bramblin",
		'de-de': "Weherba"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Spike Sting",
			'fr-fr': "Pic Piquant",
			'es-es': "Picotazo Púas",
			'it-it': "Aculeopuntura",
			'pt-br': "Ferroada de Espinhos",
			'de-de': "Stachelstich"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Not even Bramblin knows where it is headed as it tumbles across the wilderness, blown by the wind. It loathes getting wet.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760650,
				tcgplayer: 542680
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760650,
				tcgplayer: 542680
			}
		},
	],

	illustrator: "Tetsu Kayama",

}

export default card