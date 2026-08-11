import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [248],
	set: Set,

	name: {
		'en-us': "Tyranitar V",
		'fr-fr': "Tyranocif V",
		'es-es': "Tyranitar V",
		'it-it': "Tyranitar V",
		'pt-br': "Tyranitar V",
		'de-de': "Despotar V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'de-de': "Einhämmern",
			'es-es': "Martillear",
			'pt-br': "Martelada",
			'it-it': "Martello"
		},

		damage: 80
	}, {
		cost: ["Darkness", "Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Land Crush",
			'fr-fr': "Écras'Terre",
			'de-de': "Schollenbrecher",
			'es-es': "Aterrizaje",
			'pt-br': "Aperto de Terra",
			'it-it': "Schiacciaterra"
		},

		damage: 150
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582786,
				tcgplayer: 253372
			}
		},
	],
}

export default card
