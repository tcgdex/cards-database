import { Card } from '../../../interfaces'
import Set from '../Promo'

const card: Card = {
	name: {
		en: "Espeon",
		fr: "Mentali",
	},
	illustrator: "Illus.＆Direc.The Pokémon Company Art Team",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		196,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Solar Revelation",
				fr: "Révélation Solaire",
			},
			effect: {
				en: "Prevent all effects of your opponent's attacks, except damage, done to each of your Pokémon that has any Energy attached to it.",
				fr: "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à chacun de vos Pokémon auquel de l'Énergie est attachée.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psy Report",
				fr: "Observation Psychique",
			},
			effect: {
				en: "Your opponent reveals his or her hand.",
				fr: "Votre adversaire montre sa main.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
