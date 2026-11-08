import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [948],
	set: Set,

	name: {
		'fr-fr': "Terracool",
		'en-us': "Toedscool",
		'es-es': "Toedscool",
		'it-it': "Toedscool",
		'pt-br': "Toedscool",
		'de-de': "Tentagra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Coud'Pattes",
			'en-us': "Smash Kick",
			'es-es': "Patada Destrucción",
			'it-it': "Calcio Esplosivo",
			'pt-br': "Chute Poderoso",
			'de-de': "Schmetterkick"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Coud'Boue",
			'en-us': "Mud-Slap",
			'es-es': "Bofetón Lodo",
			'it-it': "Fangosberla",
			'pt-br': "Tapa de Lama",
			'de-de': "Lehmschelle"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Toedscool lives in muggy forests. The flaps that fall from its body are chewy and very delicious.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725198,
				tcgplayer: 509866,
				cardtrader: 255803
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725198,
				tcgplayer: 509866,
				cardtrader: 255803
			}
		},
	],

	illustrator: "Oswaldo KATO",

	
}

export default card
