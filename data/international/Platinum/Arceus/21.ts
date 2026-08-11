import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Lopunny",
		'de-de': "Schlapor"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [428],
	
	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Buneary"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Relaxing Shower",
				'de-de': "Entspannungsdusche"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard an Energy card from your hand. If you do, remove 1 damage counter from each of your Pokémon. This power can't be used if Lopunny is affected by a Special Condition.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Energiekarte von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, entferne 1 Schadensmarke von jedem deiner Pokémon. Diese Poké-Power kann nicht benutzt werden, wenn Schlapor von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hover Heal",
				'de-de': "Heilgleiten"
			},
			effect: {
				'en-us': "Remove all Special Conditions from Lopunny.",
				'de-de': "Entferne alle Speziellen Zustände von Schlapor."
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

	description: {
		'en-us': "The ears appear to be delicate. If they are touched roughly, it kicks with its graceful legs."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86827,
				cardmarket: 278893
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278893,
				tcgplayer: 86827
			}
		},
	],

}

export default card
