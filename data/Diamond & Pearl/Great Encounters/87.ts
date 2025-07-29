import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Tangela",
		fr: "Saquedeneu",
		de: "Tangela"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		114,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Vine Invite",
				fr: "Plante invitante",
				de: "Einladende Ranke"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon.",
				fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs.",
				de: "Tausche 1 Verteidigendes Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Grass Knot",
				fr: "Noeud Herbe",
				de: "Strauchler"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost).",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Colorless dans le Coût de retraite du Pokémon Défenseur (après application des effets sur le Coût de retraite).",
				de: "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede -Energie in den Rückzugskosten des Verteidigenden Pokémon zu (nachdem Effekte auf die Rückzugskosten verrechnet wurden)."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277989
	}
}

export default card
