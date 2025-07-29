import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Drapion",
		fr: "Drascore",
		de: "Piondragi"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		452,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Skorupi",
		fr: "Rapion",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Toxic Fang",
				fr: "Croc toxik",
				de: "Giftiger Reißzahn"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d’un seul sur ce Pokémon entre deux tours.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf dieses Pokémon."
			},
			damage: 40,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Land Crush",
				fr: "Écras’terre",
				de: "Schollenbrecher"
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
		en: "It attacks people and Pokémon that cross the desert. This has only furthered its bad reputation."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279534
	}
}

export default card
