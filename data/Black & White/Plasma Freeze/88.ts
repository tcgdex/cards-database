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
		de: "Rattfratz"
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
				de: "Trödeltransfer"
			},
			effect: {
				en: "Put a Team Plasma Pokémon, a Team Plasma Trainer card, and a Team Plasma Energy card from your discard pile into your hand.",
				fr: "Ajoutez un Pokémon de la Team Plasma, une carte Dresseur de la Team Plasma et une carte Énergie de la Team Plasma de votre pile de défausse à votre main.",
				de: "Nimm 1 Team Plasma-Pokémon, 1 Team Plasma-Trainerkarte und 1 Team Plasma-Energiekarte von deinem Ablagestapel auf deine Hand."
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
				de: "Biss"
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

	description: {
		en: "With its long fangs, this surprisingly violent Pokémon can gnaw away even thick concrete with ease.",
		de: "Ein überraschend brutales Pokémon. Seine langen Nagezähne sind äußerst stark und durchbrechen selbst Beton."
	},

	thirdParty: {
		cardmarket: 280966,
		tcgplayer: 88608
	}
}

export default card
