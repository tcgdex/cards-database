import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Drifblim",
		fr: "Grodrive",
		de: "Drifzepeli"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		426,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Wind Wave",
				fr: "Bourrasque",
				de: "Windwelle"
			},
			effect: {
				en: "Search your discard pile for up to 5 in any combination of Pokémon and Supporter cards. Show them to your opponent and shuffle them into your deck.",
				fr: "Choisissez dans votre pile de défausse n'importe quelle combinaison de jusqu'à 5 Pokémon et cartes Supporter. Montrez-les à votre adversaire et mélangez-les à votre deck.",
				de: "Durchsuche deinen Ablagestapel nach bis zu 5 Karten in beliebiger Kombination aus Pokémon und Unterstützungskarten. Zeige sie deinem Gegener und mische sie in dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Explosive Smoke",
				fr: "Fumée explosive",
				de: "Explosiver Qualm"
			},
			effect: {
				en: "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt allen Pokémon auf der Bank (deinen und deines Gegners) 10 Schadenspunkte zu. (Wenn Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	description: {
		fr: "Il somnole la journée et s'envole en grands groupes le soir venu. Nul ne sait où ils vont."
	},

	thirdParty: {
		cardmarket: 277523
	}
}

export default card
