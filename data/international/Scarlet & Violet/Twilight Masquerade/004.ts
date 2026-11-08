import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [167],
	set: Set,

	name: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal",
		'es-es': "Spinarak",
		'it-it': "Spinarak",
		'pt-br': "Spinarak",
		'de-de': "Webarak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Bug Bite",
			'fr-fr': "Piqûre",
			'es-es': "Picadura",
			'it-it': "Coleomorso",
			'pt-br': "Picada",
			'de-de': "Käferbiss"
		},

		damage: 20
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
		'en-us': "Some fishers weave its sturdy thread into nets to catch fish Pokémon.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769178,
				tcgplayer: 550048
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769178,
				tcgplayer: 550048
			}
		},
	],
	
	illustrator: "Saya Tsuruta",

}

export default card