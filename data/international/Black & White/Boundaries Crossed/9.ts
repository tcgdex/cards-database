import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Celebi-EX",
		fr: "Celebi-EX",
		es: "Celebi-EX",
		it: "Celebi-EX",
		pt: "Celebi-EX",
		de: "Celebi-EX"
	},
	illustrator: "Toyste Beach",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		251,
	],
	hp: 110,
	types: [
		"Grass",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Time Recall",
				fr: "Rappel Temporel",
				es: "Retroceso en el Tiempo",
				it: "Viaggiotempo",
				pt: "Retorno no Tempo",
				de: "Zeitraffer"
			},
			effect: {
				en: "Each of your evolved Pokémon can use any attack from its previous Evolutions. (You still need the necessary Energy to use each attack.)",
				fr: "Chacun de vos Pokémon évolués peut utiliser les attaques de ses pré-évolutions. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser chaque attaque.)",
				es: "Cada uno de tus Pokémon evolucionados puede usar cualquier ataque de sus Evoluciones anteriores. (Sigues necesitando la Energía necesaria para usar cada ataque.)",
				it: "I tuoi Pokémon evoluti possono usare gli attacchi dei loro stadi evolutivi precedenti. Devi comunque avere l’Energia necessaria per usare quegli attacchi.",
				pt: "Cada um dos seus Pokémon evoluídos pode usar qualquer ataque de suas evoluções anteriores. (Você ainda precisa da Energia necessária para usar cada ataque.)",
				de: "Jedes deiner entwickelten Pokémon kann die Angriffe aus vorangegangenen Entwicklungsstufen verwenden. (Du benötigst dazu die für jeden der Angriffe erforderlichen Energien.)"
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wind Whisk",
				fr: "Rafale Tranchante",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
			},
			damage: 60,

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
	retreat: 1,



}

export default card
