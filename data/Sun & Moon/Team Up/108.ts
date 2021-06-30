import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Doublade",
		fr: "Dimoclès",
		es: "Doublade",
		it: "Doublade",
		pt: "Doublade",
		de: "Duokles"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		680,
	],
	hp: 90,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Honedge",
		fr: "Monorpale",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tool Drop",
				fr: "Chute d’Outils",
				es: "Machaque Herramientas",
				it: "Oggettamico",
				pt: "Queda de Ferramenta",
				de: "Ausrüstungssturz"
			},
			effect: {
				en: "This attack does 30 damage for each Pokémon Tool card attached to all Pokémon.",
				fr: "Cette attaque inflige 30 dégâts pour chaque carte Outil Pokémon attachée aux Pokémon.",
				es: "Este ataque hace 30 puntos de daño por cada carta de Herramienta Pokémon unida a todos los Pokémon.",
				it: "Questo attacco infligge 30 danni per ogni carta Oggetto Pokémon assegnata a ciascun Pokémon.",
				pt: "Este ataque causa 30 pontos de dano para cada carta de Ferramenta Pokémon ligada a todos os Pokémon.",
				de: "Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der an alle Pokémon angelegten Pokémon-Ausrüstungen zu."
			},
			damage: "30×",

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
