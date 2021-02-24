import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Dedenne-GX",
		fr: "Dedenne-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		702,
	],
	hp: 160,
	types: [
		"Lightning",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dedechange",
				fr: "Dedechange",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard your hand and draw 6 cards. You can't use more than 1 Dedechange Ability each turn.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser votre main et piocher 6 cartes. Vous ne pouvez pas utiliser plus d’un talent Dedechange par tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Static Shock",
				fr: "Choc Statique",
			},

			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Tingly Return-GX",
				fr: "Retour Picotant-GX",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Paralyzed. Put this Pokémon and all cards attached to it into your hand. (You can't use more than 1 GX attack in a game.)",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé. Placez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
