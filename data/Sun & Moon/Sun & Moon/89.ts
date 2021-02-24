import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Solgaleo-GX",
		fr: "Solgaleo-GX",
	},
	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		791,
	],
	hp: 250,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ultra Road",
				fr: "Ultra-Route",
			},
			effect: {
				en: "Once during your turn (before your attack), you may switch your Active Pokémon with 1 of your Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger votre Pokémon Actif avec l’un de vos Pokémon de Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Sunsteel Strike",
				fr: "Choc Météore",
			},
			effect: {
				en: "Discard all Energy from this Pokémon.",
				fr: "Défaussez toute l’Énergie de ce Pokémon.",
			},
			damage: 230,

		},
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Sol Burst-GX",
				fr: "Éclat Solaire-GX",
			},
			effect: {
				en: "Search your deck for up to 5 Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Cherchez jusqu’à 5 cartes Énergie dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
	retreat: 3,



}

export default card
