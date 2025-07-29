import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
		de: "Guardevoir"
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
		en: "Kirlia",
		fr: "Kirlia",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Telepass",
				fr: "Télépathie",
				de: "Telepass"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your opponent's discard pile for a Supporter card and use the effect of that card as the effect of this power. (The Supporter card remains in your opponent's discard pile.)  You can't use more than 1 Telepass Poké-Power each turn. This power can't be used if Gardevoir is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans la pile de défausse de votre adversaire une carte Supporter et utiliser l'effet de cette carte comme l'effet de ce pouvoir. (La carte Supporter reste dans la pile de défausse de votre adversaire.) Vous ne pouvez pas utiliser plus d'1 Poké-Power Télépathie par tour. Ce pouvoir ne peut pas être utilisé si Gardevoir est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du den Ablagestapel deines Gegners nach 1 Unterstützerkarte durchsuchen und ihren Effekt als Effekt dieser Poké-Power nutzen. (Die Unterstützerkarte bleibt im Ablagestapel deines Gegners.) Du kannst nicht mehr als 1 Telepass Poké-Power pro Zug einsetzen. Diese Poké-Power kann nicht benutzt werden, wenn Guardevoir von einem Speziellen Zustand betroffen ist."
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
				en: "Psychic Lock",
				fr: "Verrou psy",
				de: "Psycho-Schloss"
			},
			effect: {
				en: "During your opponent's next turn, your opponent can't use any Poké-Powers on his or her Pokémon.",
				fr: "Lors du prochain tour de votre adversaire, celui-ci ne peut pas utiliser de Poké-Powers sur ses Pokémon.",
				de: "Während des nächsten Zuges deines Gegners können gegnerische Pokémon keine Poké-Power benutzen."
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

	thirdParty: {
		cardmarket: 277760
	}
}

export default card
