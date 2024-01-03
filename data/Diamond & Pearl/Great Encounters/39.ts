import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Granbull",
		fr: "Granbull",
		de: "Granbull"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		210,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Snubbull",
		fr: "Snubbull",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Daunt",
				fr: "Décourager",
				de: "Entmutigen"
			},
			effect: {
				en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés au Pokémon Défenseur par des attaques sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der durch Angriffe des Verteidigenden Pokémon zugefügt wird, um 20 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
				de: "Raserei"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each damage counter on Granbull.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Granbull.",
				de: "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Granbull zu."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
