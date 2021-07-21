import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Shining Celebi",
		fr: "Celebi Brillant",
		es: "Celebi Luminoso",
		it: "Celebi iridescente",
		pt: "Celebi Luminescente",
		de: "Schimmerndes Celebi"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
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
			],
			name: {
				en: "Leaf Step",
				fr: "Enjambée de Feuillage",
				es: "Paso Hoja",
				it: "Passofoglia",
				pt: "Passo de Folha",
				de: "Blattschritt"
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



}

export default card
