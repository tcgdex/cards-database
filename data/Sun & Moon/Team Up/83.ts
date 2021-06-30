import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Alolan Grimer",
		fr: "Tadmorv d’Alola",
		es: "Grimer de Alola",
		it: "Grimer di Alola",
		pt: "Grimer de Alola",
		de: "Alola-Sleima"
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		88,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chemical Breath",
				fr: "Souffle Chimique",
				es: "Aliento Químico",
				it: "Alito Chimico",
				pt: "Hálito Químico",
				de: "Chemischer Hauch"
			},
			effect: {
				en: "This attack does 50 more damage for each Special Condition affecting your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 50 puntos de daño más por cada Condición Especial que afecte al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 50 danni in più per ogni condizione speciale che influenza il Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 50 pontos de dano a mais para cada Condição Especial afetando o Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der Speziellen Zustände zu, von denen das Aktive Pokémon deines Gegners betroffen ist."
			},
			damage: "20+",

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
