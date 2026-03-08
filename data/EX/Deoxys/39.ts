import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Masquerain",
		fr: "Maskadra",
		de: "Maskeregen"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		284,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Intimidating Pattern",
				fr: "Style intimidant",
				de: "Intimididating Pattern"
			},
			effect: {
				en: "As long as Masquerain is your Active Pokémon, any damage done by an opponent's attack is reduced by 20 (before applying Weakness and Resistance). You can't use more than 1 Intimidating Pattern Poké-Body each turn.",
				fr: "Tant que Maskadra est votre Pokémon Actif, les dégâts infligés par une attaque de votre adversaire sont réduits de 20 (avant application de la Faiblesse et de la Résistance). Vous ne pouvez pas utiliser plus d'1 Poké-Body Style intimidant par tour.",
				de: "As long as Masquerain is your Active Pokémon, any damage dony by opponent's attack is reduced by 20 (before applying Weakness and resistance). You can't use more than 1 Intimidating Pattern Poke-Body each turn."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Stun Spore",
				fr: "Para-spore",
				de: "Stun Spore"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 0,

	thirdParty: {
		tcgplayer: 87246,
		cardmarket: 276442
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
