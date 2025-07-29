import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Relicanth",
		fr: "Relicanth",
		de: "Relicanth"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		369,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Prehistoric Wisdom",
				fr: "Sagesse préhistorique",
				de: "Prähistorische Weisheit"
			},
			effect: {
				en: "Choose a card from your hand and put it in the Lost Zone. Then, draw 3 cards.",
				fr: "Choisissez une carte de votre main et placez-la dans la Zone Perdue. Ensuite, piochez 3 cartes.",
				de: "Wähle 1 Karte von deiner Hand und lege sie ins Nirgendwo. Ziehe anschließend 3 Karten."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Granite Head",
				fr: "Tête de granit",
				de: "Granitkopf"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Relicanth by attacks is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Pendant le tour suivant de votre adversaire, les dégâts infligés par des attaques à Relicanth sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners, wird Schaden, der Relicanth durch Angriffe zugefügt wird, um 30 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 279712
	}
}

export default card
