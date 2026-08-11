import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Dark Slowking",
		'fr-fr': "Roigada obscur",
		'de-de': "Dunkles Laschoking"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		199,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Cunning",
				'fr-fr': "Astuce",
				'de-de': "Gerissenheit"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, look at the top card of your opponent's deck. Then, you may have your opponent shuffle his or her deck. This power can't be used if Dark Slowking is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Une fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, regardez la carte du dessus du deck de votre adversaire. Vous pouvez ensuite obliger votre adversaire à mélanger son deck. Ce pouvoir cesse de fonctionner si Roigada obscur est Endormi, Confus ou Paralysé.",
				'de-de': "Du kannst immer einmal in deinem Zug (vor deinem Angriff) eine Münze werfen. Schaue dir bei 'Kopf' die oberste Karte des Decks deines Gegners an. Du kannst dann bestimmen, dass dein Gegner sein Deck mischen muss. Diese Fähigkeit kann nicht verwendet werden, wenn Dunkles Laschoking schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Mind Shock",
				'fr-fr': "Choc mémoriel",
				'de-de': "Verstandesschock"
			},
			effect: {
				'en-us': "Don't apply Weakness or Resistance for this attack.",
				'fr-fr': "N'appliquez ni la Faiblesse ni la Résistance pour cette attaque.",
				'de-de': "Wende Schwäche und Resistenz bei diesem Angriff nicht an."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Each time it yawns, the Shellder on its head releases an enzyme that makes it grow even smarter.",
		'fr-fr': "À chaque fois qu'il baille, le Kokiyas qu'il porte sur la tête projette une enzyme qui le rend encore plus intelligent."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274672,
				tcgplayer: 84656
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274672,
				tcgplayer: 84656
			}
		}
	]
}

export default card
