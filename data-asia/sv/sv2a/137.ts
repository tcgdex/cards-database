import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ポリゴン",
		'zh-tw': "多邊獸"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	dexId: [137],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "近年は 電脳空間で 大活躍。 怪しい データが ないか チェックして まわっている。",
		'zh-tw': "近年在電腦空間大展身手。會四處巡邏查看 有沒有可疑的資料。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "テクスチャー4",
			'zh-tw': "紋理4"
		},

		effect: {
			ja: "の中からタイプを1つ選ぶ。このワザを受けたポケモンの弱点は、選んだタイプになる。この効果は、このワザを受けたポケモンがバトル場をはなれるまで続く。［弱点は「×2」でダメージ計算をする。］",
			'zh-tw': "從【草】【火】【水】【雷】【超】【鬥】【惡】【鋼】【龍】中選擇1個屬性。受到這個招式的寶可夢弱點改為所選的屬性。這個效果在受到這個招式的寶可夢離開戰鬥場前一直持續。［弱點以「×2」計算傷害。］"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card