import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Mismagius",
		'fr-fr': "Magirêve",
		'de-de': "Traunmagil"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [429],

	hp: 90,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Magical Trans",
				'fr-fr': "Transfert magique",
				'de-de': "Magischer Transfer"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may move a Psychic Energy attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Mismagius is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez prendre une carte Énergie Psychic attachée à l’un de vos Pokémon et l’attacher à un autre Pokémon. Ce pouvoir ne peut pas être utilisé si Magirêve est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 -Energie, die an 1 deiner Pokémon angelegt ist, an 1 anderes deiner Pokémon anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Traunmagil von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psychic Pulse",
				'fr-fr': "Vibration psy",
				'de-de': "Psychopuls"
			},
			effect: {
				'en-us': "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon se trouvant sur le Banc de votre adversaire et ayant des marqueurs de dégât. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners, auf dem bereits mindestens 1 Schadensmarke liegt, 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its cries sound like incantations to torment the foe. It appears where you least expect it."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87517,
				cardmarket: 279161
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87517,
				cardmarket: 279161
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 125048
			}
		},
	],

}

export default card
