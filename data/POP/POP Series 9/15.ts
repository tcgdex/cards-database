import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [25],

	hp: 60,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Growl",
				fr: "Rugissement",
				de: "Heuler"
			},
			effect: {
				en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés par des attaques au Pokémon Défenseur sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der durch Angriffe des Verteidigenden Pokémon zugefügt wird, um 20 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Numb",
				fr: "Engourdi",
				de: "Betäuben"
			},
			effect: {
				en: "If Pikachu evolved from Pichu during this turn, the Defending Pokémon is now Paralyzed.",
				fr: "Si Pikachu évolue de Pichu lors de ce tour, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wenn sich Pikachu in diesem Zug aus Pichu entwickelt hat, ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	description: {
		en: "If it looses crackling power from the electric pouches on its cheeks, it is being wary.",
		fr: "Si les poches électriques de ses joues crépitent, c'est qu'il est sur ses gardes.",
		de: "Ist es angespannt, setzt es knisternd Elektrizität aus seinen Backentaschen frei."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88092,
				cardmarket: 278566
			},
		},
		{
			type: "normal",
			stamp: ["pokemon-day"],
		},
	],

}

export default card
