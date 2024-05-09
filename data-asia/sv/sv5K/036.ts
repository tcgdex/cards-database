import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴルーグ"
	},

	illustrator: "Oku",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [623],
	hp: 160,
	types: ["Fighting"],

	description: {
		ja: "古代人の お城の 壁には ゴルーグが ビームを 撃つための 砲台の ような 台座が ある。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "てっぺき"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "とうしのこぶし"
		},

		damage: "120＋",

		effect: {
			ja: "相手のバトルポケモンが「ポケモンex・V」なら、120ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4
}

export default card