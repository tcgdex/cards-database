import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Cloyster",
		fr: "Crustabri",
		de: "Austos"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		91,
	],

	hp: 50,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Shellder",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],

			name: {
				en: "Clamp",
				fr: "Claquoir",
				de: "Schnapper"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack does nothing (not even damage).",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, cette attaque n'a aucun effet (pas même les dégâts).",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt. Bei 'Zahl' hat dieser Angriff keine Auswirkungen (und fügt auch keine Schadenspunkte zu)."
			},

			damage: 30
		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Spike Cannon",
				fr: "Picanon",
				de: "Dornkanone"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Wirf zwei Münzen. Dieser Angriff fügt jedesmal wenn die Münze 'Kopf' zeigt 30 Schadenspunkte zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Lorsqu'il est attraqué, il projette ses cornes en rapides volées. Personne n'a jamais vu ses entrailles."
	},

	thirdParty: {
		cardmarket: 273893
	}
}

export default card
