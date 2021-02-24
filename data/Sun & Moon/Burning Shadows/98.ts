import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Shiinotic",
		fr: "Lampignon",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		756,
	],
	hp: 100,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Morelull",
		fr: "Spododo",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Strength Sap",
				fr: "Vol-Force",
			},
			effect: {
				en: "Heal from this Pokémon 30 damage times the amount of Energy attached to your opponent's Active Pokémon.",
				fr: "Soignez à ce Pokémon 30 dégâts multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sleep Pulse",
				fr: "Pouls Dodo",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
