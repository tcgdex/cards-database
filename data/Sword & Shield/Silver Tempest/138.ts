import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Lugia V",
		fr: "Lugia V",
		es: "Lugia V",
		it: "Lugia V",
		pt: "Lugia V",
		de: "Lugia V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Read the Wind",
			fr: "Lecture des Vents",
			es: "Leer el Viento",
			it: "Leggivento",
			pt: "Leitura dos Ventos",
			de: "Winddeutung"
		},

		effect: {
			en: "Discard a card from your hand. If you do, draw 3 cards.",
			fr: "Défaussez une carte de votre main. Dans ce cas, piochez 3 cartes.",
			es: "Descarta 1 carta de tu mano. Si lo haces, roba 3 cartas.",
			it: "Scarta una delle carte che hai in mano. Se lo fai, pesca tre carte.",
			pt: "Descarte 1 carta da sua mão. Se fizer isto, compre 3 cartas.",
			de: "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 3 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Aero Dive",
			fr: "Plongée Aérienne",
			es: "Aerozambullida",
			it: "Aerotuffo",
			pt: "Mergulho Aéreo",
			de: "Aero-Sturzflug"
		},

		effect: {
			en: "You may discard a Stadium in play.",
			fr: "Vous pouvez défausser un Stade en jeu.",
			es: "Puedes descartar un Estadio en juego.",
			it: "Puoi scartare una carta Stadio in gioco.",
			pt: "Você pode descartar 1 Estádio em jogo.",
			de: "Du kannst 1 Stadionkarte im Spiel auf den Ablagestapel legen."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682185
	}
}

export default card
