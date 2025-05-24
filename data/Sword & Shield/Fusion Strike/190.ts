import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [823],
	set: Set,

	name: {
		en: "Corviknight",
		fr: "Corvaillus",
		es: "Corviknight",
		it: "Corviknight",
		pt: "Corviknight",
		de: "Krarmor"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	evolveFrom: {
		en: "Corvisquire",
		fr: "Bleuseille",
		es: "Corvisquire",
		it: "Corvisquire",
		pt: "Corvisquire",
		de: "Kranoviz"
	},

	stage: "Stage2",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Ryuta Fuse",

	description: {
		en: "With their great intellect and flying skills, these Pokémon very successfully act as the Galar region's airborne taxi service."
	},

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Steel Wing",
			fr: "Aile d'Acier",
			de: "Stahlflügel",
			es: "Ala de Acero",
			pt: "Asa de Aço",
			it: "Alacciaio"
		},

		damage: 50,

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Power Cyclone",
			fr: "Cyclone d'Énergie",
			de: "Kraftwirbel",
			es: "Ciclón Poderoso",
			pt: "Ciclone Poderoso",
			it: "Ciclone Potente"
		},

		damage: 160,

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			de: "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			es: "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			pt: "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			it: "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card