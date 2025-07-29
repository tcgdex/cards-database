import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Seel",
		fr: "Otaria",
		de: "Jurob"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		86,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Freezing Headbutt",
				fr: "Coup d'boule gelant",
				de: "Frostige Kopfnuss"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],

	description: {
		fr: "Un habitant des icebergs. En mer, il utilise la corne sur sa tête pour briser la banquise."
	},

	thirdParty: {
		cardmarket: 277726
	}
}

export default card
