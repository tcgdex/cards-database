import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Barraskewda",
		fr: "Hastacuda",
		es: "Barraskewda",
		it: "Barraskewda",
		pt: "Barraskewda",
		de: "Barrakiefa"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Arrokuda",
		fr: "Embrochet",
		es: "Arrokuda",
		it: "Arrokuda",
		pt: "Arrokuda",
		de: "Pikuda"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				es: "Picotazo",
				it: "Beccata",
				pt: "Bicada",
				de: "Pikser"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Spiral Jet",
				fr: "Jet en Spirale",
				es: "Chorro en Espiral",
				it: "Spirale Jet",
				pt: "Jato Espiral",
				de: "Spiralstrahl"
			},
			effect: {
				en: "Discard 2 Water Energy cards from your hand. If you don't, this attack does nothing.",
				fr: "Défaussez 2 cartes Énergie Water de votre main. Sinon, cette attaque ne fait rien.",
				es: "Descarta 2 cartas de Energía Water de tu mano. Si no lo haces, este ataque no hace nada.",
				it: "Scarta due carte Energia Water che hai in mano. Se non lo fai, questo attacco non ha effetto.",
				pt: "Descarte 2 cartas de Energia Water da sua mão. Se não fizer isto, este ataque não fará nada.",
				de: "Lege 2 Water-Energiekarten aus deiner Hand auf deinen Ablagestapel. Wenn du das nicht machst, hat diese Attacke keine Auswirkungen."
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "This Pokémon has a jaw that's as sharp as a spear and as strong as steel. Apparently Barraskewda's flesh is surprisingly tasty, too."
	},

	thirdParty: {
		cardmarket: 457703
	}
}

export default card
