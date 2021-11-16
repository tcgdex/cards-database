import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Misdreavus",
		fr: "Feuforêve"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		200,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Pain Split",
				fr: "Balance"
			},
			effect: {
				en: "Put 1 damage counter on the Defending Pokémon for each damage counter on Misdreavus.",
				fr: "Placez un marqueur de dégâts sur le Pokémon Défenseur pour chaque marqueur de dégâts sur Feuforêve."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus."
			},
			damage: 10,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il adore mordre et tirer les cheveux des gens par surprise, rien que pour voir leur expression horrifiée."
	}
}

export default card
