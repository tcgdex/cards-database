import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Raticate",
		'fr-fr': "Rattatac",
		'de-de': "Rattikarl"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Rattata",
		'fr-fr': "Rattata"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Thick Skin",
				'fr-fr': "Dur à cuire",
				'de-de': "Dicke Haut"
			},
			effect: {
				'en-us': "Raticate can't be affected by any Special Conditions.",
				'fr-fr': "Rattatac ne peut pas être affecté par des États Spéciaux.",
				'de-de': "Rattikarl kann nicht von Speziellen Zuständen betroffen werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pickup",
				'fr-fr': "Ramassage",
				'de-de': "Aufsammeln"
			},
			effect: {
				'en-us': "Search your discard pile for a Basic Pokémon (or Evolution card), a Trainer card, and an Energy card. Show them to your opponent and put them into your hand.",
				'fr-fr': "Cherchez dans votre pile de défausse un Pokémon de base (ou une carte Évolution), une carte Dresseur et une carte Énergie. Montrez-les à votre adversaire et placez-les dans votre main.",
				'de-de': "Durchsuche deinen Ablagestapel nach einem Basis-Pokémon (oder einer Evolutionskarte), einer Trainerkarte und einer Energiekarte. Zeige sie deinem Gegner und nimm sie auf die Hand."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque",
				'de-de': "Ruckzuckhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 40 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 40 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276224,
				tcgplayer: 88603
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276224,
				tcgplayer: 88603
			},
		},
	],
}

export default card
