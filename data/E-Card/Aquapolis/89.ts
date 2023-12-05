import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Larvitar",
		fr: "Embrylex",
		de: "Larvitar"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		246,
	],
	hp: 40,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mountain Eater",
				fr: "Croque-montagne",
				de: "Bergfresser"
			},
			effect: {
				en: "Your opponent discards the top card from his or her deck. Then you remove a damage counter from Larvitar.",
				fr: "Votre adversaire se défausse de la carte du dessus de son deck. Retirez ensuite un marqueur de dégâts de Embrylex.",
				de: "Dein Gegner legt die oberste Karte seines Decks auf seinen Ablagestapel. Dann entfernst du eine Schadensmarke von Larvitar."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Rising Lunge",
				fr: "Botte secrète",
				de: "Aufwärtsstoß"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
