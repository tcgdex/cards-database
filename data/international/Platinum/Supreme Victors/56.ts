import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Dragonite FB",
		fr: "Dracolosse ",
		de: "Dragoran FB"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [149],
	hp: 100,
	types: [
		"Colorless"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mach Blow",
				fr: "Coup supersonique",
				de: "Temposchlag"
			},
			effect: {
				en: "If the Defending Pokémon is a Pokémon SP, this attack's base damage is 80 instead of 20.",
				fr: "Si le Pokémon Défenseur est un Pokémon SP, les dégâts de base de cette attaque sont de 80 au lieu de 20.",
				de: "Wenn das Verteidigende Pokémon ein Pokémon SP ist, beträgt der Grundschaden dieses Angriffs 80 Schadenspunkte anstelle von 20 Schadenspunkten."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giant Tail",
				fr: "Longue queue",
				de: "Riesenschweif"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278747,
				tcgplayer: 84920
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278747,
				tcgplayer: 84920
			}
		},
		{
			type: "reverse",
			foil: 'league',
			thirdParty: {
				cardmarket: 371548,
			}
		},
		{
			type: "normal",
			stamp: ["yuta-komatsuda"],
			thirdParty: {
				cardmarket: 868748,
				tcgplayer: 480030
			}
		}
	],

}

export default card
