import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
		de: "Lanturn"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Chinchou",
		fr: "Lampi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Energy Split",
				fr: "Séparation d'Énergie",
				de: "Energie-Spaltung"
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent's Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire possédant des cartes Énergie. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt allen Pokémon deines Gegners, an denen mindestens 1 Energiekarte angelegt ist, 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Bolt",
				fr: "Aqua-boulon",
				de: "Aquaschuss"
			},
			effect: {
				en: "Does 60 damage plus 10 more damage for each Water Energy attached to Lanturn.",
				fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Water attachée à Lanturn.",
				de: "Dieser Angriff fügt 60 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Lanturn angelegte -Energie zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		fr: "La lumière de LANTURN surgit des profondeurs. On le surnomme \"étoile des profondeurs\"."
	},

	thirdParty: {
		cardmarket: 278207,
		tcgplayer: 86609
	}
}

export default card
