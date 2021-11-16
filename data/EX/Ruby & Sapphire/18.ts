import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Nosepass",
		fr: "Tarinor"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		299,
	],
	hp: 60,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Invisible Hand",
				fr: "Main invisible"
			},
			effect: {
				en: "If any of your opponent's Active Pokémon are Evolved Pokémon, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
				fr: "Si un des Pokémon Actifs de votre adversaire est un Pokémon Évolué, choisissez une carte dans votre deck et placez-la dans votre main. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Repulsion",
				fr: "Répulsion"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent returns the Defending Pokémon and all cards attached to it to his or her hand. (If your opponent doesn't have any Benched Pokémon or other Active Pokémon, this attack does nothing.)",
				fr: "Lancez une pièce. Si c'est face, votre adversaire doit reprendre dans sa main le Pokémon Défenseur et toutes les cartes qui lui sont attachées (il ne se passe rien si votre adversaire n'a pas d'autres Pokémon Actifs ou d'autres Pokémon sur son Banc)."
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
