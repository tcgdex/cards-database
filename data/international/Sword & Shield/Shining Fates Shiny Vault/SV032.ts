import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [847],
	set: Set,

	name: {
		'fr-fr': "Hastacuda",
		'en-us': "Barraskewda",
		'es-es': "Barraskewda",
		'it-it': "Barraskewda",
		'pt-br': "Barraskewda",
		'de-de': "Barrakiefa"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		'fr-fr': "Embrochet",
		'en-us': "Arrokuda"
	},

	attacks: [{
		name: {
			'fr-fr': "Picpic",
			'en-us': "Peck",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'pt-br': "Bicada",
			'de-de': "Pikser"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Jet en Spirale",
			'en-us': "Spiral Jet",
			'es-es': "Chorro en Espiral",
			'it-it': "Spirale Jet",
			'pt-br': "Jato Espiral",
			'de-de': "Spiralstrahl"
		},

		effect: {
			'fr-fr': "Défaussez 2 cartes Énergie Water de votre main. Sinon, cette attaque ne fait rien.",
			'en-us': "Discard 2 Water Energy cards from your hand. If you don't, this attack does nothing.",
			'es-es': "Descarta 2 cartas de Energía Water de tu mano. Si no lo haces, este ataque no hace nada.",
			'it-it': "Scarta due carte Energia Water che hai in mano. Se non lo fai, questo attacco non ha effetto.",
			'pt-br': "Descarte 2 cartas de Energia Water da sua mão. Se não fizer isto, este ataque não fará nada.",
			'de-de': "Lege 2 Water-Energiekarten aus deiner Hand auf deinen Ablagestapel. Wenn du das nicht machst, hat diese Attacke keine Auswirkungen."
		},

		damage: 130,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "This Pokémon has a jaw that's as sharp as a spear and as strong as steel. Apparently Barraskewda's flesh is surprisingly tasty, too."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539548,
				tcgplayer: 232385
			}
		},
	],
}

export default card
