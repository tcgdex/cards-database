import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Altaria ex δ",
		fr: "Altaria ex δ",
		de: "Altaria ex"
	},

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
		en: "Swablu",
		fr: "Tylton"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Extra Boost",
				fr: "Extra boost",
				de: "Extra-Schub"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a basic Energy card from your hand to 1 of your Stage 2 Pokémon-ex. This power can't be used if Altaria ex is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez attacher une carte Énergie de base de votre main à 1 de vos Pokémon-ex de Niveau 2. Ce pouvoir ne peut pas être utilisé si Altaria ex est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Basis-Energiekarte von deiner Hand an 1 deiner Pokémon-ex der Phase 2 anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Altaria ex von einem Speziellen Zustand betroffen ist."
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
				en: "Healing Light",
				fr: "Lumière soignante",
				de: "Heilendes Licht"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon.",
				fr: "Retirez 1 marqueur de dégât à chacun de vos Pokémon.",
				de: "Entferne 1 Schadensmarke von jedem deiner Pokémon."
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
