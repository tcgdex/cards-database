import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Dragonite EX",
		fr: "Dracolosse-EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		149,
	],
	hp: 180,
	types: [
		"Dragon",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bust In",
				fr: "Entrée en Force",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench, you may move any number of basic Energy attached to your Pokémon to this Pokémon. If you do, switch this Pokémon with your Active Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez déplacer des Énergies de base attachées à vos Pokémon vers ce Pokémon. Dans ce cas, échangez ce Pokémon avec votre Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Lightning",
			],
			name: {
				en: "Jet Sonic",
				fr: "Rafale Supersonique",
			},
			effect: {
				en: "You may discard an Energy attached to this Pokémon. If you do, this attack does 40 more damage.",
				fr: "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
