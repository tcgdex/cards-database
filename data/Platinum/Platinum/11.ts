import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Manectric",
		fr: "Élecsprint",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
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
			},
			effect: {
				en: "Prevent all damage done to your Benched Pokémon (excluding any Manectric) by attacks.",
				fr: "Prévenez tous les dégâts infligés par des attaques à vos Pokémon de Banc (Elecsprint exclus).",
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
			},
			effect: {
				en: "This attack does 30 damage to each Pokémon that has any Poké-Powers (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chaque Pokémon possédant des Poké-Powers (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
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
			},
			effect: {
				en: "Search your deck for a Lightning Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Énergie Lightning et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
