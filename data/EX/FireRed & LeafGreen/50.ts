import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Wartortle",
		fr: "Carabaffe",
		de: "Schillok"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		8,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Squirtle",
		fr: "Carapuce"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				de: "Water Gun"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Water Energy attached to Wartortle but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Carabaffe qui n'a pas été utilisée pour payer le Coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Does 20 damage plus 10 more damage for each  Energy attached to Wartortle but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way."
			},
			damage: "20+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smash Turn",
				fr: "Tour fracassant",
				de: "Smash Turn"
			},
			effect: {
				en: "After your attack, you may switch Wartortle with 1 of your Benched Pokémon.",
				fr: "Après votre attaque, vous pouvez échanger Carabaffe avec 1 des Pokémon de votre Banc.",
				de: "After your attack, you may switch Wartortle with 1 of your Benched Pokémon."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276226,
		tcgplayer: 90486
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		},
		{
			type: "normal",
			stamp: ["pre-release"]
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"]
		}
	]
}

export default card
