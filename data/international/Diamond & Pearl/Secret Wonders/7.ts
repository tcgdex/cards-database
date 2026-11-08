import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Gardevoir",
		'fr-fr': "Gardevoir",
		'de-de': "Guardevoir"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Telepass",
				'fr-fr': "Télépathie",
				'de-de': "Telepass"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your opponent's discard pile for a Supporter card and use the effect of that card as the effect of this power. (The Supporter card remains in your opponent's discard pile.)  You can't use more than 1 Telepass Poké-Power each turn. This power can't be used if Gardevoir is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans la pile de défausse de votre adversaire une carte Supporter et utiliser l'effet de cette carte comme l'effet de ce pouvoir. (La carte Supporter reste dans la pile de défausse de votre adversaire.) Vous ne pouvez pas utiliser plus d'1 Poké-Power Télépathie par tour. Ce pouvoir ne peut pas être utilisé si Gardevoir est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du den Ablagestapel deines Gegners nach 1 Unterstützerkarte durchsuchen und ihren Effekt als Effekt dieser Poké-Power nutzen. (Die Unterstützerkarte bleibt im Ablagestapel deines Gegners.) Du kannst nicht mehr als 1 Telepass Poké-Power pro Zug einsetzen. Diese Poké-Power kann nicht benutzt werden, wenn Guardevoir von einem Speziellen Zustand betroffen ist."
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
				'en-us': "Psychic Lock",
				'fr-fr': "Verrou psy",
				'de-de': "Psycho-Schloss"
			},
			effect: {
				'en-us': "During your opponent's next turn, your opponent can't use any Poké-Powers on his or her Pokémon.",
				'fr-fr': "Lors du prochain tour de votre adversaire, celui-ci ne peut pas utiliser de Poké-Powers sur ses Pokémon.",
				'de-de': "Während des nächsten Zuges deines Gegners können gegnerische Pokémon keine Poké-Power benutzen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It will try to guard its trusted Trainer with its life. It has the ability to see the future.",
	},

	thirdParty: {
		cardmarket: 277760,
		tcgplayer: 85635
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
		{
			type: "holo",
			stamp: ["jason-klaczynski"]
		},
		{
			type: "holo",
			stamp: ["michael-pramawat"]
		}
	]
}

export default card
