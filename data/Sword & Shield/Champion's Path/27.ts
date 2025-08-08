import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Lucario V",
		fr: "Lucario V",
		es: "Lucario V",
		it: "Lucario V",
		pt: "Lucario V",
		de: "Lucario V"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [448],
	set: Set,
	hp: 210,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Aura Sphere",
				fr: "Aurasphère",
				es: "Esfera Aural",
				it: "Forzasfera",
				pt: "Aura Esférica",
				de: "Aurasphäre"
			},
			effect: {
				en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Beatdown Smash",
				fr: "Dérouillée Fracassante",
				es: "Golpe Aplastante",
				it: "Batosta Devastante",
				pt: "Surra Esmagadora",
				de: "Niederprügelnder Schlag"
			},
			effect: {
				en: "During your next turn, this Pokémon can't use Beatdown Smash.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Dérouillée Fracassante.",
				es: "Durante tu próximo turno, este Pokémon no puede usar Golpe Aplastante.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Batosta Devastante.",
				pt: "Durante o seu próximo turno, este Pokémon não poderá usar Surra Esmagadora.",
				de: "Während deines nächsten Zuges kann dieses Pokémon Niederprügelnder Schlag nicht einsetzen."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
