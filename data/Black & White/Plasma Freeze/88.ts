import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Raticate",
		fr: "Rattatac",
		es: "Raticate",
		it: "Raticate",
		pt: "Raticate",
		de: "Rattikarl"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Transfer Junk",
				fr: "Transfert de Camelote",
			},
			effect: {
				en: "Put a Team Plasma Pokémon, a Team Plasma Trainer card, and a Team Plasma Energy card from your discard pile into your hand.",
				fr: "Ajoutez un Pokémon de la Team Plasma, une carte Dresseur de la Team Plasma et une carte Énergie de la Team Plasma de votre pile de défausse à votre main.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 280966,
		tcgplayer: 88608
	}
}

export default card
