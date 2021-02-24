import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Beheeyem",
		fr: "Neitram",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		606,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Elgyem",
		fr: "Lewsor",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Synchronoise",
				fr: "Synchropeine",
			},
			effect: {
				en: "Does 20 damage to each of your opponent's Benched Pokémon that shares a type with the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire ayant un type en commun avec le Pokémon Défenseur.  (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psyshot",
				fr: "Piqûre Psy",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
