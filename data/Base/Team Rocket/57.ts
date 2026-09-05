import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Grimer",
		fr: "Tadmorv",
		de: "Sleima"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 40,

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
				en: "Poison Gas",
				fr: "Gaz toxik",
				de: "Giftwolke"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Sticky Hands",
				fr: "Mains collantes",
				de: "Klebrige Hände"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage and the Defending Pokémon is now Paralyzed; if tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Paralysé ; si c'est pile, cette attaque inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu und das verteidigende Pokémon ist jetzt gelähmt; bei „Zahl“ fügt dieser Angriff 10 Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "It has recently been found that Grimers are formed in waste-processing plants, and can move into towns via sewers.",
		fr: "On a récemment découvert que les Tadmorv prennent forme dans les usines de traitement des déchets, et peuvent se déplacer vers les villes à travers les égouts..",
		de: "Vor kurzem wurde festgestellt, dass Sleimas in Kläranlagen entstehen und über die Abwasserkanäle in die Stadt gelangen können."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274110,
				tcgplayer: 85905
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274110,
				tcgplayer: 85905
			}
		}
	]
}

export default card
