import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Thundurus-GX",
		fr: "Fulguris-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		642,
	],
	hp: 180,
	types: [
		"Lightning",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Charge",
				fr: "Chargeur",
			},
			effect: {
				en: "Search your deck for a Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck.",
				fr: "Cherchez une carte Énergie Lightning dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Electric Ball",
				fr: "Boule de Foudre",
			},

			damage: 140,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thundering Hurricane-GX",
				fr: "Rafale d’Éclairs-GX",
			},
			effect: {
				en: "Flip 4 coins. This attack does 100 damage for each heads. (You can't use more than 1 GX attack in a game.)",
				fr: "Lancez 4 pièces. Cette attaque inflige 100 dégâts multipliés par le nombre de côtés face. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
