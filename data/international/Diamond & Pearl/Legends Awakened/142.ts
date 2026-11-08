import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Magnezone",
		'fr-fr': "Magnézone",
		'de-de': "Magnezone"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		462,
	],

	hp: 140,

	types: [
		"Metal",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Electric Trans",
				'fr-fr': "Transe électrique",
				'de-de': "Elektro-Transfer"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may move a Lightning or Metal Energy attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Magnezone is affected by a Special Condition.",
				'fr-fr': "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer une Énergie Lightning ou Metal attachée à 1 de vos Pokémon sur un autre de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Magnézone est affecté par un État Spécial.",
				'de-de': "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 - oder -Energie, die an 1 deiner Pokémon angelegt ist, an ein anderes deiner Pokémon anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Magnezone von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Metal",
			],
			name: {
				'en-us': "Cyber Shock",
				'fr-fr': "Choc cyber",
				'de-de': "Cyber-Schock"
			},
			effect: {
				'en-us': "Discard a Lightning Energy and a Metal Energy attached to Magnezone. The Defending Pokémon is now Paralyzed.",
				'fr-fr': "Défaussez une Énergie Lightning et une Énergie Metal attachée à Magnézone. Le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Lege 1 -Energie und 1 -Energie, die an Magnezone angelegt sind, auf deinen Ablagestapel. Das Verteidigende Pokémon ist jetzt gelähmt."
			},
			damage: 80,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 278291,
		tcgplayer: 87121
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
