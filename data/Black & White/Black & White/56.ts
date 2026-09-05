import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Duosion",
		fr: "Méios",
		es: "Duosion",
		it: "Duosion",
		pt: "Duosion",
		de: "Mitodos"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		578,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Solosis",
		fr: "Nucléos",
		de: "Monozyto"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Recover",
				fr: "Soin",
				de: "Genesung"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon and heal all damage from this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon et soignez tous les dégâts de ce Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel und heile allen Schaden bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				de: "Walzer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "When their brains, now divided in two, are thinking the same thought, these Pokémon exhibit their maximum power.",
		de: "Kommen beide Hälften seines gespaltenen Denkapparates auf dieselbe Idee, entfesselt sich seine volle Kraft."
	},

	thirdParty: {
		cardmarket: 279794,
		tcgplayer: 85016
	}
}

export default card
