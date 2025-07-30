import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Hastacuda",
		en: "Barraskewda",
		es: "Barraskewda",
		it: "Barraskewda",
		pt: "Barraskewda",
		de: "Barrakiefa"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		fr: "Embrochet",
		en: "Arrokuda"
	},

	attacks: [{
		name: {
			fr: "Picpic",
			en: "Peck",
			es: "Picotazo",
			it: "Beccata",
			pt: "Bicada",
			de: "Pikser"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Jet en Spirale",
			en: "Spiral Jet",
			es: "Chorro en Espiral",
			it: "Spirale Jet",
			pt: "Jato Espiral",
			de: "Spiralstrahl"
		},

		effect: {
			fr: "Défaussez 2 cartes Énergie Water de votre main. Sinon, cette attaque ne fait rien.",
			en: "Discard 2 Water Energy cards from your hand. If you don't, this attack does nothing.",
			es: "Descarta 2 cartas de Energía Water de tu mano. Si no lo haces, este ataque no hace nada.",
			it: "Scarta due carte Energia Water che hai in mano. Se non lo fai, questo attacco non ha effetto.",
			pt: "Descarte 2 cartas de Energia Water da sua mão. Se não fizer isto, este ataque não fará nada.",
			de: "Lege 2 Water-Energiekarten aus deiner Hand auf deinen Ablagestapel. Wenn du das nicht machst, hat diese Attacke keine Auswirkungen."
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
		en: "This Pokémon has a jaw that's as sharp as a spear and as strong as steel. Apparently Barraskewda's flesh is surprisingly tasty, too."
	},

	thirdParty: {
		cardmarket: 539548
	}
}

export default card
