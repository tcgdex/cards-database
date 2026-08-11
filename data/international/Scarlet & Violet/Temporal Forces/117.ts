import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [809],
	set: Set,

	name: {
		'en-us': "Melmetal",
		'fr-fr': "Melmetal",
		'es-es': "Melmetal",
		'it-it': "Melmetal",
		'pt-br': "Melmetal",
		'de-de': "Melmetal"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Meltan",
		'fr-fr': "Meltan",
		'es-es': "Meltan",
		'it-it': "Meltan",
		'pt-br': "Meltan",
		'de-de': "Meltan"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 120
	}, {
		cost: ["Metal", "Metal", "Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Iron Bash",
			'fr-fr': "Coup de Fer",
			'es-es': "Ferropuño",
			'it-it': "Pugni Ferrei",
			'pt-br': "Pancada de Ferro",
			'de-de': "Eisenwumme"
		},

		damage: 230
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
	retreat: 4,
	regulationMark: "H",

	description: {
		'en-us': "At the end of its life-span, Melmetal will rust and fall apart. The small shards left behind will eventually be reborn as Meltan.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760747,
				tcgplayer: 542861
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760747,
				tcgplayer: 542861
			}
		},
	],

	illustrator: "Oswaldo KATO",

}

export default card
