import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Vulpix",
		fr: "Goupix",
		de: "Vulpix"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [37],

	hp: 50,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Reheat",
				fr: "Réchauffer",
				de: "Wiedererwärmen"
			},
			effect: {
				en: "Discard up to 2 Energy cards from your hand. For each card you discarded, draw 2 cards.",
				fr: "Défaussez jusqu'à 2 cartes Énergie de votre main. Pour chaque carte défaussée, piochez 2 cartes.",
				de: "Lege bis zu 2 Energiekarten von deiner Hand auf deinen Ablagestapel. Ziehe für jede auf diese Weise auf den Ablagestapel gelegte Karte 2 Karten."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
				de: "Konfustrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		en: "It controls balls of fire. As it grows, its six tails split from their tips to make more tails.",
		de: "Es beherrscht Feuerbälle. Während es wächst, teilen sich seine sechs Schweife, um weitere zu bilden."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 90442,
				cardmarket: 278420
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278420,
				tcgplayer: 90442
			}
		}
	],

}

export default card
