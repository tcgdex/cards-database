import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [950],
	set: Set,

	name: {
		'en-us': "Klawf",
		'fr-fr': "Craparoi",
		'es-es': "Klawf",
		'it-it': "Klawf",
		'pt-br': "Klawf",
		'de-de': "Klibbe"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Vise Grip",
			'fr-fr': "Force Poigne",
			'es-es': "Agarre",
			'it-it': "Presa",
			'pt-br': "Agarramento Compressor",
			'de-de': "Klammer"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'en-us': "Adrenaline Hammer",
			'fr-fr': "Marteau Adrénaline",
			'es-es': "Martillo Adrenalina",
			'it-it': "Martello Adrenalinico",
			'pt-br': "Martelo de Adrenalina",
			'de-de': "Adrenalinhammer"
		},

		effect: {
			'en-us': "This Pokémon is now Confused.",
			'fr-fr': "Ce Pokémon est maintenant Confus.",
			'es-es': "Este Pokémon pasa a estar Confundido.",
			'it-it': "Questo Pokémon viene confuso.",
			'pt-br': "Este Pokémon agora está Confuso.",
			'de-de': "Dieses Pokémon ist jetzt verwirrt."
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "G",
	illustrator: "nagimiso",

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	],

	description: {
		'en-us': "Klawf hangs upside-down from cliffs, waiting for prey. But Klawf can't remain in this position for long because its blood rushes to its head.",
	},

	thirdParty: {
        cardmarket: 702418,
        tcgplayer: 488011
    }
}

export default card