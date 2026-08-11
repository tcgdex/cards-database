import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Kingdra δ",
		'fr-fr': "Hyporoi δ",
		'de-de': "Seedraking"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 110,

	types: [
		"Fire",
		"Metal",
	],

	evolveFrom: {
		'en-us': "Seadra",
		'fr-fr': "Hypocéan"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Dragon Curse",
				'fr-fr': "Malédiction de dragon",
				'de-de': "Drachenfluch"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Kingdra is your Active Pokémon, you may put 2 damage counters on 1 of your opponent's Pokémon with δ on its card. This power can't be used if Kingdra is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si Hyporoi est votre Pokémon Actif, vous pouvez placer 2 marqueurs de dégât sur 1 des Pokémon de votre adversaire possédant le symbole δ. Ce pouvoir ne peut pas être utilisé si Hyporoi est affecté par un État spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Seedraking dein aktives Pokémon ist, 2 Schadensmarken auf 1 Pokémon deines Gegners legen, auf dem δ zu sehen ist. Diese Poké-Power kann nicht benutzt werden, wenn Seedraking von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Extra Flame",
				'fr-fr': "Flamme supplémentaire",
				'de-de': "Extraflammen"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, this attack does 30 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokémon ein Pokémon-ex ist, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Blast",
				'fr-fr': "Explosion de chaleur",
				'de-de': "Hitzestoß"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276980
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
	]
}

export default card
