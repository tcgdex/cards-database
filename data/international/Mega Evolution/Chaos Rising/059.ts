import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "They communicate with one another by using magnetic pulses. In a swarm, they move in perfect unison.",
	},


	name: {
		'en-us': "Beldum",
		'fr-fr': "Terhal",
		'es-es': "Beldum",
		'es-mx': "Beldum",
		'de-de': "Tanhel",
		'it-it': "Beldum",
		'pt-br': "Beldum"
	},

	illustrator: "toi8",
	rarity: "Common",
	category: "Pokemon",
	dexId: [374],
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'es-mx': "Golpe Cabeza",
			'de-de': "Kopfnuss",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada"
		},

		cost: ["Metal"],
		damage: 10
	}, {
		name: {
			'en-us': "Beam",
			'fr-fr': "Rayon",
			'es-es': "Transmisión",
			'es-mx': "Rayo",
			'de-de': "Strahl",
			'it-it': "Raggio",
			'pt-br': "Feixe"
		},

		cost: ["Metal", "Colorless"],
		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886451,
				tcgplayer: 693455
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886451,
				tcgplayer: 693455
			}
		},
	],
}

export default card
