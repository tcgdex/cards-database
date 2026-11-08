import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [450],
	set: Set,

	name: {
		'en-us': "Hippowdon",
		'fr-fr': "Hippodocus",
		'es-es': "Hippowdon",
		'it-it': "Hippowdon",
		'pt-br': "Hippowdon",
		'de-de': "Hippoterus"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Hippopotas",
		'fr-fr': "Hippopotas",
		'es-es': "Hippopotas",
		'it-it': "Hippopotas",
		'pt-br': "Hippopotas",
		'de-de': "Hippopotas"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 80
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Sand Breath",
			'fr-fr': "Souffle Sableux",
			'es-es': "Bocanada de Arena",
			'it-it': "Sabbiaspiro",
			'pt-br': "Bafo de Areia",
			'de-de': "Sandhauch"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "Stones can get stuck in the ports on their bodies. Dwebble help dislodge such stones, so Hippowdon look after these Pokémon.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658688,
				tcgplayer: 272281
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658688,
				tcgplayer: 272281
			}
		},
	],
}

export default card
