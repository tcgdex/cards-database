import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Slowking",
		fr: "Roigada obscur",
		de: "Dunkles Laschoking"
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
		en: "Slowpoke",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Cunning",
				fr: "Astuce",
				de: "Gerissenheit"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, look at the top card of your opponent's deck. Then, you may have your opponent shuffle his or her deck. This power can't be used if Dark Slowking is Asleep, Confused, or Paralyzed.",
				fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, regardez la carte du dessus du deck de votre adversaire. Vous pouvez ensuite obliger votre adversaire à mélanger son deck. Ce pouvoir cesse de fonctionner si Roigada obscur est Endormi, Confus ou Paralysé.",
				de: "Du kannst immer einmal in deinem Zug (vor deinem Angriff) eine Münze werfen. Schaue dir bei 'Kopf' die oberste Karte des Decks deines Gegners an. Du kannst dann bestimmen, dass dein Gegner sein Deck mischen muss. Diese Fähigkeit kann nicht verwendet werden, wenn Dunkles Laschoking schläft, verwirrt oder gelähmt ist."
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
				en: "Mind Shock",
				fr: "Choc mémoriel",
				de: "Verstandesschock"
			},
			effect: {
				en: "Don't apply Weakness or Resistance for this attack.",
				fr: "N'appliquez ni la Faiblesse ni la Résistance pour cette attaque.",
				de: "Wende Schwäche und Resistenz bei diesem Angriff nicht an."
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

	description: {
		fr: "À chaque fois qu'il baille, le Kokiyas qu'il porte sur la tête projette une enzyme qui le rend encore plus intelligent."
	},

	thirdParty: {
		cardmarket: 274672
	}
}

export default card
