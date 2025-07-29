import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Manectric",
		fr: "Élecsprint",
		de: "Voltenso"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		310,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Electrike",
		fr: "Dynavolt",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Electric Barrier",
				fr: "Barrière électrique",
				de: "Electric Barrier"
			},
			effect: {
				en: "Prevent all damage done to your Benched Pokémon (excluding any Manectric) by attacks.",
				fr: "Prévenez tous les dégâts infligés par des attaques à vos Pokémon de Banc (Elecsprint exclus).",
				de: "Prevent all damage done to your Benched Pokémon (excluding any Manectric) by attacks."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Power Wave",
				fr: "Vague puissante",
				de: "Power Wave"
			},
			effect: {
				en: "This attack does 30 damage to each Pokémon that has any Poké-Powers (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chaque Pokémon possédant des Poké-Powers (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "This attack does 30 damage to each Pokémon that has any Poké-Powers (both yours and your opponent's). (Don't aply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Attract Current",
				fr: "Courant électrique",
				de: "Attract Current"
			},
			effect: {
				en: "Search your deck for a Lightning Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Énergie Lightning et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
				de: "Search your deck for a  Energy card and attach it to your Pokémon. Shuffe your deck afterward."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 278432
	}
}

export default card
