import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超甲狂犀",
		ja: "ドサイドン"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 190,
	types: ["Fighting"],

	description: {
		'zh-tw': "會在手掌的洞裡塞進岩石和石丸子發射出去，每隻手裡 可以裝填３個。",
		ja: "手の 穴に 岩や ダンゴロを 詰めて 発射。 装填できる 数は 片腕に つき ３つ。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "土石砲",
			ja: "どせきほう"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方1張卡丟棄，若那張卡為能量卡，則增加100點傷害。然後，將丟棄的能量卡附於這隻寶可夢身上。",
			ja: "自分の山札を上から1枚トラッシュし、そのカードがエネルギーなら、100ダメージ追加。その後、トラッシュしたエネルギーをこのポケモンにつける。"
		},

		damage: "50＋",
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "巨岩衝撞",
			ja: "がんせきタックル"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			ja: "このポケモンにも30ダメージ。"
		},

		damage: 180,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [464],

	thirdParty: {
		cardmarket: 609807
	}
}

export default card