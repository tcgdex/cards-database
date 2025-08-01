import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Hitmontop",
		fr: "Kapoera",
		es: "Hitmontop",
		it: "Hitmontop",
		pt: "Hitmontop",
		de: "Kapoera"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		237,
	],

	hp: 90,

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
				en: "Finishing Combo",
				fr: "Combo Finale",
				es: "Combo Definitivo",
				it: "Combo di Grazia",
				pt: "Combo Arrematador",
				de: "Finalkombo"
			},
			effect: {
				en: "You can use this attack only if your Hitmonlee used Special Combo during your last turn. This attack does 60 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous ne pouvez utiliser cette attaque que si votre Kicklee a utilisé Combo Spéciale lors de votre dernier tour. Cette attaque inflige 60 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Puedes usar este ataque solo si tu Hitmonlee usó Combo Especial durante tu último turno. Este ataque hace 60 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Puoi usare questo attacco solo se il tuo Hitmonlee ha usato Combo Speciale durante il tuo ultimo turno. Questo attacco infligge 60 danni a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Você só pode usar este ataque se seu Hitmonlee usou Combo Especial durante a sua última vez de jogar. Este ataque causa 60 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Du kannst diese Attacke nur einsetzen, wenn dein Kicklee während deines letzten Zuges Spezialkombo eingesetzt hat. Diese Attacke fügt jedem Pokémon deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spinning Attack",
				fr: "Attaque Tournante",
				es: "Ataque Giratorio",
				it: "Attacco Rotante",
				pt: "Ataque Giratório",
				de: "Rundumangriff"
			},

			damage: 50,

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
		cardmarket: 372392
	}
}

export default card
