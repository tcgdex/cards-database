import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Shining Celebi",
		'fr-fr': "Celebi Brillant",
		'es-es': "Celebi Luminoso",
		'it-it': "Celebi iridescente",
		'pt-br': "Celebi Luminescente",
		'de-de': "Schimmerndes Celebi"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		251,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",

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
			],
			name: {
				'en-us': "Leaf Step",
				'fr-fr': "Enjambée de Feuillage",
				'es-es': "Paso Hoja",
				'it-it': "Passofoglia",
				'pt-br': "Passo de Folha",
				'de-de': "Blattschritt"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "This Pokémon wanders across time. Grass and trees flourish in the forests in which it has appeared.",
	},
}

export default card
