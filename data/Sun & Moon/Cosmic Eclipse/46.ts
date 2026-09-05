import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Wailord",
		fr: "Wailord",
		es: "Wailord",
		it: "Wailord",
		pt: "Wailord",
		de: "Wailord"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [278],

	dexId: [
		321,
	],

	hp: 200,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
		de: "Wailmer"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Impact",
				fr: "Gros Impact",
				es: "Impacto Pesado",
				it: "Impatto Pesante",
				pt: "Impacto Pesado",
				de: "Schwerer Einschlag"
			},

			damage: 90,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Splash",
				fr: "Hydro-Éclaboussure",
				es: "Hidroestallido",
				it: "Idrosplash",
				pt: "Hidroborrifada",
				de: "Hydroplatscher"
			},

			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		en: "They eat so many fish Pokémon that when Wailord become too numerous, fishermen have to chase them off.",
		de: "Sie verzehren Unmengen an Fisch-Pokémon, weshalb sie von Fischern vertrieben werden, wenn sie sich zu stark vermehren."
	},

	thirdParty: {
		cardmarket: 407879,
		tcgplayer: 201222
	}
}

export default card
