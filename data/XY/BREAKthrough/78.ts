import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Marowak",
		fr: "Ossatueur",
		es: "Marowak",
		it: "Marowak",
		pt: "Marowak",
		de: "Knogga"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		105,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
		es: "Cubone",
		it: "Cubone",
		pt: "Cubone",
		de: "Tragosso"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Sharpshooting",
				fr: "Tir de Précision",
				es: "Tirador Certero",
				it: "Tiratore Scelto",
				pt: "Tiro Preciso",
				de: "Scharfschuss"
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 de danos a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieser Angriff fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Bone Windmill",
				fr: "Moulin Osseux",
				es: "Molino Óseo",
				it: "Mulino Osseo",
				pt: "Moinho de Vento de Ossos",
				de: "Knochenmühle"
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon-EX, switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon-EX, cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon-EX, scambia questo Pokémon con uno della tua panchina.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon-EX, troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-EX ist, tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 286324
	}
}

export default card
