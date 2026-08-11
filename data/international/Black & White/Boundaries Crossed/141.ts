import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Celebi-EX",
		'fr-fr': "Celebi-EX",
		'es-es': "Celebi-EX",
		'it-it': "Celebi-EX",
		'pt-br': "Celebi-EX",
		'de-de': "Celebi-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
				'en-us': "Time Recall",
				'fr-fr': "Rappel Temporel",
				'es-es': "Retroceso en el Tiempo",
				'it-it': "Viaggiotempo",
				'pt-br': "Retorno no Tempo",
				'de-de': "Zeitraffer"
			},
			effect: {
				'en-us': "Each of your evolved Pokémon can use any attack from its previous Evolutions. (You still need the necessary Energy to use each attack.)",
				'fr-fr': "Chacun de vos Pokémon évolués peut utiliser les attaques de ses pré-évolutions. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser chaque attaque.)",
				'es-es': "Cada uno de tus Pokémon evolucionados puede usar cualquier ataque de sus Evoluciones anteriores. (Sigues necesitando la Energía necesaria para usar cada ataque.)",
				'it-it': "I tuoi Pokémon evoluti possono usare gli attacchi dei loro stadi evolutivi precedenti. Devi comunque avere l’Energia necessaria per usare quegli attacchi.",
				'pt-br': "Cada um dos seus Pokémon evoluídos pode usar qualquer ataque de suas evoluções anteriores. (Você ainda precisa da Energia necessária para usar cada ataque.)",
				'de-de': "Jedes deiner entwickelten Pokémon kann die Angriffe aus vorangegangenen Entwicklungsstufen verwenden. (Du benötigst dazu die für jeden der Angriffe erforderlichen Energien.)"
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
				'en-us': "Wind Whisk",
				'fr-fr': "Rafale Tranchante",
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
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
