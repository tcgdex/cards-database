import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Articuno-GX",
		fr: "Artikodin-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		144,
	],
	hp: 170,
	types: [
		"Water",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Legendary Ascent",
				fr: "Ascension Légendaire",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may switch it with your Active Pokémon. If you do, move any number of Water Energy from your other Pokémon to this Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez l’échanger avec votre Pokémon Actif. Dans ce cas, déplacez autant d’Énergies Water que vous voulez de vos autres Pokémon vers ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Wing",
				fr: "Aile Glace",
			},

			damage: 130,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Cold Crush-GX",
				fr: "Écraser Net-GX",
			},
			effect: {
				en: "Discard all Energy from both Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Défaussez toute l’Énergie des deux Pokémon Actifs. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
