import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [672],
	set: Set,

	name: {
		'en-us': "Skiddo",
		'fr-fr': "Cabriolaine",
		'es-es': "Skiddo",
		'it-it': "Skiddo",
		'pt-br': "Skiddo",
		'de-de': "Mähikel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Vine Whip",
			'fr-fr': "Fouet Lianes",
			'es-es': "Látigo Cepa",
			'it-it': "Frustata",
			'pt-br': "Chicote de Vinha",
			'de-de': "Rankenhieb"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Smash Kick",
			'fr-fr': "Coud'Pattes",
			'es-es': "Patada Destrucción",
			'it-it': "Calcio Esplosivo",
			'pt-br': "Chute Poderoso",
			'de-de': "Schmetterkick"
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
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Tika Matsuno",

	description: {
		'en-us': "Until recently, people living in the mountains would ride on the back of these Pokémon to traverse the mountain paths.",
	},

	thirdParty: {
        cardmarket: 702308,
        tcgplayer: 487053
    }
}

export default card