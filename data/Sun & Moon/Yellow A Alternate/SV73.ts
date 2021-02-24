import { Card } from '../../../interfaces'
import Set from '../Yellow A Alternate'

const card: Card = {
	name: {
		en: "Kartana-GX",
		fr: "Katagami-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		798,
	],
	hp: 170,
	types: [
		"Metal",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Slice Off",
				fr: "Trancher",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Special Energy from 1 of your opponent's Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser une Énergie spéciale attachée à l’un des Pokémon de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gale Blade",
				fr: "Lame Bourrasque",
			},
			effect: {
				en: "You may shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "Vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
			},
			damage: 70,

		},
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Blade-GX",
				fr: "Lame-GX",
			},
			effect: {
				en: "Take a Prize card. (You can't use more than 1 GX attack in a game.)",
				fr: "Récupérez une carte Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

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
	retreat: 1,



}

export default card
