import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [823],
	set: Set,

	name: {
		'en-us': "Corviknight",
		'fr-fr': "Corvaillus",
		'es-es': "Corviknight",
		'it-it': "Corviknight",
		'pt-br': "Corviknight",
		'de-de': "Krarmor"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Corvisquire",
		'fr-fr': "Bleuseille",
		'es-es': "Corvisquire",
		'it-it': "Corvisquire",
		'pt-br': "Corvisquire",
		'de-de': "Kranoviz"
	},

	stage: "Stage2",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Ryuta Fuse",

	description: {
		'en-us': "With their great intellect and flying skills, these Pokémon very successfully act as the Galar region's airborne taxi service."
	},

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Steel Wing",
			'fr-fr': "Aile d'Acier",
			'de-de': "Stahlflügel",
			'es-es': "Ala de Acero",
			'pt-br': "Asa de Aço",
			'it-it': "Alacciaio"
		},

		damage: 50,

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Power Cyclone",
			'fr-fr': "Cyclone d'Énergie",
			'de-de': "Kraftwirbel",
			'es-es': "Ciclón Poderoso",
			'pt-br': "Ciclone Poderoso",
			'it-it': "Ciclone Potente"
		},

		damage: 160,

		effect: {
			'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			'es-es': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			'pt-br': "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			'it-it': "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582864,
				tcgplayer: 253344
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582864,
				tcgplayer: 253344
			}
		},
	],
}

export default card
