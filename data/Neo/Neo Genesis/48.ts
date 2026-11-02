import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Seadra",
		fr: "Hypocéan",
		de: "Seemon"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		117,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Horsea",
		fr: "Hypotrempe",
		de: "Seeper"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Bubble",
				fr: "Écume",
				de: "Blubber"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Mud Splash",
				fr: "Jet d'boue",
				de: "Schlammspritzer"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and flip a coin. If heads, this attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si votre adversaire possède un ou plusieurs Pokémon sur son Banc, choisissez l'un d'eux et lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à ce Pokémon. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Falls dein Gegner mindestens ein Pokémon auf der Bank hat, wähle eines von ihnen und wirf eine Münze. Bei „Kopf“ fügt dieser Angriff diesem Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "An examination of its cells revealed the presence of a gene not found in Horsea. It became a hot topic.",
		fr: "L'observation de ses cellules a révélé la présence d'un gène inexistant dans Hypotrempe. C'est devenu un sujet très débattu.",
		de: "Eine Untersuchung seiner Zellen ergab die Präsenz eines in Seeper nicht vorhandenen Gens. Dies gab reichlich Anlass zu Spekulationen."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274448,
				tcgplayer: 89009
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274448,
				tcgplayer: 89009
			}
		}
	]
}

export default card
