import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Medicham",
		fr: "Charmina",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		308,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Meditite",
		fr: "Méditikka",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Offensive Ω",
			},
			effect: {
				fr: "Ce Pokémon peut attaquer deux fois par tour. (Si la première attaque met K.O. le Pokémon Actif de votre adversaire, vous pouvez encore attaquer après que votre adversaire a choisi un nouveau Pokémon Actif.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Calm Mind",
				fr: "Plénitude",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Yoga Kick",
				fr: "Yoga Kick",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
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

	retreat: 1,



}

export default card
