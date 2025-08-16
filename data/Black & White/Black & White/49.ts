import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Musharna",
		fr: "Mushana",
		es: "Musharna",
		it: "Musharna",
		pt: "Musharna",
		de: "Somnivora"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		518,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Munna",
		fr: "Munna",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hypnotic Ray",
				fr: "Onde Hypnotique",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Dream Eater",
				fr: "Dévorêve",
			},
			effect: {
				en: "If the Defending Pokémon is not Asleep, this attack does nothing.",
				fr: "Si le Pokémon Défenseur n’est pas Endormi, cette attaque ne fait rien.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 279787,
		tcgplayer: 87659
	}
}

export default card
