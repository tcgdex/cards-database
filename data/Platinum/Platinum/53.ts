import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
		de: "Lucario"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Aura Sphere",
				fr: "Aurasphère",
				de: "Aura Sphere"
			},
			effect: {
				en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Does 10 damage to 1 of your opponent's benched Pokémon. (Don't apply Weakness and Resistance for benched Pokémon.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Do the Wave",
				fr: "Faites la vague",
				de: "Do the Wave"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each of your Benched Pokémon.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chacun des Pokémon de votre Banc.",
				de: "Does 20 damage plus 10 more damage for each of your Benched Pokémon."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	thirdParty: {
		cardmarket: 278474,
		tcgplayer: 86878
	}
}

export default card
