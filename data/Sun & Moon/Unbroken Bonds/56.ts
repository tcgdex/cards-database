import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Stunfisk",
		fr: "Limonde",
		es: "Stunfisk",
		it: "Stunfisk",
		pt: "Stunfisk",
		de: "Flunschlik"
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
				en: "Raging Thunder",
				fr: "Tonnerre Déchaîné",
				es: "Trueno Rabioso",
				it: "Rombotuono",
				pt: "Trovão Devastador",
				de: "Tosender Donner"
			},
			effect: {
				en: "This attack does 10 damage to 1 of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à l’un de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 10 puntos de daño a 1 de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 10 danni a uno dei tuoi Pokémon in panchina. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 10 pontos de dano a 1 dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electric Trap",
				fr: "Piège Électrique",
				es: "Trampa Eléctrica",
				it: "Trappola Elettrica",
				pt: "Armadilha Elétrica",
				de: "Elektrofalle"
			},
			effect: {
				en: "This attack does 30 damage for each of your Pokémon that has any damage counters on it.",
				fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon ayant au moins un marqueur de dégâts.",
				es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon que tenga algún contador de daño sobre él.",
				it: "Questo attacco infligge 30 danni per ogni tuo Pokémon che abbia dei segnalini danno.",
				pt: "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon que tiver algum contador de dano nele.",
				de: "Diese Attacke fügt 30 Schadenspunkte mal der Anzahl deiner Pokémon zu, auf denen mindestens 1 Schadensmarke liegt."
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



}

export default card
