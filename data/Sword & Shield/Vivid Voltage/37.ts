import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Galarian Darmanitan VMAX",
		fr: "Darumacho de Galar VMAX",
		es: "Darmanitan de Galar VMAX",
		it: "Darmanitan di Galar VMAX",
		pt: "Darmanitan de Galar VMAX",
		de: "Galar-Flampivian VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	dexId: [555],
	set: Set,
	hp: 320,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Galarian Darmanitan V",
		fr: "Darumacho de Galar-V",
		es: "Darmanitan de Galar V",
		it: "Darmanitan di Galar-V",
		pt: "Darmanitan de Galar V",
		de: "Galar-Flampivian-V"
	},

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Max Whiteout",
				fr: "Neigeomax",
				es: "Maxinevada",
				it: "Dynanevicata",
				pt: "Temporal de Neve Max",
				de: "Dyna-Polarsturm"
			},
			effect: {
				en: "This attack also does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 30 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque también hace 30 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge anche 30 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque também causa 30 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",

	thirdParty: {
		cardmarket: 511605,
		tcgplayer: 226419
	}
}

export default card
