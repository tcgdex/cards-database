import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Clamperl",
		fr: "Coquiperl"
	},
	illustrator: "Sachiko Adachi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		366,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Iron Defense",
				fr: "Mur de fer"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Clamperl during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Coquiperl lors du prochain tour de votre adversaire."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Clamp Splash",
				fr: "Jet de pince"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
