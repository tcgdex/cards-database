import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Darkrai",
		fr: "Darkrai",
		es: "Darkrai",
		it: "Darkrai",
		pt: "Darkrai",
		de: "Darkrai"
	},

	illustrator: "nagimiso",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Darkness",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Darkness Guard",
				fr: "Parade Obscure",
				es: "Defensa Oscuridad",
				it: "Guardia dell'Oscurità",
				pt: "Guarda Sombria",
				de: "Finsterschutz"
			},
			effect: {
				en: "If this Pokémon has any Darkness Energy attached, it takes 20 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Si de l'Énergie Darkness est attachée à ce Pokémon, il subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Si este Pokémon tiene alguna Energía Darkness unida a él, los ataques le hacen 20 puntos de daño menos (después de aplicar Debilidad y Resistencia).",
				it: "Se questo Pokémon ha delle Energie Darkness assegnate, subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Se este Pokémon tiver alguma Energia Darkness ligada a ele, receberá 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				de: "Wenn an dieses Pokémon mindestens 1 Darkness-Energie angelegt ist, werden ihm durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vortex of Darkness",
				fr: "Vortex Obscur",
				es: "Vórtice de Oscuridad",
				it: "Vortice Oscuro",
				pt: "Vórtice das Sombras",
				de: "Wirbel der Finsternis"
			},
			effect: {
				en: "This attack does 20 more damage for each Darkness Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Darkness attachée à ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía Darkness unida a este Pokémon.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia Darkness assegnata a questo Pokémon.",
				pt: "Este ataque causa 20 pontos de dano a mais para cada Energia Darkness ligada a este Pokémon.",
				de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Darkness-Energie 20 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It can lull people to sleep and make them dream. It is active during nights of the new moon."
	}
}

export default card
