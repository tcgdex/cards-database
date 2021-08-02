import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		604,
	],
	hp: 140,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Eelektrik",
		fr: "Lampéroie",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Energy Connect",
				fr: "Connexion d'Énergie",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a basic Energy attached to 1 of your Benched Pokémon to your Active Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie de base attachée à l'un de vos Pokémon de Banc vers votre Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electricannon",
				fr: "Canon Électrique",
			},
			effect: {
				en: "You may discard all Lightning Energy attached to this Pokémon. If you do, this attack does 50 more damage.",
				fr: "Vous pouvez défausser toutes les Énergies Lightning attachées à ce Pokémon. Dans ce cas, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: "80+",

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
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
