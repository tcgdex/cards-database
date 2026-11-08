import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [315],
	set: Set,

	name: {
		'en-us': "Cynthia's Roselia",
		'fr-fr': "Rosélia de Cynthia",
		'de-de': "Cynthias Roselia",
		'it-it': "Roselia di Camilla",
		'es-es': "Roselia de Cintia",
		'pt-br': "Roselia da Cíntia",
		'es-mx': "Roselia de Cynthia"
	},

	illustrator: "nisimono",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Spike Sting",
			'fr-fr': "Pic Piquant",
			'de-de': "Stachelstich",
			'it-it': "Aculeopuntura",
			'es-es': "Picotazo Púas",
			'pt-br': "Ferroada de Espinhos",
			'es-mx': "Piquete de Púas"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825881,
				tcgplayer: 630803
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825881,
				tcgplayer: 630803
			}
		},
	],
}

export default card
