import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Barbaracle",
		fr: "Golgopathe",
		es: "Barbaracle",
		it: "Barbaracle",
		pt: "Barbaracle",
		de: "Thanathora"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		689,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Binacle",
		fr: "Opermine",
		es: "Binacle",
		it: "Binacle",
		pt: "Binacle",
		de: "Bithora"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Rock Rush",
				fr: "Déferlante Rocheuse",
				es: "Embestida de Rocas",
				it: "Rocciafuria",
				pt: "Arremetida de Pedras",
				de: "Steinrutsche"
			},
			effect: {
				en: "Discard as many Fighting Energy cards as you like from your hand. This attack does 30 damage times the number of Energy cards you discarded.",
				fr: "Défaussez autant de cartes Énergie Fighting que vous voulez de votre main. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
				es: "Descarta tantas cartas de Energía Fighting como quieras de tu mano. Este ataque hace 30 puntos de daño por cada carta de Energía que hayas descartado.",
				it: "Scarta tutte le carte Energia Fighting che vuoi dalla tua mano. Questo attacco infligge 30 danni per ogni carta Energia che hai scartato.",
				pt: "Descarte tantos cards de Energia Fighting quanto desejar da sua mão. Esse ataque causa 30 de danos vezes o número de cards de Energia descartados.",
				de: "Lege beliebig viele Fighting-Energiekarten von deiner Hand auf deinen Ablagestapel. Dieser Angriff fügt 30 Schadenspunkte für jede der von dir abgelegten Energiekarten zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Boulder Crush",
				fr: "Rocher Écrasant",
				es: "Alud de Rocas",
				it: "Macignata",
				pt: "Rocha Esmagadora",
				de: "Felsenquetscher"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281532,
		tcgplayer: 91182
	}
}

export default card
