import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Poliwrath",
		fr: "Tartard",
		de: "Quappo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		62,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				de: "Aquaknarre"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Water Energy attached to Poliwrath but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd doesn't count.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Tartard en plus du coût en Énergie de cette attaque. Les Énergies  supplémentaires après la seconde ne comptent pas.",
				de: "Fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Quappo abgelegte  Energiekarte zu, die nicht zum Zahlen der Energiekosten füür diesen Angriff verwendet wurde. Du kannst nicht mehr als 20 Schadenspunkte auf diese Weise hinzufügen."
			},
			damage: "30+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whirlpool",
				fr: "Lessiveuse",
				de: "Strudel"
			},
			effect: {
				en: "If the Defending Pokémon has any Energy cards attached to it, choose 1 and discard it.",
				fr: "Si des cartes Énergie sont attachées au Pokémon Défenseur, choisissez 1 d'elle et défaussez-la.",
				de: "Sind auf dem verteidigenden Pokémon Energiekarten abgelegt, wähle eine von ihnen und entferne sie."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Excellent nageur, il pratique le crawl ou la nage papillon mieux qu'un champion olympique."
	},

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "holo",
			subtype: "shadowless",
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	],


	thirdParty: {
		cardmarket: 273708,
		tcgplayer: 42353
	}
}

export default card
