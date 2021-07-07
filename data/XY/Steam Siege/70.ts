import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Bastiodon",
		fr: "Bastiodon",
	},
	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		411,
	],
	hp: 150,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Shieldon",
		fr: "Dinoclier",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Counter Head",
				fr: "Tête Riposte",
			},
			effect: {
				en: "During your opponent’s next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put damage counters on the Attacking Pokémon equal to the damage done to this Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d’une attaque (même si ce Pokémon est mis K.O.), placez des marqueurs de dégâts sur le Pokémon Attaquant équivalents au nombre de dégâts infligés à ce Pokémon.",
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fortress of Rage",
				fr: "Forteresse de Rage",
			},
			effect: {
				en: "This attack does 10 more damage for each of your Benched Pokémon that has any damage counters on it.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire ayant au moins 1 marqueur de dégâts.",
			},
			damage: "100+",

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
	retreat: 4,



}

export default card
