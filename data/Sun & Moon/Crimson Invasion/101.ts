import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Gyarados-GX",
		fr: "Léviator-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		130,
	],
	hp: 240,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade",
			},

			damage: 70,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Draconic Disaster",
				fr: "Désastre Draconien",
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 100 more damage. Then, discard that Stadium card.",
				fr: "S’il y a une carte Stade en jeu, cette attaque inflige 100 dégâts supplémentaires. Ensuite, défaussez la carte Stade.",
			},
			damage: 100,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Dread Storm-GX",
				fr: "Tempête d’Effroi-GX",
			},
			effect: {
				en: "Discard an Energy from each of your opponent's Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Défaussez une Énergie de chacun des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
