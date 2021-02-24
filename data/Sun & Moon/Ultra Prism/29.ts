import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Alolan Sandslash",
		fr: "Sablaireau d’Alola",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		28,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Alolan Sandshrew",
		fr: "Sabelette d’Alola",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Spike Armor",
				fr: "Armure Piquante",
			},
			effect: {
				en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put 6 damage counters on the Attacking Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d’une attaque (même si ce Pokémon est mis K.O.), placez 6 marqueurs de dégâts sur le Pokémon Attaquant.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frost Breath",
				fr: "Souffle Glacé",
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
