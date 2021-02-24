import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Komala",
		fr: "Dodoala",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		775,
	],
	hp: 80,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Comatose",
				fr: "Hypersommeil",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, whenever you attach an Energy from your hand to it, it is now Asleep.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, lorsque vous lui attachez une Énergie de votre main, il est désormais Endormi.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypno Roll",
				fr: "Roulade Hypnotique",
			},
			effect: {
				en: "This attack can be used if this Pokémon is Asleep. If it is not Asleep, this attack does nothing.",
				fr: "Cette attaque peut être utilisée si ce Pokémon est Endormi. S’il n’est pas Endormi, cette attaque ne fait rien.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
