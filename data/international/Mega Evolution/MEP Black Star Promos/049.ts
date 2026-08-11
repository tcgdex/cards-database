import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

name: {
		'en-us': "Snivy",
		'fr-fr': "Vipélierre",
		'es-es': "Snivy",
		'es-mx': "Snivy",
		'de-de': "Serpifeu",
		'it-it': "Snivy",
		'pt-br': "Snivy"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	dexId: [495],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Vine Whip",
			'fr-fr': "Fouet Lianes",
			'es-es': "Látigo Cepa",
			'es-mx': "Látigo Cepa",
			'de-de': "Rankenhieb",
			'it-it': "Frustata",
			'pt-br': "Chicote de Vinha"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 886618,
				tcgplayer: 699873
			}
		},
	],
}

export default card
