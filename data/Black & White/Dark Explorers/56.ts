import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Excadrill",
		fr: "Minotaupe",
		es: "Excadrill",
		it: "Excadrill",
		pt: "Excadrill",
		de: "Stalobor"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		530,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Drilbur",
		fr: "Rototaupe",
		de: "Rotomurf"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Tunnel Strike",
				fr: "Frappe en Tunnel",
				de: "Tunnelhieb"
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Dig Uppercut",
				fr: "Poing Excavateur",
				de: "Schaufelhaken"
			},
			effect: {
				en: "Put a card from your discard pile into your hand.",
				fr: "Ajoutez une carte de votre pile de défausse à votre main.",
				de: "Nimm 1 Karte von deinem Ablagestapel auf deine Hand."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		en: "More than 300 feet below the surface, they build mazelike nests. Their activity can be destructive to subway tunnels.",
		de: "Sein verworrener Bau liegt 100 Meter tief unter der Erde. Gelegentlich gräbt es auch U-Bahn-Schächte an."
	},

	thirdParty: {
		cardmarket: 280384,
		tcgplayer: 85338
	}
}

export default card
