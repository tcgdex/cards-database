import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Darkrai-EX",
		fr: "Darkrai-EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		491,
	],
	hp: 180,
	types: [
		"Darkness",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Pulse",
				fr: "Vibrobscur",
			},
			effect: {
				en: "This attack does 20 more damage for each Darkness Energy attached to all of your Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Darkness attachée à tous vos Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Head",
				fr: "Tête Obscure",
			},
			effect: {
				en: "If your opponent's Active Pokémon is Asleep, this attack does 80 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Endormi, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
