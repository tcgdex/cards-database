import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Sprigatito",
		fr: "Poussacha",
		es: "Sprigatito",
		de: "Felori",
		it: "Sprigatito",
		pt: "Sprigatito",
		'es-mx': "Sprigatito"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [906],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Leafage",
			fr: "Feuillage",
			es: "Follaje",
			it: "Fogliame",
			pt: "Folhagem",
			de: "Blattwerk"
		},


		damage: 40
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
				cardmarket: 891892
			}
		},
	],
}

export default card
