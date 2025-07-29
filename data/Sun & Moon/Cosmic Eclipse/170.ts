import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Ambipom",
		fr: "Capidextre",
		es: "Ambipom",
		it: "Ambipom",
		pt: "Ambipom",
		de: "Ambidiffel"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		424,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Aipom",
		fr: "Capumain",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nice-Nice Catch",
				fr: "Jolie Jolie Prise",
				es: "Captura Guay-Guay",
				it: "Parapiglia",
				pt: "Pegada Boa-boa",
				de: "Gut-gut-Fang"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
				es: "Roba 2 cartas.",
				it: "Pesca due carte.",
				pt: "Compre 2 cartas.",
				de: "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bye-Bye Throw",
				fr: "Lancer Ciao Ciao",
				es: "Lanzamiento Chao-Chao",
				it: "Marameo",
				pt: "Arremesso Tchau-tchau",
				de: "Bye-bye-Wurf"
			},
			effect: {
				en: "Discard up to 2 cards from your hand. This attack does 60 damage for each card you discarded in this way.",
				fr: "Défaussez jusqu’à 2 cartes de votre main. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
				es: "Descarta hasta 2 cartas de tu mano. Este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
				it: "Scarta fino a due carte che hai in mano. Questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
				pt: "Descarte até 2 cartas da sua mão. Este ataque causa 60 pontos de dano para cada carta descartada desta forma.",
				de: "Lege bis zu 2 Karten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt 60 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 408474
	}
}

export default card
