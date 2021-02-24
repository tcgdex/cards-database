import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Bronzong",
		fr: "Archéodong",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		437,
	],
	hp: 130,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Heatproof",
				fr: "Ignifugé",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent's Fire Pokémon.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon Fire de votre adversaire.",
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
				en: "Shady Stamp",
				fr: "Coup Louche",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 70,

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
