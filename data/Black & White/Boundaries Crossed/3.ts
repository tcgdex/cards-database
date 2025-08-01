import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Vileplume",
		fr: "Rafflesia",
		es: "Vileplume",
		it: "Vileplume",
		pt: "Vileplume",
		de: "Giflor"
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
		en: "Gloom",
		fr: "Ortide",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Allergy Panic",
				fr: "Panique Allergique",
				es: "Pánico Alérgico",
				it: "Allergipanico",
				pt: "Pânico Alérgico",
				de: "Allergieschock"
			},
			effect: {
				en: "Apply Weakness for each Pokémon (both yours and your opponent's) as ×4 instead.",
				fr: "Appliquez une Faiblesse de x4 à chacun des Pokémon (les vôtres et ceux de votre adversaire).",
				es: "Aplica una Debilidad de x4 a cada Pokémon (tanto tuyos como de tu rival).",
				it: "La debolezza di tutti i Pokémon, sia tuoi che del tuo avversario, diventa x4.",
				pt: "Aplique Fraqueza x 4 a cada Pokémon (seu e do seu oponente).",
				de: "Der Schwächefaktor jedes Pokémon (deiner und der deines Gegners) wird durch x4 ersetzt."
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
				en: "Pollen Spray",
				fr: "Crache-Pollen",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep and Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
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

	thirdParty: {
		cardmarket: 280590,
		tcgplayer: 90382
	}
}

export default card
