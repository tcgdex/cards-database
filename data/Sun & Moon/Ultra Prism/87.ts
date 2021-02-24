import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Bronzong",
		fr: "Archéodong",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		437,
	],
	hp: 110,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Psy Bolt",
				fr: "Choc Mental",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Resonance",
				fr: "Résonance Psychique",
			},
			effect: {
				en: "If your opponent has any Psychic Pokémon in play, this attack does 60 more damage.",
				fr: "Si votre adversaire a un Pokémon Psychic en jeu, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
