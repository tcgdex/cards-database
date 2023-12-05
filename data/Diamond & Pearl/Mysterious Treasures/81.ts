import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Electrike",
		fr: "Dynavolt",
		de: "Frizelbliz"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		309,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electromagnetic Jam",
				fr: "Bouchon électromagnétique",
				de: "Elektromagnetische Blockade"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't attach any Energy cards from his or her hand to the Active Pokémon during his or her next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas attacher de cartes Énergie de sa main à son Pokémon Actif lors de son prochain tour.",
				de: "Wirf 1 Münze. Bei \"Kopf\" kann dein Gegner in seinem nächsten Zug keine Energiekarten von seiner Hand an die Aktiven Pokémon anlegen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		fr: "Il améliore ses réflexes en stimulant ses muscles grâce à l'électricité dans sa fourrure."
	}
}

export default card
