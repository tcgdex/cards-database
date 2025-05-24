import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>操陷蛛",
		'zh-cn': "<火箭隊的>操陷蛛",
		ja: "ロケット団のワナイダー"
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "用絲線吸附在樹枝或天花板上 無聲無息地移動。會在自己 被察覺到之前將獵物打倒。",
		'zh-cn': "用絲線吸附在樹枝或天花板上 無聲無息地移動。會在自己 被察覺到之前將獵物打倒。",
		ja: "木の枝や 天井に 糸で 張りつき 音もなく 行動する。 獲物に 気づかれる前に 倒す。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "充能",
			'zh-cn': "充能",
			ja: "チャージアップ"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次。從自己的棄牌區選擇1張基本能量卡，附於這隻寶可夢身上。",
			'zh-cn': "在自己的回合時可使用1次。從自己的棄牌區選擇1張基本能量卡，附於這隻寶可夢身上。",
			ja: "自分の番に1回使える。自分のトラッシュから基本エネルギーを1枚選び、このポケモンにつける。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "火箭猛攻",
			'zh-cn': "火箭猛攻",
			ja: "ロケットラッシュ"
		},

		effect: {
			'zh-tw': "造成自己的場上「火箭隊的寶可夢」的數量×30點傷害。",
			'zh-cn': "造成自己的場上「火箭隊的寶可夢」的數量×30點傷害。",
			ja: "自分の場の「ロケット団のポケモン」の数×30ダメージ。"
		},

		damage: "30×",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [918]
}

export default card