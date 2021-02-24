import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Lucario & Melmetal-GX",
		fr: "Lucario et Melmetal-GX",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 260,
	types: [
		"Metal",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steel Fist",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "Search your deck for a Metal Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			},
			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Impact",
				fr: "Poing d’Acier",
			},
			effect: {
				fr: "Cherchez une carte Énergie Metal dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			},
			damage: 150,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Full Metal Wall-GX",
				fr: "Gros Impact",
			},
			effect: {
				en: "For the rest of this game, your Metal Pokémon take 30 less damage from your opponent's attacks (after applying Weakness and Resistance). If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), discard all Energy from your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 150,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Mur Métal Plein-GX",
			},
			effect: {
				fr: "Pour le reste de cette partie, vos Pokémon Metal subissent 30 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance). Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), défaussez toute l’Énergie du Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
