import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Tyranitar",
		fr: "Tyranocif"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 120,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pupitar",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Destructive Roar",
				fr: "Hurlement destructeur"
			},
			effect: {
				en: "Flip a coin. If heads, discard 1 Energy card attached to 1 of your opponent's Pokémon.",
				fr: "Lancez une pièce. Si c'est face, choisissez une carte Énergie attachée à l'un des Pokémon de votre adversaire."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Slap",
				fr: "Attaque caudale"
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gigacrush",
				fr: "Gigacrash"
			},
			effect: {
				en: "Each player discards the top 3 cards from his or her deck.",
				fr: "Chaque joueur se défausse des 3 premières cartes du dessus de son deck."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
