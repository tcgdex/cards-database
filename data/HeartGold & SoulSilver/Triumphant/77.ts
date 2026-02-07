import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Spoink",
		fr: "Spoink",
		de: "Spoink"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		325,
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
				en: "Sleep Pearl",
				fr: "Perle dodo",
				de: "Schlafperle"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep. Switch Spoink with 1 of your Benched Pokémon.",
				fr: "Le Pokémon Défenseur est maintenant Endormi. Échangez Spoink avec l’un de vos Pokémon de Banc.",
				de: "Das Verteidigende Pokémon schläft jetzt. Tausche Spoink gegen 1 Pokémon auf deiner Bank aus."
			},

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
		en: "It bounces around on its tail to keep its heart pumping. It carries a pearl from Clamperl on its head."
	},

	variants: [
		{ type: 'normal', size: 'standard' },
		{ type: 'reverse', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 279607,
		tcgplayer: 89478
	}
}

export default card
