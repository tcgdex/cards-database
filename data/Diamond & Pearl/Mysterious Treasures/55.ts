import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Masquerain",
		fr: "Maskadra",
		de: "Maskeregen"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		284,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Surskit",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Centrifugal Force",
				fr: "Force centrifuge",
				de: "Zentrifugalkraft"
			},
			effect: {
				en: "Does 20 damage times the number of Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost).",
				fr: "Inflige 20 dégâts multipliés par le nombre d'Énergie Colorless dans le Coût de retraite du Pokémon Défenseur (après application des effets du Coût de retraite).",
				de: "Dieser Angriff fügt 20 Schadenspunkte für jede -Energie in den Rückzugskosten des Verteidigenden Pokémon zu (nachdem Effekte auf die Rückzugskosten verrechnet wurden)."
			},
			damage: "20x",

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Swirling Ripple",
				fr: "Clapotis tourbillonnant",
				de: "Wirbelnde Wellen"
			},
			effect: {
				en: "If your opponent has any Water Pokémon in play, this attack does 30 damage plus 30 more damage and the Defending Pokémon is now Confused.",
				fr: "Si votre adversaire possède des Pokémon Water en jeu, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
				de: "Wenn dein Gegner mindestens 1 -Pokémon im Spiel hat, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		fr: "Des motifs en forme d'yeux ornent ses antennes. Ses 4 ailes l'aident à voler dans toutes les directions."
	},

	thirdParty: {
		cardmarket: 277684,
		tcgplayer: 87248
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
