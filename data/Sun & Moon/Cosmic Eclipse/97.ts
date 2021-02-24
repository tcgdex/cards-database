import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Mimikyu",
		fr: "Mimiqui",
	},
	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		778,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shadow Box",
				fr: "Boîte Obscure",
			},
			effect: {
				en: "Pokémon-GX that have any damage counters on them (both yours and your opponent's) have no Abilities.",
				fr: "Les Pokémon-GX qui ont des marqueurs de dégâts (les vôtres et ceux de votre adversaire) n’ont pas de talent.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Trickery",
				fr: "Queue Étourdissante",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 20,

		},
	],


	retreat: 1,



}

export default card
