import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Stunfisk",
		'fr-fr': "Limonde",
		'es-es': "Stunfisk",
		'it-it': "Stunfisk",
		'pt-br': "Stunfisk",
		'de-de': "Flunschlik"
	},

	illustrator: "sowsow",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		618,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
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
				'en-us': "This attack does 10 damage to 1 of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à l’un de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 10 puntos de daño a 1 de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 10 danni a uno dei tuoi Pokémon in panchina. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 10 pontos de dano a 1 dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electric Trap",
				'fr-fr': "Piège Électrique",
				'es-es': "Trampa Eléctrica",
				'it-it': "Trappola Elettrica",
				'pt-br': "Armadilha Elétrica",
				'de-de': "Elektrofalle"
			},
			effect: {
				'en-us': "This attack does 30 damage for each of your Pokémon that has any damage counters on it.",
				'fr-fr': "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon ayant au moins un marqueur de dégâts.",
				'es-es': "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon que tenga algún contador de daño sobre él.",
				'it-it': "Questo attacco infligge 30 danni per ogni tuo Pokémon che abbia dei segnalini danno.",
				'pt-br': "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon que tiver algum contador de dano nele.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mal der Anzahl deiner Pokémon zu, auf denen mindestens 1 Schadensmarke liegt."
			},
			damage: "30×",

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

	retreat: 3,

	description: {
		'en-us': "Its skin is very hard, so it is unhurt even if stepped on by sumo wrestlers. It smiles when transmitting electricity.",
	},

	thirdParty: {
		cardmarket: 372347,
		tcgplayer: 189155
	}
}

export default card
