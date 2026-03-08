import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Feunard",
		de: "Vulnona"
	},

	illustrator: "Tomoaki Imakuni",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Safeguard",
				fr: "Rune protectrice",
				de: "Bodyguard"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Ninetales by your opponent's Pokémon-ex.",
				fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Feunard par les Pokémon-ex de votre adversaire.",
				de: "Verhindere alle Effekte von Angriffen inklusive Schaden, die Vulnona von gegnerischen Pokémon-ex zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Will-o'-the-wisp",
				fr: "Feu follet",
				de: "Irrlicht"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277325,
		tcgplayer: 87771
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

