import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Flygon",
		fr: "Libegon",
		de: "Libelldra"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		330,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
			],
			name: {
				en: "Energy Shower",
				fr: "Averse d'énergie",
				de: "Energy Shower"
			},
			effect: {
				en: "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like.",
				fr: "Choisissez dans votre main autant de cartes Énergie de base que vous le voulez et attachez-les à vos Pokémon de la façon que vous voulez.",
				de: "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rainbow Burn",
				fr: "Brûlure arcenciel",
				de: "Rainbow Burn"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each type of basic Energy card attached to Flygon.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque type de carte Énergie de base attaché à Libegon.",
				de: "Does 30 damage plus 10 more damage for each type of basic Energy attached to Flygon."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fire",
			value: "-30"
		},
		{
			type: "Lightning",
			value: "-30"
		},
	],


	retreat: 2,

	thirdParty: {
		tcgplayer: 85521,
		cardmarket: 275881
	}
}

export default card
