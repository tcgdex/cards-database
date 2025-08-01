import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Cacnea",
		fr: "Cacnea",
		es: "Cacnea",
		it: "Cacnea",
		pt: "Cacnea",
		de: "Tuska"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		331,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sucker Punch",
				fr: "Coup Bas",
				es: "Golpe Bajo",
				it: "Sbigoattacco",
				pt: "Soco Enganador",
				de: "Tiefschlag"
			},
			effect: {
				en: "If this Pokémon has any Darkness Energy attached to it, this attack does 30 more damage.",
				fr: "Si de l’Énergie Darkness est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si este Pokémon tiene alguna Energía Darkness unida a él, este ataque hace 30 puntos de daño más.",
				it: "Se questo Pokémon ha delle Energie Darkness assegnate, questo attacco infligge 30 danni in più.",
				pt: "Se este Pokémon tiver alguma Energia Darkness ligada a ele, este ataque causará 30 pontos de dano a mais.",
				de: "Wenn an dieses Pokémon mindestens 1 Darkness-Energie angelegt ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 311855
	}
}

export default card
