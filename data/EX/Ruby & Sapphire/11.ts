import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Sceptile",
		fr: "Jungko",
		de: "Gewaldro"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Grovyle",
		fr: "Massko"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lizard Poison",
				fr: "Poison de lézard",
				de: "Echsengift"
			},
			effect: {
				en: "If 1 Energy is attached to Sceptile, the Defending Pokémon is now Asleep. If 2 Energy is attached to Sceptile, the Defending Pokémon is now Poisoned. If 3 Energy is attached to Sceptile, the Defending Pokémon is now Asleep and Poisoned. If 4 or more Energy is attached to Sceptile, the Defending Pokémon is now Asleep, Burned, and Poisoned.",
				fr: "Si Jungko possède une carte Énergie, le Pokémon Défenseur est maintenant Endormi. S'il en a deux, le Pokémon Défenseur est maintenant Empoisonné. S'il en a trois, le Pokémon Défenseur est Endormi et Empoisonné. S'il en a quatre ou plus, le Pokémon Défenseur est Endormi, Brûlé et Empoisonné.",
				de: "Wenn 1 Energie an Gewaldro angelegt ist, schläft das Verteidigende Pokémon jetzt. Wenn 2 Energie an Gewaldro angelegt ist, ist das Verteidigende Pokémon jetzt vergiftet. Wenn 3 Energie an Gewaldro angelegt ist, ist das Verteidigende Pokémon jetzt vergiftet und schläft. Wenn 4 oder mehr Energie an Gewaldro angelegt ist, ist das Verteidigende Pokémon jetzt vergiftet, verbrannt und schläft."
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
				en: "Solarbeam",
				fr: "Lance-soleil",
				de: "Solarstrahl"
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

	thirdParty: {
		cardmarket: 275659,
		tcgplayer: 88944
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
	]
}

export default card
