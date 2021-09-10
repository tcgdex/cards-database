import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
		es: "Whimsicott",
		it: "Whimsicott",
		pt: "Whimsicott",
		de: "Elfun"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		547,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fluffy Tag",
				fr: "Accolade Duveteuse",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. During your next turn, the attacks of that Pokémon do 40 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc. Pendant votre prochain tour, les attaques du Pokémon échangé infligent 40 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Stun Spore",
				fr: "Para-Spore",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 20,

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
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
