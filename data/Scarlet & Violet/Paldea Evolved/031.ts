import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [667],
	set: Set,

	name: {
		fr: "Hélionceau",
		en: "Litleo",
		es: "Litleo",
		it: "Litleo",
		pt: "Litleo",
		de: "Leufeo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Destruction Ardente",
			en: "Blazing Destruction",
			es: "Destrucción Abrasadora",
			it: "Raso al Fuoco",
			pt: "Destruição Flamejante",
			de: "Feurige Verwüstung"
		},

		effect: {
			fr: "Défaussez un Stade en jeu.",
			en: "Discard a Stadium in play.",
			es: "Descarta 1 Estadio en juego.",
			it: "Scarta una carta Stadio in gioco.",
			pt: "Descarte um Estádio em jogo.",
			de: "Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
		}
	}, {
		cost: ["Fire"],

		name: {
			fr: "Charbon Mutant",
			en: "Live Coal",
			es: "Carbón Activado",
			it: "Carboni Ardenti",
			pt: "Carvão Vivo",
			de: "Glühende Kohlen"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "Yuu Nishida",

	description: {
		en: "When Litleo are young, female Pyroar will teach them how to hunt. Once the Litleo mature, they will leave the pride and set out on their own.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715504,
				tcgplayer: 498857,
				cardtrader: 248612
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715504,
				tcgplayer: 498857,
				cardtrader: 248612
			}
		},
	],

}

export default card