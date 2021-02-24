import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Phione",
		fr: "Phione",
	},
	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		489,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Whirlpool Suction",
				fr: "Tourbillon Aspirant",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon. If you do, discard all cards attached to this Pokémon and put it on the bottom of your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc. Dans ce cas, défaussez toutes les cartes attachées à ce Pokémon et placez-le en dessous de votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Rain Splash",
				fr: "Pluie Éclaboussante",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
