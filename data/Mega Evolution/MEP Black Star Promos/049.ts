import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

name: {
		en: "Snivy",
		fr: "Vipélierre",
		es: "Snivy",
		'es-mx': "Snivy",
		de: "Serpifeu",
		it: "Snivy",
		pt: "Snivy"
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
			en: "Vine Whip",
			fr: "Fouet Lianes",
			es: "Látigo Cepa",
			'es-mx': "Látigo Cepa",
			de: "Rankenhieb",
			it: "Frustata",
			pt: "Chicote de Vinha"
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
