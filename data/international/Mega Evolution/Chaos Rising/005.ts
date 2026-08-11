import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "The quills on its head are usually soft. When it flexes them, the points become so hard and sharp that they can pierce rock.",
	},

	name: {
		'en-us': "Chespin",
		'fr-fr': "Marisson",
		'es-es': "Chespin",
		'es-mx': "Chespin",
		'de-de': "Igamaro",
		'it-it': "Chespin",
		'pt-br': "Chespin"
	},

	illustrator: "HACCAN",
	rarity: "Common",
	category: "Pokemon",
	dexId: [650],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Beat",
			'fr-fr': "Bataille",
			'es-es': "Toque",
			'es-mx': "Golpeteo",
			'de-de': "Verprügler",
			'it-it': "Battuta",
			'pt-br': "Pulso"
		},

		cost: ["Grass"],
		damage: 10
	}, {
		name: {
			'en-us': "Spike Sting",
			'fr-fr': "Pic Piquant",
			'es-es': "Picotazo Púas",
			'es-mx': "Piquete de Púas",
			'de-de': "Stachelstich",
			'it-it': "Aculeopuntura",
			'pt-br': "Ferroada de Espinhos"
		},

		cost: ["Grass", "Grass"],
		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886397,
				tcgplayer: 693461
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886397,
				tcgplayer: 693461
			}
		},
	],
}

export default card
