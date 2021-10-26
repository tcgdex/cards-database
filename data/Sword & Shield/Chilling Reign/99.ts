import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Slowking V",
		fr: "Roigada de Galar V",
		es: "Slowking de Galar V",
		it: "Slowking di Galar V",
		pt: "Slowking de Galar V",
		de: "Galar-Laschoking V"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	attacks: [{
		name: {
			en: "Concoction",
			fr: "Concoction",
			es: "Brebaje",
			it: "Intruglio",
			pt: "Elixir Mágico",
			de: "Gebräu"
		},

		effect: {
			en: "Discard a card from your hand. If you do, draw 3 cards.",
			fr: "Défaussez une carte de votre main. Dans ce cas, piochez 3 cartes.",
			es: "Descarta 1 carta de tu mano. Si lo haces, roba 3 cartas.",
			it: "Scarta una delle carte che hai in mano. Se lo fai, pesca tre carte.",
			pt: "Descarte 1 carta da sua mão. Se fizer isto, compre 3 cartas.",
			de: "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 3 Karten."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Word of Ruin",
			fr: "Promesse de Déclin",
			es: "Palabra de Perdición",
			it: "Parola Nefasta",
			pt: "Maldizer",
			de: "Wort des Verderbens"
		},

		effect: {
			en: "At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out.",
			fr: "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera mis K.O.",
			es: "Al final del próximo turno de tu rival, el Pokémon Defensor quedará Fuera de Combate.",
			it: "Alla fine del prossimo turno del tuo avversario, il Pokémon difensore verrà messo KO.",
			pt: "O Pokémon Defensor será Nocauteado no final do próximo turno do seu oponente.",
			de: "Am Ende des nächsten Zuges deines Gegners wird das Verteidigende Pokémon kampfunfähig."
		},

		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
