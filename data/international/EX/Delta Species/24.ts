import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Mightyena δ",
		'fr-fr': "Grahyena δ",
		'de-de': "Magnayen"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		262,
	],

	hp: 70,

	types: [
		"Darkness",
		"Metal",
	],

	evolveFrom: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyena"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Delta Fang",
				'fr-fr': "Croc Delta",
				'de-de': "Delta-Fänge"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, that Pokémon can't attack during your opponent's next turn.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-ex, il ne peut pas attaquer lors du prochain tour de votre adversaire.",
				'de-de': "Wenn das Verteidigende Pokémon ein Pokémon-ex ist, kann es im nächsten Zug deines Gegners nicht angreifen."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Gang Up",
				'fr-fr': "S'y mettre à plusieurs",
				'de-de': "Alle auf Einen"
			},
			effect: {
				'en-us': "Does 10 damage times the number of Darkness Pokémon and Metal Pokémon you have in play.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de Pokémon  et  que vous avez en jeu.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl der  und -Pokémon zu, die du im Spiel hast."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276787
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

