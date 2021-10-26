import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Crawdaunt",
		fr: "Colhomard",
		es: "Crawdaunt",
		it: "Crawdaunt",
		pt: "Crawdaunt",
		de: "Krebutack"
	},

	illustrator: "Hasegawa Saki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		en: "Corphish",
		fr: "Écrapince",
		es: "Corphish",
		it: "Corphish",
		pt: "Corphish",
		de: "Krebscorps"
	},

	attacks: [{
		name: {
			en: "Knock Off",
			fr: "Sabotage",
			es: "Desarme",
			it: "Privazione",
			pt: "Derrubar",
			de: "Abschlag"
		},

		effect: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival.",
			it: "Scarta una carta a caso dalla mano del tuo avversario.",
			pt: "Descarte 1 carta aleatória da mão do seu oponente.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Crabhammer",
			fr: "Pince-Masse",
			es: "Martillazo",
			it: "Martellata",
			pt: "Martelo Caranguejo",
			de: "Krabbhammer"
		},

		damage: 140,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "A brutish Pokémon that loves to battle. It will crash itself into any foe that approaches its nest."
	}
}

export default card
