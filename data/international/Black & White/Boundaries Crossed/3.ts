import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Vileplume",
		'fr-fr': "Rafflesia",
		'es-es': "Vileplume",
		'it-it': "Vileplume",
		'pt-br': "Vileplume",
		'de-de': "Giflor"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		45,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Allergy Panic",
				'fr-fr': "Panique Allergique",
				'es-es': "Pánico Alérgico",
				'it-it': "Allergipanico",
				'pt-br': "Pânico Alérgico",
				'de-de': "Allergieschock"
			},
			effect: {
				'en-us': "Apply Weakness for each Pokémon (both yours and your opponent's) as ×4 instead.",
				'fr-fr': "Appliquez une Faiblesse de x4 à chacun des Pokémon (les vôtres et ceux de votre adversaire).",
				'es-es': "Aplica una Debilidad de x4 a cada Pokémon (tanto tuyos como de tu rival).",
				'it-it': "La debolezza di tutti i Pokémon, sia tuoi che del tuo avversario, diventa x4.",
				'pt-br': "Aplique Fraqueza x 4 a cada Pokémon (seu e do seu oponente).",
				'de-de': "Der Schwächefaktor jedes Pokémon (deiner und der deines Gegners) wird durch x4 ersetzt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pollen Spray",
				'fr-fr': "Crache-Pollen",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep and Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its petals are the largest in the world. As it walks, it scatters extremely allergenic pollen.",
	},

	thirdParty: {
		cardmarket: 280590,
		tcgplayer: 90382
	}
}

export default card
