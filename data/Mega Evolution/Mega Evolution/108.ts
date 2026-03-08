import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Lopunny",
		fr: "Lockpin",
		de: "Schlapor",
		it: "Lopunny",
		es: "Lopunny",
		pt: "Lopunny",
		'es-mx': "Lopunny"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	evolveFrom: {
		en: "Buneary",
		fr: "Laporeille",
		de: "Haspiror",
		it: "Buneary",
		es: "Buneary",
		pt: "Buneary",
		'es-mx': "Buneary"
	},
	stage: "Stage1",
	dexId: [428],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Dashing Kick",
			fr: "Coup de Pied Fulgurant",
			de: "Rasender Tritt",
			it: "Calciolesto",
			es: "Patada Veloz",
			pt: "Chute Veloz",
			'es-mx': "Patada de Arranque"
		},

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 50 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			es: "Este ataque hace 50 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Spiral Kick",
			fr: "Coup'd Pied en Spirale",
			de: "Drehtritt",
			it: "Spiralcalcio",
			es: "Patada Espiral",
			pt: "Chute Espiral",
			'es-mx': "Patada Espiral"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 654447,
		cardmarket: 851179
	}
}

export default card