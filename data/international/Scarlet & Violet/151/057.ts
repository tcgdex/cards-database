import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [57],
	set: Set,

	name: {
		'fr-fr': "Colossinge",
		'en-us': "Primeape",
		'es-es': "Primeape",
		'it-it': "Primeape",
		'pt-br': "Primeape",
		'de-de': "Rasaff"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Férosinge",
		'en-us': "Mankey",
		'es-es': "Mankey",
		'it-it': "Mankey",
		'pt-br': "Mankey",
		'de-de': "Menki"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Fulmination",
			'en-us': "Rant and Rave",
			'es-es': "Despotricar",
			'it-it': "Sbraita e Strepita",
			'pt-br': "Armar um Barraco",
			'de-de': "Toben und rasen"
		},

		effect: {
			'fr-fr': "Ce Pokémon est maintenant Confus.",
			'en-us': "This Pokémon is now Confused.",
			'es-es': "Este Pokémon pasa a estar Confundido.",
			'it-it': "Questo Pokémon viene confuso.",
			'pt-br': "Este Pokémon agora está Confuso.",
			'de-de': "Dieses Pokémon ist jetzt verwirrt."
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Destruction Furieuse",
			'en-us': "Raging Smash",
			'es-es': "Golpe Rabioso",
			'it-it': "Colpo Infuriato",
			'pt-br': "Pancada Furiosa",
			'de-de': "Wütender Schlag"
		},

		effect: {
			'fr-fr': "Si ce Pokémon n'est pas Confus, cette attaque ne fait rien.",
			'en-us': "If this Pokémon isn't Confused, this attack does nothing.",
			'es-es': "Si este Pokémon no está Confundido, este ataque no hace nada.",
			'it-it': "Se questo Pokémon non è confuso, questo attacco non ha effetto.",
			'pt-br': "Se este Pokémon não estiver Confuso, este ataque não fará nada.",
			'de-de': "Wenn dieses Pokémon nicht verwirrt ist, hat diese Attacke keine Auswirkungen."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It becomes wildly furious if it even senses someone looking at it. It chases anyone that meets its glare.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733652,
				tcgplayer: 516246,
				cardtrader: 261208
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733652,
				tcgplayer: 516246,
				cardtrader: 261208
			}
		},
	],

	illustrator: "Mina Nakai",

	
}

export default card
