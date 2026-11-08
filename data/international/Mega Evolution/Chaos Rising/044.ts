import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "It is far stronger than it appears. If a Phanpy is swinging its trunk around and your arm gets hit by it, your arm bone will shatter.",
	},


	name: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy",
		'es-es': "Phanpy",
		'es-mx': "Phanpy",
		'de-de': "Phanpy",
		'it-it': "Phanpy",
		'pt-br': "Phanpy"
	},

	illustrator: "Akino Fukuji",
	rarity: "Common",
	category: "Pokemon",
	dexId: [231],
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Mud-Slap",
			'fr-fr': "Coud'Boue",
			'es-es': "Bofetón Lodo",
			'es-mx': "Bofetón Lodo",
			'de-de': "Lehmschelle",
			'it-it': "Fangosberla",
			'pt-br': "Tapa de Lama"
		},

		cost: ["Fighting"],
		damage: 10
	}, {
		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'es-es': "Rodar",
			'es-mx': "Rodada",
			'de-de': "Walzer",
			'it-it': "Rotolamento",
			'pt-br': "Rolagem"
		},

		cost: ["Colorless", "Colorless", "Colorless"],
		damage: 40
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886436,
				tcgplayer: 693530
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886436,
				tcgplayer: 693530
			}
		},
	],
}

export default card
