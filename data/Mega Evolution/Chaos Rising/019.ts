import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "Keldeo has strengthened its resolve for battle filling its body with power and changing its form.",
	},


	name: {
		en: "Keldeo",
		fr: "Keldeo",
		es: "Keldeo",
		'es-mx': "Keldeo",
		de: "Keldeo",
		it: "Keldeo",
		pt: "Keldeo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [647],
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Shoot Through",
			fr: "Passer à Travers",
			es: "Cruzar Rápido",
			'es-mx': "Atravesar",
			de: "Durchschießen",
			it: "Sparainmezzo",
			pt: "Tiro Vazante"
		},

		cost: ["Water"],
		damage: 20,

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 20 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}, {
		name: {
			en: "Reflect Energy",
			fr: "Renvoi d'Énergie",
			es: "Reflejar Energía",
			'es-mx': "Reflejar Energía",
			de: "Energiereflexion",
			it: "Rifletti Energia",
			pt: "Refletir Energia"
		},

		cost: ["Water", "Water"],
		damage: 70,

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			es: "Mueve 1 Energía de este Pokémon a uno de tus Pokémon en Banca.",
			'es-mx': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			de: "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			it: "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			pt: "Mova uma Energia deste Pokémon para 1 dos seus Pokémon no Banco."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886411,
				tcgplayer: 693503
			}
		},
		{
			type: 'holo',
			stamp: ['set-logo'],
			thirdParty: {
				cardmarket: 886626
			}
		},
	],
}

export default card
