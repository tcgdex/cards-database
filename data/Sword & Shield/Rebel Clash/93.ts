import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Dragapult VMAX",
		fr: "Lanssorien VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 320,

	evolveFrom: {
		en: "Dragapult V",
		fr: "Lanssorien-V"
	},

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Shred",
				fr: "Déchiquetage"
			},
			effect: {
				en: "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire."
			},
			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Max Phantom",
				fr: "Fantômax"
			},
			effect: {
				en: "Put 5 damage counters on your opponent’s Benched Pokémon in any way you like.",
				fr: "Placez 5 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît."
			},
			damage: 130,

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
	types: ["Psychic"],
	regulationMark: "D"
}

export default card
