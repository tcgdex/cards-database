import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Diancie-EX",
		fr: "Diancie-EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		719,
	],
	hp: 150,
	types: [
		"Fairy",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sparkle Veil",
				fr: "Voile Étincelant",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, tous les dégâts infligés à vos Pokémon par une attaque de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wonder Stage",
				fr: "Scène Miracle",
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 50 more damage.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
