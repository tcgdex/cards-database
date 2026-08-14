import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Excadrill",
		fr: "Minotaupe",
		es: "Excadrill",
		it: "Excadrill",
		pt: "Excadrill",
		de: "Stalobor"
	},

	illustrator: "Shin Nagasawa",
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
				"Colorless",
			],
			name: {
				en: "Dig",
				fr: "Tunnel",
				de: "Schaufler"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques (y compris les dégâts) infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Verhindere bei „Kopf“ während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Earthquake",
				fr: "Séisme",
				de: "Erdbeben"
			},
			effect: {
				en: "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 70,

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

	retreat: 2,

	description: {
		en: "More than 300 feet below the surface, they build mazelike nests. Their activity can be destructive to subway tunnels.",
		de: "Sein verworrener Bau liegt 100 Meter tief unter der Erde. Gelegentlich gräbt es auch U-Bahn-Schächte an."
	},

	thirdParty: {
		cardmarket: 280021,
		tcgplayer: 85337
	}
}

export default card
