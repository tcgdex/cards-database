import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Dragapult V",
		fr: "Lanssorien V"
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Bite",
				fr: "Morsure"
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Jet Assault",
				fr: "Assaut Propulsé"
			},
			effect: {
				en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 80 more damage.",
				fr: "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 80 dégâts supplémentaires."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 210,
	types: ["Psychic"],
	regulationMark: "D"
}

export default card
