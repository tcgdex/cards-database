import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
		de: "Rihornior"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		464,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Raging Drill",
				fr: "Perceuse enragée",
				de: "Zornbohrer"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each damage counter on Rhyperior.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Rhinastoc.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Rihornior zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Deep Scrap",
				fr: "Grosse bagarre",
				de: "Tiefenschrottung"
			},
			effect: {
				en: "If the Defending Pokémon would be Knocked Out by this attack, discard the top 3 cards from your opponent's deck.",
				fr: "Si le Pokémon Défenseur est mis K.O. par cette attaque, défaussez les 3 cartes du dessus du deck de votre adversaire.",
				de: "Wenn das Verteidigende Pokémon durch diesen Angriff kampfunfähig würde, lege die obersten 3 Karten vom Deck deines Gegners auf seinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 278701
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
