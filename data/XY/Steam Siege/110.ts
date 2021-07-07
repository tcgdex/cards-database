import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Magearna EX",
		fr: "Magearna-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		801,
	],
	hp: 160,
	types: [
		"Metal",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mystic Heart",
				fr: "Cœur Mystique",
			},
			effect: {
				en: "Prevent all effects of your opponent’s attacks, except damage, done to each of your Pokémon that has any Metal Energy attached to it. (Existing effects are not removed.)",
				fr: "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à chacun de vos Pokémon auquel de l’Énergie Metal est attachée. (Les effets déjà en action ne sont pas retirés.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Soul Blaster",
				fr: "Déflagr’Âme",
			},
			effect: {
				en: "During your next turn, this Pokémon’s Soul Blaster attack’s base damage is 60.",
				fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Déflagr’Âme de ce Pokémon sont de 60.",
			},
			damage: 120,

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
	retreat: 1,



}

export default card
