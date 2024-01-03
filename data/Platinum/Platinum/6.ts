import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Dialga",
		fr: "Dialga",
		de: "Dialga"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		483,
	],
	hp: 100,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Time Aura",
				fr: "Aura temporelle",
				de: "Time Aura"
			},
			effect: {
				en: "As long as Dialga is your Active Pokémon, your opponent can't play any Pokémon from his or her hand to evolve his or her Active Pokémon.",
				fr: "Tant que Dialga est votre Pokémon Actif, votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer son Pokémon Actif.",
				de: "As long as Dialga is your Active Pokémon, your opponent can't play any Pokémon from his or her hand to evolve his or her Active Pokémon."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Burn",
				fr: "Brûlure métallique",
				de: "Metal Burn"
			},
			effect: {
				en: "Discard all Metal Energy attached to Dialga.",
				fr: "Défaussez toutes les Énergies Metal attachées à Dialga.",
				de: "Discard all  Energy attached to Dialga."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
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
