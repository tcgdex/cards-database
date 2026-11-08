import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Octillery",
		'fr-fr': "Octillery",
		'de-de': "Octillery"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [224],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Remoraid",
		'fr-fr': "Rémoraid"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Suction Cups",
				'fr-fr': "Ventouses",
				'de-de': "Saugnapf"
			},
			effect: {
				'en-us': "As long as Octillery is your Active Pokémon, whenever the Defending Pokémon retreats, discard all Energy cards attached to the Defending Pokémon when it goes to the Bench.",
				'fr-fr': "Tant que Octillery est votre Pokémon Actif, à chaque fois que le Pokémon Défenseur bat en retraite, obligez votre adversaire à se défausser de toutes les cartes Énergie attachées au Pokémon Défenseur quand il est envoyé sur le Banc.",
				'de-de': "Wenn sich das Verteidigende Pokémon zurückzieht, während Octillery dein Aktives Pokémon ist, lege alle an das Verteidigende Pokémon angelegten Energiekarten auf den Ablagestapel, wenn es auf die Bank geht."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Smokescreen",
				'fr-fr': "Brouillard",
				'de-de': "Rauchwolke"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, votre adversaire lance une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Wenn das Verteidigende Pokémon versucht, während des nächsten Zuges deines Gegners anzugreifen, wirft dein Gegner eine Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87828,
				cardmarket: 275098
			}
		},
	]
}

export default card
