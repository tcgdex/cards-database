import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Porygon-Z",
		'fr-fr': "Porygon-Z",
		'de-de': "Porygon-Z"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		474,
	],

	hp: 110,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Conversion",
				'fr-fr': "Adaptation",
				'de-de': "Umwandlung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard a basic Energy card from your hand. Porygon-Z is the same type as that Energy card until the end of your turn. This power can't be used if Porygon-Z is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser une carte Énergie de base de votre main. Porygon-Z est du même type que cette carte Énergie jusqu'à la fin de votre tour. Ce pouvoir ne peut pas être utilisé si Porygon-Z est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Basis-Energiekarte aus deiner Hand auf deinen Ablagestapel legen. Porygon-Z ist bis zum Ende deines Zuges ein Pokémon desselben Typs wie die abgelegte Basis-Energiekarte. Diese Poké-Power kann nicht benutzt werden, wenn Porygon-Z von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tri Attack",
				'fr-fr': "Triplattaque",
				'de-de': "Triplette"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Additional software was installed to make it a better Pokémon. It began acting oddly, however.",
	},

	thirdParty: {
		cardmarket: 277908,
		tcgplayer: 88315
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
		}
	]
}

export default card
