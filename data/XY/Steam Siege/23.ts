import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Pyroar",
		fr: "Némélios",
	},
	illustrator: "Yumi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		668,
	],
	hp: 120,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Litleo",
		fr: "Hélionceau",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flame Charge",
				fr: "Nitrocharge",
			},
			effect: {
				en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Incinerate",
				fr: "Calcination",
			},
			effect: {
				en: "Before doing damage, discard all Pokémon Tool cards attached to your opponent’s Active Pokémon.",
				fr: "Avant d’infliger des dégâts, défaussez toutes les cartes Outil Pokémon attachées au Pokémon Actif de votre adversaire.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
