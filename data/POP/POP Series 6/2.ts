import { Card } from '../../../interfaces'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
		de: "Lucario"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [448],

	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
		de: "Riolu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Feint",
				fr: "Ruse",
				de: "Offenlegung"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				de: "Der Schaden dieses Angriffs wird durch die Resistenz des Verteidigenden Pokémon nicht verändert."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Aura Sphere",
				fr: "Aurasphère",
				de: "Aurasphäre"
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],
	description: {
		en: "It has the ability to sense the auras of all things. It understands human speech.",
		de: "Es besitzt die Fähigkeit, die Aura aller Dinge zu spüren. Es versteht die menschliche Sprache."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86874,
				cardmarket: 277887
			},
		},
	],

}

export default card
