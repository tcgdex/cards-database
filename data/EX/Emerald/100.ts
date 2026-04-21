import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Registeel ex",
		fr: "Registeel ex",
		de: "Registeel ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		379,
	],

	hp: 90,

	types: [
		"Metal",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Block Signal",
				fr: "Signal lumineux",
				de: "Block Signal"
			},
			effect: {
				en: "If Regice ex is in play, flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Si Regice ex est en jeu, lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "If Regice ex is in play, flip a coin. If heads the Defending Pokémon is now Confused."
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Wide Laser",
				fr: "Laser de grande envergure",
				de: "Wide Laser"
			},
			effect: {
				en: "Does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 88680,
		cardmarket: 276611
	},

	variants: [
		{
			type: "holo",
		},
	]
}

export default card
