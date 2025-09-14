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
				de: "Bubble"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
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
				de: "Mud Splash"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and flip a coin. If heads, this attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si votre adversaire possède un ou plusieurs Pokémon sur son Banc, choisissez l'un d'eux et lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à ce Pokémon. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "If your opponent has any Benched Pokémon, choose 1 of them and flip a coin. If heads, this attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
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

	description: {
		fr: "L'observation de ses cellules a révélé la présence d'un gène inexistant dans Hypotrempe. C'est devenu un sujet très débattu."
	},

	thirdParty: {
		cardmarket: 274448,
		tcgplayer: 89009
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
