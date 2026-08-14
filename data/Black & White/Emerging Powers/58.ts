import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Throh",
		fr: "Judokrak",
		es: "Throh",
		it: "Throh",
		pt: "Throh",
		de: "Jiutesto"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		538,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Scarf Hold",
				fr: "Kesa-Gatame",
				de: "Schalhalter"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Bei „Kopf“ kann das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht angreifen."
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
		en: "When it tightens its belt, it becomes stronger. Wild Throh use vines to weave their own belts.",
		de: "Zurrt es seinen Gürtel fest, gewinnt es an Kraft. Wilde Exemplare flechten sich ihren Gürtel in Handarbeit aus Ranken."
	},

	thirdParty: {
		cardmarket: 280023,
		tcgplayer: 89900
	}
}

export default card
