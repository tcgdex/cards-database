import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Barraskewda",
		'fr-fr': "Hastacuda",
		'es-es': "Barraskewda",
		'it-it': "Barraskewda",
		'pt-br': "Barraskewda",
		'de-de': "Barrakiefa"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [847],
	set: Set,

	evolveFrom: {
		'en-us': "Arrokuda",
		'fr-fr': "Embrochet",
		'es-es': "Arrokuda",
		'it-it': "Arrokuda",
		'pt-br': "Arrokuda",
		'de-de': "Pikuda"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'es-es': "Picotazo",
				'it-it': "Beccata",
				'pt-br': "Bicada",
				'de-de': "Pikser"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Spiral Jet",
				'fr-fr': "Jet en Spirale",
				'es-es': "Chorro en Espiral",
				'it-it': "Spirale Jet",
				'pt-br': "Jato Espiral",
				'de-de': "Spiralstrahl"
			},
			effect: {
				'en-us': "Discard 2 Water Energy cards from your hand. If you don't, this attack does nothing.",
				'fr-fr': "Défaussez 2 cartes Énergie Water de votre main. Sinon, cette attaque ne fait rien.",
				'es-es': "Descarta 2 cartas de Energía Water de tu mano. Si no lo haces, este ataque no hace nada.",
				'it-it': "Scarta due carte Energia Water che hai in mano. Se non lo fai, questo attacco non ha effetto.",
				'pt-br': "Descarte 2 cartas de Energia Water da sua mão. Se não fizer isto, este ataque não fará nada.",
				'de-de': "Lege 2 Water-Energiekarten aus deiner Hand auf deinen Ablagestapel. Wenn du das nicht machst, hat diese Attacke keine Auswirkungen."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 120,
	types: ["Water"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "This Pokémon has a jaw that's as sharp as a spear and as strong as steel. Apparently Barraskewda's flesh is surprisingly tasty, too."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457703,
				tcgplayer: 213134
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457703,
				tcgplayer: 213134
			}
		},
	],
}

export default card
