import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Thundurus",
		fr: "Fulguris",
		es: "Thundurus",
		it: "Thundurus",
		pt: "Thundurus",
		de: "Voltolos"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		642,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunderous Gale",
				fr: "Bourrasque Fulgurante",
				es: "Vendaval Atronador",
				it: "Raffica Tonante",
				pt: "Tufão Trovejante",
				de: "Donnernder Wind"
			},
			effect: {
				en: "If Tornadus is on your Bench, this attack does 50 more damage.",
				fr: "Si Boréas est sur votre Banc, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si Tornadus está en tu Banca, este ataque hace 50 puntos de daño más.",
				it: "Se Tornadus è nella tua panchina, questo attacco infligge 50 danni in più.",
				pt: "Se Tornadus estiver no seu Banco, este ataque causará 50 pontos de dano a mais.",
				de: "Wenn sich Boreos auf deiner Bank befindet, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Raging Thunder",
				fr: "Tonnerre Déchaîné",
				es: "Trueno Rabioso",
				it: "Rombotuono",
				pt: "Trovão Devastador",
				de: "Tosender Donner"
			},
			effect: {
				en: "This attack does 40 damage to 1 of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 40 dégâts à l’un de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 40 puntos de daño a 1 de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 40 danni a uno dei tuoi Pokémon in panchina. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 40 pontos de dano a 1 dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon auf deiner Bank 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 388162
	}
}

export default card
