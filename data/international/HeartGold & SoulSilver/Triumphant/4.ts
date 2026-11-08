import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Drapion",
		'fr-fr': "Drascore",
		'de-de': "Piondragi"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [452],

	hp: 100,

	types: [
		"Darkness"
	],

	evolveFrom: {
		'en-us': "Skorupi",
		'fr-fr': "Rapion"
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
				'en-us': "Toxic Fang",
				'fr-fr': "Croc toxik",
				'de-de': "Giftiger Reißzahn"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d’un seul sur ce Pokémon entre deux tours.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf dieses Pokémon."
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
				'en-us': "Land Crush",
				'fr-fr': "Écras’terre",
				'de-de': "Schollenbrecher"
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
		'en-us': "It attacks people and Pokémon that cross the desert. This has only furthered its bad reputation."
	},

	variants: [		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84924,
				cardmarket: 279534
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279534,
				tcgplayer: 84924
			}
		},
	],

}

export default card
