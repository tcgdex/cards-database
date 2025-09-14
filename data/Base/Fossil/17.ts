import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Articuno",
		fr: "Artikodin",
		de: "Arktos"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		144,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Freeze Dry",
				fr: "Blocage glacial",
				de: "Gefriertrocknung"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Blizzard",
				fr: "Blizzard",
				de: "Blizzard"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chacun des Pokémon du Banc de votre adversaire. Si c'est pile, cette attaque inflige 10 dégâts à chacun des Pokémon de votre Banc. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon qui sont sur un Banc.)",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff jedem gegnerischen Pokémon auf der Bank 10 Schadenspunkte zu. Bei \"Zahl\" fügt dieser Angriff jedem deiner eigenen Pokémon auf der Bank 10 Schadenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht verwenden.)"
			},
			damage: 50,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Le légendaire oiseau des glaces. On dit qu'il apparaît aux gens perdus dans les sommets."
	},

	thirdParty: {
		cardmarket: 273863,
		tcgplayer: 44425
	},

	variants: [
		{
			type: "normal",
			foil: "galaxy"
		},
		{
			type: "normal",
			stamp: ["1st edition"],
			foil: "galaxy"
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
