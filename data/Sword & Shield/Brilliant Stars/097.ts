import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Aggron VMAX",
		fr: "Galeking VMAX",
		es: "Aggron VMAX",
		it: "Aggron VMAX",
		pt: "Aggron VMAX",
		de: "Stolloss VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Metal"],

	evolveFrom: {
		en: "Aggron V",
		fr: "Galeking-V",
		es: "Aggron V",
		it: "Aggron-V",
		pt: "Aggron V",
		de: "Stolloss-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Cracking Stomp",
			fr: "Piétinement Écrasant",
			es: "Pisotón Quebrantador",
			it: "Spaccapestone",
			pt: "Pisoteada Demolidora",
			de: "Demolierender Stampfer"
		},

		effect: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			es: "Descarta la primera carta de la baraja de tu rival.",
			it: "Scarta la prima carta del mazzo del tuo avversario.",
			pt: "Descarte a carta de cima do baralho do seu oponente.",
			de: "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
		},

		damage: 150
	}, {
		cost: ["Metal", "Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Max Take Down",
			fr: "Bélieromax",
			es: "Maxiderribo",
			it: "Dynariduttore",
			pt: "Desmantelar Max",
			de: "Dyna-Bodycheck"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 270
	}],

	retreat: 4,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608643,
		tcgplayer: 263815
	}
}

export default card
