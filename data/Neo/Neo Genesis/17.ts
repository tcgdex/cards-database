import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Typhlosion",
		fr: "Typhlosion",
		de: "Tornupto"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		157,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Quilava",
		fr: "Feurisson",
		de: "Igelavar"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Fire Recharge",
				fr: "Recharge de feu",
				de: "Feueraufladung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, attach a Fire Energy card from your discard pile to 1 of your Fire Pokémon. This power can't be used if Typhlosion is Asleep, Confused, or Paralyzed.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, attachez une carte Énergie  de votre pile de défausse sur un de vos Pokémon . Ce pouvoir ne peut être utilisé si Typhlosion est Endormi, Confus ou Paralysé.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Münze werfen. Lege bei „Kopf“ eine {R}-Energiekarte aus deinem Ablagestapel auf eines deiner {R}-Pokémon. Diese Fähigkeit kann nicht verwendet werden, falls Tornupto schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Flame Burst",
				fr: "Éruption de flammes",
				de: "Flammenexplosion"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 60 damage plus 20 more damage and does 20 damage to Typhlosion. If tails, this attack does 60 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires et inflige 20 dégâts à Typhlosion. Si c'est pile, cette attaque inflige 60 dégâts.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 60 Schadenspunkte plus 20 weitere Schadenspunkte zu und fügt Tornupto ebenfalls 20 Schadenspunkte zu; bei „Zahl“ fügt dieser Angriff 60 Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "If its rage peaks, it becomes so hot that anything that touches it will instantly go up in flames.",
		fr: "Dans ses moments de rage, il devient tellement chaud que tout ce qu'il touche prend feu.",
		de: "Falls seine Raserei den Höhepunkt erreicht, wird es so heiß, dass alles, was mit ihm in Berührung kommt, sofort in Flammen aufgeht."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274417,
				tcgplayer: 90098
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274417,
				tcgplayer: 90098
			}
		}
	]
}

export default card
