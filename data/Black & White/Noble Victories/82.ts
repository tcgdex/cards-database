import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Bisharp",
		fr: "Scalproie",
		es: "Bisharp",
		it: "Bisharp",
		pt: "Bisharp",
		de: "Caesurio"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		625,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
		de: "Gladiantri"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Stream",
				fr: "Courant d'Énergie",
				de: "Energiestrom"
			},
			effect: {
				en: "Attach a Metal Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie Metal de votre pile de défausse à ce Pokémon.",
				de: "Lege 1 {M}-Energiekarte von deinem Ablagestapel an dieses Pokémon an."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Scissors",
				fr: "Ciseaux d'Acier",
				de: "Metallscheren"
			},
			effect: {
				en: "Does 20 more damage for each Metal Energy attached to this Pokémon.",
				fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie Metal attachée à ce Pokémon.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte {M}-Energie zu."
			},
			damage: 40,

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

	retreat: 2,

	description: {
		en: "It leads a group of Pawniard. It battles to become the boss, but will be driven from the group if it loses.",
		de: "Anführer einer Schar von Gladiantri. Verliert es den Kampf um den Titel des Anführers, wird es ausgestoßen."
	},

	thirdParty: {
		cardmarket: 280199,
		tcgplayer: 83843
	}
}

export default card
