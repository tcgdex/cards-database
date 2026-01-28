import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "カイオーガ"
	},
	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	description: {
		ja: "大雨を降らせる能力で海を広げたと言われている。海溝の底で眠っていた。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "ぎゃくりゅう"
		},
		damage: "20×",
		effect: {
			ja: "自分のトラッシュにある「基本水エネルギー」をすべて相手に見せ、その枚数×20ダメージ。その後、見せたエネルギーを山札に戻して切る。"
		},
		cost: ["Water"]
	}, {
		name: {
			ja: "うずまくなみ"
		},
		damage: 130,
		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
		},
		cost: ["Water", "Water", "Colorless"]
	}],
	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	retreat: 3,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [382]
}

export default card
