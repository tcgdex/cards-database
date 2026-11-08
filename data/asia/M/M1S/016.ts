import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カイオーガ"
	},
	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	description: {
		'ja-jp': "大雨を降らせる能力で海を広げたと言われている。海溝の底で眠っていた。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			'ja-jp': "ぎゃくりゅう"
		},
		damage: "20×",
		effect: {
			'ja-jp': "自分のトラッシュにある「基本水エネルギー」をすべて相手に見せ、その枚数×20ダメージ。その後、見せたエネルギーを山札に戻して切る。"
		},
		cost: ["Water"]
	}, {
		name: {
			'ja-jp': "うずまくなみ"
		},
		damage: 130,
		effect: {
			'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。"
		},
		cost: ["Water", "Water", "Colorless"]
	}],
	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 840566,
				tcgplayer: 647241,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [382]
}

export default card
