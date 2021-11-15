import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Ténéfix"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		302,
	],
	hp: 60,
	types: [
		"Darkness",
	],
	evolveFrom: {
		fr: "Ténéfix",
	},
	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Overeager",
				fr: "Enthousiaste",
			},
			effect: {
				en: "If Sableye is your Active Pokémon at the beginning of the game, you go first. (If each player's Active Pokémon has the Overeager Poké-Body, this power does nothing.)",
				fr: "Si Ténéfix est votre Pokémon Actif au début de la partie, vous commencez. (Si le Pokémon Actif de chaque joueur possède le Poké-Body Enthousiaste, ce pouvoir est sans effet.)",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Impersonate",
				fr: "Personnifier",
			},
			effect: {
				en: "Search your deck for a Supporter card and discard it. Shuffle your deck afterward. Then, use the effect of that card as the effect of this attack.",
				fr: "Choisissez dans votre deck une carte Supporter et défaussez-la. Ensuite, mélangez votre deck. Puis, utilisez l'effet de cette carte comme l'effet de cette attaque.",
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Overconfident",
				fr: "Plein de zèle",
			},
			effect: {
				en: "If the Defending Pokémon has fewer remaining HP than Sableye, this attack's base damage is 40.",
				fr: "Si le Pokémon Défenseur possède moins de PV que Ténéfix, les dégâts de base de cette attaque sont de 40.",
			},
			damage: 10,

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
