import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Toxicroak",
		fr: "Coatox"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		454,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Croagunk",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Poison Sacs",
				fr: "Sacs de poison"
			},
			effect: {
				en: "Your opponent can't remove the Special Condition Poisoned by evolving or devolving his or her Poisoned Pokémon. (This also includes putting a Pokémon Level-Up card onto the Poisoned Pokémon.)",
				fr: "Votre adversaire ne peut pas retirer l'État Spécial Empoisonné en faisant évoluer ou en désévoluant ses Pokémon Empoisonnés. (Placer une carte Pokémon Niveau Sup sur le Pokémon Empoisonné inclus.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Knuckle Claws",
				fr: "Griffes articulées"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	description: {
		fr: "Les griffes de ses poings sécrètent une toxine si atroce qu'une simple égratignure peut s'avérer fatale."
	}
}

export default card
