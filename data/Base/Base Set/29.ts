import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum",
		de: "Alpollo",
		it: "Haunter"
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
		it: "Gastly"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hypnosis",
				fr: "Hypnose",
				de: "Hypnose",
				it: "Ipnosi"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das verteidigende Pokémon schläft jetzt.",
				it: "Il Pokémon Difensore è Addormentato."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Dream Eater",
				fr: "Dévorêve",
				de: "Traumfresser",
				it: "Mangiasogni"
			},
			effect: {
				en: "You can't this attack unless the Defending Pokémon is Asleep.",
				fr: "Vous ne pouvez utiliser cette attaque que si le Pokémon Défenseur est Endormi.",
				de: "Du kannst diesen Angriff nur einsetzen, wenn das verteidigende Pokémon schlafend ist.",
				it: "Puoi usare questo attacco solo se il Pokémon Difensore è Addormentato."
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
		fr: "Il peut se glisser à travers les murs comme une créature d'une autre dimension.",
		it: "Per la sua abilità di passare attraverso i muri, si dice che venga da un'altra dimensione."
	},

	thirdParty: {
		cardmarket: 273724,
		tcgplayer: 42370
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/047.ts"
		}
	]
}

export default card
