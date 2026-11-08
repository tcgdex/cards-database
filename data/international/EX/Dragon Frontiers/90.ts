import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Altaria ex δ",
		'fr-fr': "Altaria ex δ",
		'de-de': "Altaria ex"
	},

	suffix: "ex",
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Swablu",
		'fr-fr': "Tylton"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Extra Boost",
				'fr-fr': "Extra boost",
				'de-de': "Extra-Schub"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a basic Energy card from your hand to 1 of your Stage 2 Pokémon-ex. This power can't be used if Altaria ex is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez attacher une carte Énergie de base de votre main à 1 de vos Pokémon-ex de Niveau 2. Ce pouvoir ne peut pas être utilisé si Altaria ex est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Basis-Energiekarte von deiner Hand an 1 deiner Pokémon-ex der Phase 2 anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Altaria ex von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Healing Light",
				'fr-fr': "Lumière soignante",
				'de-de': "Heilendes Licht"
			},
			effect: {
				'en-us': "Remove 1 damage counter from each of your Pokémon.",
				'fr-fr': "Retirez 1 marqueur de dégât à chacun de vos Pokémon.",
				'de-de': "Entferne 1 Schadensmarke von jedem deiner Pokémon."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277295
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
