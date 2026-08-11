import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Kyogre",
		fr: "Kyogre de Team Aqua",
		de: "Team Aquas Kyogre"
	},

	illustrator: "K. Hoshiba",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [382],

	hp: 100,

	types: [
		"Water",
		"Darkness"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Power Saver",
				fr: "Économisateur de puissance",
				de: "Kraft sparen"
			},
			effect: {
				en: "As long as the number of Pokémon in play (both yours and your opponent's) that has Team Aqua in its name is 3 or less, Team Aqua's Kyogre can't attack.",
				fr: "Tant que jusqu'à 3 Pokémon (les vôtres et ceux de votre adversaire) dont les noms comportent Team Aqua sont en jeu, Kyogre de Team Aqua ne peut pas attaquer.",
				de: "Solange 3 oder weniger Pokémon mit „Team Aqua“ im Namen im Spiel sind, kann Team Aquas Kyogre nicht angreifen."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Trip",
				fr: "Aqua croche-pied",
				de: "Aquatrip"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Si c'est pile, le Pokémon Défenseur est maintenant Endormi.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt verwirrt. Bei „Zahl“ schläft das Verteidigende Pokémon jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Smash",
				fr: "Aqua-choc",
				de: "Aqua Zertrümmerer"
			},
			effect: {
				en: "If the Defending Pokémon is affected by a Special Condition, this attack does 50 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon von einem Speziellen Zustand betroffen ist, fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275780,
				tcgplayer: 89788
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275780,
				tcgplayer: 89788
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 125256
			}
		}
	]
}

export default card
