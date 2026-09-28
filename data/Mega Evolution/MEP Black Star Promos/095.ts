import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Lucario",
	},

	illustrator: "Taiga Kasai",
	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",
	dexId: [448],

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Aura Sphere",
			fr: "Aurasphère",
		},

		effect: {
			en: "This attack also does 60 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 60 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Psychic",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895610,
				tcgplayer: 713263
			}
		}
	],
}

export default card
