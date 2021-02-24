import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Hypno",
		fr: "Hypnomade",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		97,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Drowzee",
		fr: "Soporifik",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Goodnight, Babies",
				fr: "Bonne Nuit Mes Petits",
			},
			effect: {
				en: "Once during your turn (before your attack), you may leave both Active Pokémon Asleep.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez laisser les deux Pokémon Actifs Endormis.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Zen Headbutt",
				fr: "Psykoud'Boul",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
