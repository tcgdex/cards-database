import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Typhlosion",
		'fr-fr': "Typhlosion",
		'de-de': "Tornupto"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		157,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Quilava",
		'fr-fr': "Feurisson"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Firestarter",
				'fr-fr': "Pyroteknik",
				'de-de': "Brandstiftung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon. This power can't be used if Typhlosion is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Fire de votre pile de défausse à 1 des Pokémon de votre Banc. Ce pouvoir ne peut pas être utilisé si Typhlosion est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du eine -Energiekarte von deinem Ablagestapel nehmen und an 1 Pokémon auf deiner Bank anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Tornupto von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Evaporating Heat",
				'fr-fr': "Chaleur évaporante",
				'de-de': "Verdampfungshitze"
			},
			effect: {
				'en-us': "Discard a Water Energy attached to the Defending Pokémon.",
				'fr-fr': "Défaussez une Énergie Water attachée au Pokémon Défenseur.",
				'de-de': "Lege 1 -Energie, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It attacks using blasts of fire. It creates heat shimmers with intense fire to hide itself.",
		'fr-fr': "Il attaque en projetant des flammes. Il se dissimule derrière les vagues de chaleur qu'il produit."
	},

	thirdParty: {
		cardmarket: 277645,
		tcgplayer: 90105
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
