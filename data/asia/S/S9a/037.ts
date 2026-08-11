import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "獨角犀牛",
		'ja-jp': "サイホーン"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'zh-tw': "頭腦很差但力氣很大，只要撞擊就能把 高樓大廈撞得粉粹。",
		'ja-jp': "頭は 悪いが 力が 強く 高層ビルも 体当たりで コナゴナに 粉砕する。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "猛撞",
			'ja-jp': "とっしん"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			'ja-jp': "このポケモンにも20ダメージ。"
		},

		damage: 70,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 609805,
				tcgplayer: 570607,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 577624,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [111],
}

export default card