import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Hitmontop",
		fr: "Kapoera",
		es: "Hitmontop",
		it: "Hitmontop",
		pt: "Hitmontop",
		de: "Kapoera"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cycle Draw",
				fr: "Pioche Cyclique",
				es: "Ciclorrobo",
				it: "Pesca Ciclica",
				pt: "Compra Cíclica",
				de: "Kreiszug"
			},
			effect: {
				en: "Discard a card from your hand. If you do, draw 3 cards.",
				fr: "Défaussez une carte de votre main. Dans ce cas, piochez 3 cartes.",
				es: "Descarta 1 carta de tu mano. Si lo haces, roba 3 cartas.",
				it: "Scarta una delle carte che hai in mano. Se lo fai, pesca tre carte.",
				pt: "Descarte 1 carta da sua mão. Se fizer isto, compre 3 cartas.",
				de: "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tornado Kick",
				fr: "Coup de Pied Tornade",
				es: "Patada Tornado",
				it: "Calciotornado",
				pt: "Chute Tornado",
				de: "Tornadokick"
			},
			effect: {
				en: "If you played Bea from your hand during this turn, this attack does 80 more damage.",
				fr: "Si vous avez joué Faïza de votre main pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si has jugado 1 carta de Judith de tu mano durante este turno, este ataque hace 80 puntos de daño más.",
				it: "Se hai giocato Fabia dalla tua mano durante questo turno, questo attacco infligge 80 danni in più.",
				pt: "Se você jogou Bia da sua mão durante este turno, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn du Saida während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It launches kicks while spinning. If it spins at high speed, it may bore its way into the ground."
	}
}

export default card
