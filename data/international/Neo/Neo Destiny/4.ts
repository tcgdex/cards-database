import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Dark Espeon",
		'fr-fr': "Mentali obscur",
		'de-de': "Dunkles Psiana"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		196,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gouge",
				'fr-fr': "Griffes rétractiles",
				'de-de': "Klauen ausfahren"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage; if tails, this attack does 10 damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires. Si c'est pile, cette attaque inflige 10 dégâts.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu; bei 'Zahl' fügt dieser Angriff 10 Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psysplash",
				'fr-fr': "Psy plouf",
				'de-de': "Psyspritzer"
			},
			effect: {
				'en-us': "Does 10 damage to each of your opponent's Pokémon for each Energy card attached to that Pokémon. Don't apply Weakness and Resistance.",
				'fr-fr': "Inflige 10 dégâts à chaque Pokémon de votre adversaire pour chaque carte Énergie attachée à ce Pokémon. N'appliquez ni la Faiblesse, ni la Résistance.",
				'de-de': "Fügt jedem der Pokémon deines Gegners 10 Schadenspunkte für jede an dieses Pokémon angelegte Energiekarte zu. Wende Schwäche und Resistenz nicht an."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		'en-us': "The tips of its split tail quiver whenever it uses its psychic abilities to read its opponent's next move.",
		'fr-fr': "La double extrémité de sa queue s'agite quand il utilise ses pouvoirs psychiques pour deviner quelle sera la prochaine action de son adversaire."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274656,
				tcgplayer: 84592
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274656,
				tcgplayer: 84592
			}
		}
	]
}

export default card
