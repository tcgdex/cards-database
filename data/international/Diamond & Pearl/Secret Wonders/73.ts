import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Venomoth",
		'fr-fr': "Aéromite",
		'de-de': "Omot"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		49,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Venonat",
		'fr-fr': "Mimitoss",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dangerous Scales",
				'fr-fr': "Écailles dangereuses",
				'de-de': "Schadende Schuppen"
			},
			effect: {
				'en-us': "If Venomoth is your Active Pokémon and is damaged by an opponent's attack (even if Venomoth is Knocked Out), the Attacking Pokémon is now Asleep and Poisoned.",
				'fr-fr': "Si Aéromite est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Aéromite est mis K.O), le Pokémon Attaquant est maintenant Endormi et Empoisonné.",
				'de-de': "Wenn Omot dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn Omot dadurch kampfunfähig wird), schläft das Angreifende Pokémon jetzt und ist vergiftet."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Disturbance Dive",
				'fr-fr': "Plongeon perturbant",
				'de-de': "Abwehrsturzflug"
			},
			effect: {
				'en-us': "Prevent all effects of an attack, excluding damage, done to Venomoth during your opponent's next turn.",
				'fr-fr': "Prévenez tous les effets d'une attaque, dégâts exclus, infligés à Aéromite lors du prochain tour de votre adversaire.",
				'de-de': "Verhindere während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, außer Schaden, die Omot zugefügt würden."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It flutters its wings to scatter dustlike scales. The scales leach toxins if they contact skin.",
	},

	thirdParty: {
		cardmarket: 277826,
		tcgplayer: 90302
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
