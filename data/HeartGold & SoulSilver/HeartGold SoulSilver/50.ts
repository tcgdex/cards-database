import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Qwilfish",
		fr: "Qwilfish",
		de: "Baldorfish"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		211,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Offensive Needle",
				fr: "Aiguille offensive",
				de: "Nadelangriff"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Empoisonné. Si c’est pile, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt vergiftet. Bei \"Zahl\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "To fire its poison spikes, it must inflate its body by drinking over 2.6 gallons of water all at once."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279022,
		tcgplayer: 88495
	}
}

export default card
