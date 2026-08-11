import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Light Venomoth",
		'fr-fr': "Aéromite lumineux",
		'de-de': "Helles Omot"
	},

	illustrator: "Masako Yamashita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		49,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Venonat",
		'fr-fr': "Mimitoss"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Mysterious Wing",
				'fr-fr': "Aile mystérieuse",
				'de-de': "Mysterious Wing"
			},
			effect: {
				'en-us': "Your opponent may choose a Baby Pokémon, Basic Pokémon, or Evolution card from his or her discard pile and put it into his or her hand. Either way, you may do the same.",
				'fr-fr': "Votre adversaire peut choisir une carte Bébé Pokémon, Pokémon de base ou Évolution de sa pile de défausse et l'ajouter à sa main. Quelle que soit sa décision, vous pouvez faire de même.",
				'de-de': "Your opponent may choose a Baby Pokémon, Basic Pokémon, or Evolution card from his or her discard pile and put it into his or her hand. Either way, you may do the same."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Synchronize",
				'fr-fr': "Synchronisation",
				'de-de': "Synchronize"
			},
			effect: {
				'en-us': "If Light Venomoth and the Defending Pokémon have a different number of Energy cards attached to them, this attack does nothing.",
				'fr-fr': "Si Aéromite lumineux et le Pokémon Défenseur ont un nombre différent de cartes Énergie attachées à eux, cette attaque ne fait rien.",
				'de-de': "If Light Venomoth and the Defending Pokémon have a differenz number of Energy cards attached to them, this attack does nothing."
			},
			damage: 40,

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
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "It defends itself by flapping its wings at high speed, spreading poisonous powder throughout the air.",
		'fr-fr': "Il se défend en battant des ailes à toute vitesse, libérant une poudre empoisonnée dans les airs."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274705,
				tcgplayer: 86752
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274705,
				tcgplayer: 86752
			}
		}
	]
}

export default card
