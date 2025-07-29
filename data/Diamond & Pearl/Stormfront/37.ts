import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Electrode",
		de: "Lektrobal"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Flash",
				fr: "Flash",
				de: "Blitz"
			},
			effect: {
				en: "If the Defending Pokemon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electro Diffusion",
				fr: "Électro-diffusion",
				de: "Elektro-Diffusion"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Lightning Energy attached to Electrode. Flip a coin. If tails, discard all Lightning Energy attached to Electrode.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Lightning attachée à Electrode. Lancez une pièce. Si c'est pile, défaussez toutes les Énergies Lightning attachées à Electrode.",
				de: "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Lektrobal angelegte -Energie zu. Wirf 1 Münze. Bei \"Zahl\" entferne alle -Energien, die an Lektrobal angelegt sind, und lege sie auf deinen Ablagestapel."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		fr: "Il se laisse porter par les vents lorsque son corps est gonflé d'électricité à en éclater."
	},

	thirdParty: {
		cardmarket: 278334
	}
}

export default card
