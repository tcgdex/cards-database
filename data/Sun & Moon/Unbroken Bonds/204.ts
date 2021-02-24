import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Gardevoir & Sylveon-GX",
		fr: "Gardevoir et Nymphali-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 260,
	types: [
		"Fairy",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fairy Song",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "Search your deck for up to 2 Fairy Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Kaleidostorm",
				fr: "Chant Féérique",
			},
			effect: {
				en: "Move any number of Energy from your Pokémon to your other Pokémon in any way you like.",
				fr: "Cherchez jusqu’à 2 cartes Énergie Fairy dans votre deck et attachez-les à vos Pokémon de Banc, de la manière que vous voulez. Mélangez ensuite votre deck.",
			},
			damage: 150,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				en: "Magical Miracle-GX",
				fr: "Kaléidouragan",
			},
			effect: {
				en: "If this Pokémon has at least 3 extra Fairy Energy attached to it (in addition to this attack's cost), your opponent shuffles their hand into their deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Déplacez autant de cartes Énergie attachées à vos Pokémon que vous le voulez vers vos autres Pokémon, de la manière que vous voulez.",
			},
			damage: 200,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				fr: "Miracle Magique-GX",
			},
			effect: {
				fr: "Si au moins 3 Énergies Fairy supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), votre adversaire mélange sa main avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
