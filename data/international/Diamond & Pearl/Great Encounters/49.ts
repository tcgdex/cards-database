import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
		'de-de': "Porygon2"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		233,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Download",
				'fr-fr': "Télécharge",
				'de-de': "Download"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard a Supporter card from your hand and use the effect of that card as the effect of this power. This power can't be used if Porygon2 is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser une carte Supporter de votre main et utiliser l'effet de cette carte comme l'effet de ce pouvoir. Ce pouvoir ne peut pas être utilisé si Porygon2 est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Unterstützerkarte von deiner Hand auf deinen Ablagestapel legen und ihren Effekt als Effekt dieser Poké-Power nutzen. Diese Poké-Power kann nicht benutzt werden, wenn Porygon2 von einem Speziellen Zustand betroffen ist."
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
				'en-us': "Speed Attack",
				'fr-fr': "Attaque vitesse",
				'de-de': "Tempoangriff"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "With planetary development software installed, it became capable of working in space.",
	},

	thirdParty: {
		cardmarket: 277951,
		tcgplayer: 88326
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["pre-release"]
		},
		{
			type: "normal",
			stamp: ["pre-release","staff"]
		}
	]
}

export default card
