import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
		de: "Despotar"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Crush",
				fr: "Destruqueue",
				de: "Zerquetschender Schweif"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Beam",
				fr: "Ultralaser",
				de: "Hyperstrahl"
			},
			effect: {
				en: "Discard an Energy card attached to the Defending Pokémon.",
				fr: "Défaussez une carte Énergie attachée au Pokémon Défenseur.",
				de: "Lege eine Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		en: "Extremely strong, it can change the landscape. It has an insolent nature that makes it not care about others."
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		},
		{
			type: "holo",
			foil: "cosmos"
		}
	],

	thirdParty: {
		cardmarket: 279182,
		tcgplayer: 90121
	}
}

export default card
