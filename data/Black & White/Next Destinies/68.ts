import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Mienshao",
		fr: "Shaofouine",
		es: "Mienshao",
		it: "Mienshao",
		pt: "Mienshao",
		de: "Wie-Shu"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		620,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Mienfoo",
		fr: "Kungfouine",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Haul In",
				fr: "Mainmise",
			},
			effect: {
				en: "Search your deck for 2 Pokémon Tool cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez 2 cartes Outil Pokémon dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Meditate",
				fr: "Yoga",
			},
			effect: {
				en: "Does 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Défenseur.",
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

	thirdParty: {
		cardmarket: 280293,
		tcgplayer: 87441
	}
}

export default card
