import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Chikorita",
		fr: "Germignon",
		de: "Endivie",
		it: "Chikorita",
		es: "Chikorita",
		pt: "Chikorita",
		'es-mx': "Chikorita"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [152],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Razor Leaf",
			fr: "Tranch’Herbe",
			de: "Rasierblatt",
			it: "Foglielama",
			es: "Hoja Afilada",
			pt: "Folha Navalha",
			'es-mx': "Hojas Navaja"
		},

		damage: 30
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
				cardmarket: 886615,
				tcgplayer: 699870
			}
		},
	],
}

export default card
