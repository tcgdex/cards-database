import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Magnemite",
		fr: "Magneti",
		de: "Magnetilo"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		81,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Conductive Body",
				fr: "Corps conducteur",
				de: "Leitender Körper"
			},
			effect: {
				en: "You pay Colorless less to retreat Magnemite for each Magnemite on your Bench.",
				fr: "Vous payez  de moins pour faire battre Magneti en retraite pour chaque Magneti sur votre Banc.",
				de: "Für jedes Magnetilo auf deiner Bank zahlst du  weniger, wenn du Magnetilo zurückziehst."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Magnetic Bomb",
				fr: "Bombe magnétique",
				de: "Magnetische Bombe"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage. If tails, Magnemite does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires. Si c'est pile, Magneti s'inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu. Bei 'Zahl' fügt sich Magnetilo selber 10 Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275125
	}
}

export default card
