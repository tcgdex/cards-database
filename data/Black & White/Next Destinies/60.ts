import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Darmanitan",
		fr: "Darumacho",
		es: "Darmanitan",
		it: "Darmanitan",
		pt: "Darmanitan",
		de: "Flampivian"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		555,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Darumaka",
		fr: "Darumarond",
		de: "Flampion"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Synchrodraw",
				fr: "Pioche Synchro",
				de: "Synchronzug"
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez un nombre de cartes égal au nombre de cartes dans la main de votre adversaire.",
				de: "Mische deine Handkarten in dein Deck. Ziehe anschließend genauso viele Karten, wie dein Gegner auf der Hand hat."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "DarMAXitan",
				fr: "DaruMax",
				de: "FlampiviMAX"
			},
			effect: {
				en: "Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf für jede an dieses Pokémon angelegte Energie 1 Münze. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "When weakened in battle, it transforms into a stone statue. Then it sharpens its mind and fights on mentally.",
		de: "Schwächt man es im Kampf, wird es reglos wie ein Stein und horcht in sich hinein, um mit der Kraft seines Geistes zu kämpfen."
	},

	thirdParty: {
		cardmarket: 280285,
		tcgplayer: 84715
	}
}

export default card
