import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [843],
	set: Set,

	name: {
		'en-us': "Silicobra",
		'fr-fr': "Dunaja",
		'es-es': "Silicobra",
		'it-it': "Silicobra",
		'pt-br': "Silicobra",
		'de-de': "Salanga"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Mud-Slap",
			'fr-fr': "Coud'Boue",
			'es-es': "Bofetón Lodo",
			'it-it': "Fangosberla",
			'pt-br': "Tapa de Lama",
			'de-de': "Lehmschelle"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "Kouki Saitou",

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	description: {
		'en-us': "Silicobra's neck pouch, which can inflate and deflate like a balloon, gets more elastic each time Silicobra sheds its skin.",
	},

	thirdParty: {
        cardmarket: 702415,
        tcgplayer: 488008
    }
}

export default card