import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Morpeko VMAX",
		fr: "Morpeko VMAX",
		es: "Morpeko VMAX",
		it: "Morpeko VMAX",
		pt: "Morpeko VMAX",
		de: "Morpeko VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	set: Set,
	hp: 300,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Morpeko V",
		fr: "Morpeko-V",
		es: "Morpeko V",
		it: "Morpeko-V",
		pt: "Morpeko V",
		de: "Morpeko-V"
	},

	stage: "VMAX",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Max Discharge",
				fr: "Déchargeomax",
				es: "Maxichispazo",
				it: "Dynascarica",
				pt: "Descarga Max",
				de: "Dyna-Ladungsstoß"
			},
			effect: {
				en: "This attack also does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque también hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque também causa 20 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	dexId: [877],

	thirdParty: {
		cardmarket: 436529
	}
}

export default card
