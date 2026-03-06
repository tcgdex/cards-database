import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Lopunny",
		de: "Schlapor"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		428,
	],
	
	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Buneary",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Relaxing Shower",
				de: "Entspannungsdusche"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard an Energy card from your hand. If you do, remove 1 damage counter from each of your Pokémon. This power can't be used if Lopunny is affected by a Special Condition.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Energiekarte von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, entferne 1 Schadensmarke von jedem deiner Pokémon. Diese Poké-Power kann nicht benutzt werden, wenn Schlapor von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hover Heal",
				de: "Heilgleiten"
			},
			effect: {
				en: "Remove all Special Conditions from Lopunny.",
				de: "Entferne alle Speziellen Zustände von Schlapor."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278893,
		tcgplayer: 86827
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
