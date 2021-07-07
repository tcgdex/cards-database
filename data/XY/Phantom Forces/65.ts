import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Aegislash EX",
		fr: "Exagide-EX",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		681,
	],
	hp: 170,
	types: [
		"Metal",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mighty Shield",
				fr: "Bouclier Sublime",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from each of your opponent’s Pokémon that has Special Energy attached to it.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques de chacun des Pokémon de votre adversaire auquel de l'Énergie spéciale est attachée.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash Blast",
				fr: "Rafale d'Entailles",
			},
			effect: {
				en: "This attack does 20 more damage for each Metal Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Metal attachée à ce Pokémon.",
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
