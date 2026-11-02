import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Sneasel",
		fr: "Farfuret",
		de: "Sniebel"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		215,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Swipe",
				fr: "Griffe",
				de: "Klauen"
			},
			effect: {
				en: "Flip a coin. If heads, discard all Trainer cards attached to your opponent's Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez toutes les cartes Dresseur attachées au Pokémon de votre adversaire.",
				de: "Wirf eine Münze. Lege bei „Kopf“ alle an alle Pokémon deines Gegners angelegte Trainerkarten auf seinen Ablagestapel."
			},

		},
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
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		en: "Its paws conceal sharp claws. If attacked, it suddenly extends the claws and startles its enemy.",
		fr: "Ses pattes cachent des griffes aiguisées. S'il est attaqué, il sort ses griffes et surprend son ennemi.",
		de: "Seine Pfoten verbergen scharfe Krallen. Wenn es angegriffen wird, zeigt es plötzlich seine Krallen und erschreckt den Feind damit."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274610,
				tcgplayer: 89366
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274610,
				tcgplayer: 89366
			}
		}
	]
}

export default card

