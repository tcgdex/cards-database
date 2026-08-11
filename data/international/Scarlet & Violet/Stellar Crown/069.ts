import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [956],
	set: Set,

	name: {
		'en-us': "Espathra",
		'fr-fr': "Cléopsytra",
		'es-es': "Espathra",
		'it-it': "Espathra",
		'pt-br': "Espathra",
		'de-de': "Psiopatra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Flittle",
		'fr-fr': "Flotillon",
		'es-es': "Flittle",
		'it-it': "Flittle",
		'pt-br': "Flittle",
		'de-de': "Flattutu"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Psychic Flash",
			'fr-fr': "Flash Psy",
			'es-es': "Destello Psíquico",
			'it-it': "Psicoflash",
			'pt-br': "Clarão Psíquico",
			'de-de': "Psycho-Blitz"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785923,
				tcgplayer: 567295
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785923,
				tcgplayer: 567295
			}
		},
	],

	illustrator: "Ryota Murayama",

}

export default card
