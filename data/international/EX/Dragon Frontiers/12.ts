import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Typhlosion δ",
		'fr-fr': "Typhlosion δ",
		'de-de': "Tornupto"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		157,
	],

	hp: 100,

	types: [
		"Psychic",
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
				'en-us': "Shady Move",
				'fr-fr': "Déplacement louche",
				'de-de': "Zwielichtige Aktion"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Typhlosion is your Active Pokémon, you may move 1 damage counter from either player's Pokémon to another Pokémon (yours or your opponent's). This power can't be used if Typhlosion is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si Typhlosion est votre Pokémon Actif, vous pouvez déplacer 1 marqueur de dégât d'1 Pokémon de n'importe quel joueur sur un autre Pokémon (les vôtres et ceux de votre adversaire). Ce pouvoir ne peut pas être utilisé si Typhlosion est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff), wenn Tornupto dein Aktives Pokémon ist, kannst du I Schadensmarke von I Pokémon (deins oder deines Gegners) auf ein anderes Pokémon (deins oder deines Gegners) verschieben. Diese Poké-Power kann nicht benutzt werden, wenn Tornupto von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Burning Ball",
				'fr-fr': "Boule brûlante",
				'de-de': "Brennender Ball"
			},
			effect: {
				'en-us': "If Typhlosion has at least 2 Fire Energy attached to it, the Defending Pokémon is now Burned.",
				'fr-fr': "Si Typhlosion possède au moins 2 Énergies , le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Falls mindestens 2 -Energien an Tornupto angelegt sind, ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277217
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
