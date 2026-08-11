import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [163],
	set: Set,

	name: {
		'en-us': "Hoothoot",
		'fr-fr': "Hoothoot",
		'es-es': "Hoothoot",
		'pt-br': "Hoothoot",
		'it-it': "Hoothoot",
		'de-de': "Hoothoot"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Insomnia",
			'fr-fr': "Insomnia",
			'es-es': "Insomnio",
			'pt-br': "Insônia",
			'it-it': "Insonnia",
			'de-de': "Insomnia"
		},

		effect: {
			'en-us': "This Pokémon can't be Asleep.",
			'fr-fr': "Ce Pokémon ne peut pas être Endormi.",
			'es-es': "Este Pokémon no puede pasar a estar Dormido.",
			'pt-br': "Este Pokémon não pode ser Adormecido.",
			'it-it': "Questo Pokémon non può venire addormentato.",
			'de-de': "Dieses Pokémon kann nicht von Schlaf betroffen werden."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'pt-br': "Investida",
			'it-it': "Azione",
			'de-de': "Tackle"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Nakamura Ippan",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805467,
				tcgplayer: 610432
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805467,
				tcgplayer: 610432
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806516,
				tcgplayer: 610591
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806517,
				tcgplayer: 610692
			}
		},
	],
}

export default card
