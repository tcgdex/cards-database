import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [263],
	set: Set,

	name: {
		'fr-fr': "Zigzaton",
		'en-us': "Zigzagoon",
		'es-es': "Zigzagoon",
		'it-it': "Zigzagoon",
		'pt-br': "Zigzagoon",
		'de-de': "Zigzachs"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Culbute Surprise",
			'en-us': "Headbutt Bounce",
			'es-es': "Bote Cabezazo",
			'it-it': "Rimbalzo Bottintesta",
			'pt-br': "Cabeçada Ricochete",
			'de-de': "Abrupter Kopfstoß"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Tranch'Griffe",
			'en-us': "Claw Slash",
			'es-es': "Cuchillada Garra",
			'it-it': "Lacerartiglio",
			'pt-br': "Golpe de Garra",
			'de-de': "Klauenschlitzer"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "A Pokémon with abundant curiosity. It shows an interest in everything, so it always zigzags.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725247,
				tcgplayer: 509690,
				cardtrader: 256063
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725247,
				tcgplayer: 509690,
				cardtrader: 256063
			}
		},
	],

	illustrator: "Kagemaru Himeno",

	
}

export default card
