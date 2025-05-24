import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Haunter",
		pt: "Haunter",
		fr: "Spectrum",
		de: "Alpollo"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gastly",
		pt: "Gastly",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hypnosis",
				pt: "Hipnose",
				fr: "Hypnose",
				de: "Hypnose"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				pt: "O Pokémon Defensor agora está Dormindo.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Dream Eater",
				pt: "Dream Eater",
				fr: "Dévorêve",
				de: "Traumfresser"
			},
			effect: {
				en: "You can't this attack unless the Defending Pokémon is Asleep.",
				pt: "You can't this attack unless the Defending Pokémon is Asleep.",
				fr: "Vous ne pouvez utiliser cette attaque que si le Pokémon Défenseur est Endormi.",
				de: "Du kannst diesen Angriff nur einsetzen, wenn das verteidigende Pokémon schlafend ist."
			},
			damage: 50,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il peut se glisser à travers les murs comme une créature d'une autre dimension."
	}
}

export default card
