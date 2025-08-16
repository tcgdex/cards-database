import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Hitmonlee",
		fr: "Kicklee",
		es: "Hitmonlee",
		it: "Hitmonlee",
		pt: "Hitmonlee",
		de: "Kicklee"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		106,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Special Combo",
				fr: "Combo Spéciale",
				es: "Combo Especial",
				it: "Combo Speciale",
				pt: "Combo Especial",
				de: "Spezialkombo"
			},
			effect: {
				en: "You can use this attack only if your Hitmonchan used Hit and Run during your last turn. This attack does 90 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous ne pouvez utiliser cette attaque que si votre Tygnon a utilisé Frappe et Fuite lors de votre dernier tour. Cette attaque inflige 90 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Puedes usar este ataque solo si tu Hitmonchan usó Atropello y Fuga durante tu último turno. Este ataque hace 90 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Puoi usare questo attacco solo se il tuo Hitmonchan ha usato Colpisci e Fuggi durante il tuo ultimo turno. Questo attacco infligge 90 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Você só pode usar este ataque se seu Hitmonchan usou Bater e Fugir durante a sua última vez de jogar. Este ataque causa 90 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Du kannst diese Attacke nur einsetzen, wenn dein Nockchan während deines letzten Zuges Fluchtschlag eingesetzt hat. Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 90 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Mega Kick",
				fr: "Ultimawashi",
				es: "Megapatada",
				it: "Megacalcio",
				pt: "Megachute",
				de: "Megakick"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 369003,
		tcgplayer: 183851
	}
}

export default card
