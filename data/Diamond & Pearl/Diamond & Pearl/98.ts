import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Shinx",
		fr: "Lixy",
		de: "Sheinux"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		403,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Spark",
				fr: "Étincelle",
				de: "Funkensprung"
			},
			effect: {
				en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Sa fourrure étincelle en cas de danger. Il profite du fait que l'ennemi est aveuglé pour s'enfuir."
	},

	thirdParty: {
		cardmarket: 277597
	}
}

export default card
