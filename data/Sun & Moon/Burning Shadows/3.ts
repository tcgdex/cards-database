import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Butterfree",
		fr: "Papilusion",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		12,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bye-Bye Heal",
				fr: "Soins et Adieux",
			},
			effect: {
				en: "Heal all damage from all of your Pokémon. Shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "Soignez tous les dégâts de vos Pokémon. Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stun Spore",
				fr: "Para-Spore",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
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

	retreat: 1,



}

export default card
