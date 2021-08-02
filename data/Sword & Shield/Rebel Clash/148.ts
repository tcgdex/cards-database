import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Hawlucha",
		fr: "Brutalibré",
		es: "Hawlucha",
		it: "Hawlucha",
		pt: "Hawlucha",
		de: "Resladero"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Windfall",
				fr: "Rafale de Vent",
				es: "Maná",
				it: "Manna",
				pt: "Maná",
				de: "Warmer Regen"
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 5 cards.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.",
				es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 5 cartas.",
				it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca cinque carte.",
				pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 5 cartas.",
				de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 5 Karten."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Speed Attack",
				fr: "Attaque Rapide",
				es: "Ataque Fugaz",
				it: "Attacco Veloce",
				pt: "Ataque em Velocidade",
				de: "Tempoangriff"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 90,
	types: ["Colorless"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
