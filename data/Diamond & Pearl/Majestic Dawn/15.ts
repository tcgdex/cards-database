import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Aerodactyl",
		fr: "Ptera",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		142,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Old Amber",
		fr: "Vieil Ambre",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Primal Claw",
				fr: "Griffe primitive",
			},
			effect: {
				en: "After your opponent's Pokémon uses a Poké-Power, put 2 damage counters on that Pokémon.",
				fr: "Une fois que le Pokémon de votre adversaire a utilisé un Poké-Power, placez 2 marqueurs de dégât sur ce Pokémon.",
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
				en: "Supersonic",
				fr: "Ultrason",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
