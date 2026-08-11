import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Sceptile",
		'fr-fr': "Jungko",
		'de-de': "Gewaldro"
	},

	illustrator: "Midori Harada",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [254],

	hp: 120,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Grovyle",
		'fr-fr': "Massko"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Lizard Poison",
				'fr-fr': "Poison de lézard",
				'de-de': "Echsengift"
			},
			effect: {
				'en-us': "If 1 Energy is attached to Sceptile, the Defending Pokémon is now Asleep. If 2 Energy is attached to Sceptile, the Defending Pokémon is now Poisoned. If 3 Energy is attached to Sceptile, the Defending Pokémon is now Asleep and Poisoned. If 4 or more Energy is attached to Sceptile, the Defending Pokémon is now Asleep, Burned, and Poisoned.",
				'fr-fr': "Si Jungko possède une carte Énergie, le Pokémon Défenseur est maintenant Endormi. S'il en a deux, le Pokémon Défenseur est maintenant Empoisonné. S'il en a trois, le Pokémon Défenseur est Endormi et Empoisonné. S'il en a quatre ou plus, le Pokémon Défenseur est Endormi, Brûlé et Empoisonné.",
				'de-de': "Wenn 1 Energie an Gewaldro angelegt ist, schläft das Verteidigende Pokémon jetzt. Wenn 2 Energie an Gewaldro angelegt ist, ist das Verteidigende Pokémon jetzt vergiftet. Wenn 3 Energie an Gewaldro angelegt ist, ist das Verteidigende Pokémon jetzt vergiftet und schläft. Wenn 4 oder mehr Energie an Gewaldro angelegt ist, ist das Verteidigende Pokémon jetzt vergiftet, verbrannt und schläft."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Solarbeam",
				'fr-fr': "Lance-soleil",
				'de-de': "Solarstrahl"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],


	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275659,
				tcgplayer: 88944
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275659,
				tcgplayer: 88944
			}
		},
	],

}

export default card
