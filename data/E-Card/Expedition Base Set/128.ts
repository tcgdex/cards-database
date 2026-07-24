import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Memory Berry",
		fr: "Rattata",
		de: "Rattfratz"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Tool",
	set: Set,

	dexId: [
		19,
	],

	hp: 30,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Attach Memory Berry to 1 of your Pokémon that doesn't have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. The Pokémon this card is attached to can use any attack from its Basic Pokémon card or any Evolution card from which the Pokémon evolved. (You still have to pay for that attack's Energy cost.) Discard this card at the end of any turn the Pokémon attacks.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88614,
				cardmarket: 275003
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
