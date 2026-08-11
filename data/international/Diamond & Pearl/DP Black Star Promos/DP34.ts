import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Drifblim",
		'fr-fr': "Grodrive",
		'de-de': "Drifzepeli"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
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
		'en-us': "Drifloon",
		'fr-fr': "Baudrive"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Wind Wave",
				'fr-fr': "Bourrasque",
				'de-de': "Windwelle"
			},
			effect: {
				'en-us': "Search your discard pile for up to 5 in any combination of Pokémon and Supporter cards. Show them to your opponent and shuffle them into your deck.",
				'fr-fr': "Choisissez dans votre pile de défausse n'importe quelle combinaison de jusqu'à 5 Pokémon et cartes Supporter. Montrez-les à votre adversaire et mélangez-les à votre deck.",
				'de-de': "Durchsuche deinen Ablagestapel nach bis zu 5 Karten in beliebiger Kombination aus Pokémon- und Unterstützerkarten. Zeige sie deinem Gegner und mische sie in dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Explosive Smoke",
				'fr-fr': "Fumée explosive",
				'de-de': "Explosiver Qualm"
			},
			effect: {
				'en-us': "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt allen Pokémon auf der Bank (deinen und denen deines Gegners) 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
		'en-us': "It's drowzy in daytime, but flies off in the evening in big groups. No one knows where they go.",
		'fr-fr': "Il somnole la journée et s'envole en grands groupes le soir venu. Nul ne sait où ils vont."
	},

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
