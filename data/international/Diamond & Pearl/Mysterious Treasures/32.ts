import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'de-de': "Vulnona"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Color Shift",
				'fr-fr': "Changement de couleur",
				'de-de': "Farbänderung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may choose 1 of your opponent's Pokémon. Ninetales is the same type as that Pokémon (all if that Pokémon is more than 1 type) until the end of your turn. This power can't be used if Ninetales is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir 1 des Pokémon de votre adversaire. Feunard est du même type que ce Pokémon (de tous ses types si ce Pokémon est de plus d'un type) jusqu'à la fin du tour. Ce pouvoir ne peut pas être utilisé si Feunard est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Pokémon deines Gegners wählen. Vulnona ist bis zum Ende deines Zuges ein Pokémon desselben Typs (oder Typen, wenn das gewählte Pokémon mehr als 1 Typ hat) wie das gewählte Pokémon. Diese Poké-Power kann nicht benutzt werden, wenn Vulnona von einem Speziellen Zustand bestroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Fire Blast",
				'fr-fr': "Déflagration",
				'de-de': "Feuersturm"
			},
			effect: {
				'en-us': "Discard a Fire Energy attached to Ninetales.",
				'fr-fr': "Défaussez une Énergie Fire attachée à Feunard.",
				'de-de': "Lege 1 an Vulnona angelegte -Energie auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.",
		'fr-fr': "On raconte que ses neuf queues détiennent un pouvoir mystique. Il peut vivre pendant mille ans."
	},

	thirdParty: {
		cardmarket: 277661,
		tcgplayer: 87772
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
