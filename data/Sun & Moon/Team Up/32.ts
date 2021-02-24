import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Articuno",
		fr: "Artikodin",
	},
	illustrator: "Yusuke Ohmura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		144,
	],
	hp: 110,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Blizzard Veil",
				fr: "Voile Blizzard",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to your Benched Water Pokémon.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte sur vos Pokémon Water de Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Cold Cyclone",
				fr: "Cyclone Froid",
			},
			effect: {
				en: "Move 2 Water Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez 2 Énergies Water de ce Pokémon vers l’un de vos Pokémon de Banc.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
