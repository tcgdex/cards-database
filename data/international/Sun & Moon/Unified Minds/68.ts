import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Thundurus",
		'fr-fr': "Fulguris",
		'es-es': "Thundurus",
		'it-it': "Thundurus",
		'pt-br': "Thundurus",
		'de-de': "Voltolos"
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
				'en-us': "Thunderous Gale",
				'fr-fr': "Bourrasque Fulgurante",
				'es-es': "Vendaval Atronador",
				'it-it': "Raffica Tonante",
				'pt-br': "Tufão Trovejante",
				'de-de': "Donnernder Wind"
			},
			effect: {
				'en-us': "If Tornadus is on your Bench, this attack does 50 more damage.",
				'fr-fr': "Si Boréas est sur votre Banc, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si Tornadus está en tu Banca, este ataque hace 50 puntos de daño más.",
				'it-it': "Se Tornadus è nella tua panchina, questo attacco infligge 50 danni in più.",
				'pt-br': "Se Tornadus estiver no seu Banco, este ataque causará 50 pontos de dano a mais.",
				'de-de': "Wenn sich Boreos auf deiner Bank befindet, fügt diese Attacke 50 Schadenspunkte mehr zu."
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
				'en-us': "Raging Thunder",
				'fr-fr': "Tonnerre Déchaîné",
				'es-es': "Trueno Rabioso",
				'it-it': "Rombotuono",
				'pt-br': "Trovão Devastador",
				'de-de': "Tosender Donner"
			},
			effect: {
				'en-us': "This attack does 40 damage to 1 of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 40 dégâts à l’un de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 40 puntos de daño a 1 de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 40 danni a uno dei tuoi Pokémon in panchina. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 40 pontos de dano a 1 dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon auf deiner Bank 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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

	description: {
		'en-us': "The spikes on its tail discharge immense bolts of lightning. It flies around the Unova region firing off lightning bolts.",
	},

	thirdParty: {
		cardmarket: 388162,
		tcgplayer: 194994
	}
}

export default card
