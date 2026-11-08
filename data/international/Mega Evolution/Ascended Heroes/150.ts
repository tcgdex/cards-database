import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
		'es-es': "Dratini",
		'es-mx': "Dratini",
		'de-de': "Dratini",
		'it-it': "Dratini",
		'pt-br': "Dratini"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [147],
	hp: 80,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Lightning"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'es-mx': "Golpe Cabeza",
			'de-de': "Kopfnuss",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "This Pokémon is full of life energy. It continually sheds its skin and grows steadily larger.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869761,
			tcgplayer: 675962
		}
	},
	{
		type: "holo",
		stamp: ["pokemon-center"],
		thirdParty: {
			cardmarket: 894128,
			tcgplayer: 704413
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870370,
			tcgplayer: 676969
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870369,
			tcgplayer: 677109
		}
	},
],
}

export default card
