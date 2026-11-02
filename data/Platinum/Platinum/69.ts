import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard",
		de: "Chaneira"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [113],

	hp: 90,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Healing Trial",
				fr: "Défi guérison",
				de: "Heilprobe"
			},
			effect: {
				en: "Flip a coin. If heads, remove 3 damage counters from Chansey. If tails, remove 3 damage counters from the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, retirez à Leveinard 3 marqueurs de dégât. Si c'est pile, retirez au Pokémon Défenseur 3 marqueurs de dégât.",
				de: "Wirf 1 Münze. Bei „Kopf“ entferne 3 Schadensmarken von Chaneira. Bei „Zahl“ entferne 3 Schadensmarken vom Verteidigenden Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pulled Punch",
				fr: "Poing-doux",
				de: "Verhaltener Schlag"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack's base damage is 10 instead of 40.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, les dégâts de base de cette attaque sont de 10 au lieu de 40.",
				de: "Wenn auf dem Verteidigenden Pokémon bereits mindestens 1 Schadensmarke liegt, beträgt der Grundschaden dieses Angriffs 10 Schadenspunkte anstelle von 40 Schadenspunkten."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		en: "A kindly Pokémon that lays highly nutritious eggs and shares them with injured Pokémon or people.",
		de: "Ein freundliches Pokémon, das seine nahrhaften Eier mit verletzten Pokémon und Menschen teilt."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 84176,
				cardmarket: 278490
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278490,
				tcgplayer: 84176
			}
		}
	],

}

export default card
