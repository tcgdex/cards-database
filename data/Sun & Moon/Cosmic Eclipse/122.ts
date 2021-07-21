import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Crabominable",
		fr: "Crabominable",
		es: "Crabominable",
		it: "Crabominable",
		pt: "Crabominable",
		de: "Krawell"
	},
	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		740,
	],
	hp: 140,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Crabrawler",
		fr: "Crabagarre",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Solid Shell",
				fr: "Coquille Dure",
				es: "Caparazón Sólido",
				it: "Guscio Solido",
				pt: "Carapaça Sólida",
				de: "Solider Panzer"
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Freezing Punch",
				fr: "Poing Gelant",
				es: "Puño Congelado",
				it: "Pugno Congelante",
				pt: "Murro Congelante",
				de: "Frostiger Boxhieb"
			},
			effect: {
				en: "If this Pokémon has any Water Energy attached to it, this attack does 80 more damage.",
				fr: "Si de l’Énergie Water est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si este Pokémon tiene alguna Energía Water unida a él, este ataque hace 80 puntos de daño más.",
				it: "Se questo Pokémon ha delle Energie Water assegnate, questo attacco infligge 80 danni in più.",
				pt: "Se este Pokémon tiver alguma Energia Water ligada a ele, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn an dieses Pokémon mindestens 1 Water-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
