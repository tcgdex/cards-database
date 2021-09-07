import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		197,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Moonlight Fang",
				fr: "Croc lunaire",
			},
			effect: {
				en: "During your opponent’s next turn, prevent all effects, including damage, done to Umbreon by attacks from your opponent’s Pokémon that has any Poké-Powers or Poké-Bodies.",
				fr: "Pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques (y compris les dégâts) infligés à Noctali par un Pokémon de votre adversaire possédant des Poké-Powers ou des Poké-Bodies.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Quick Blow",
				fr: "Coup d'poing éclair",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
