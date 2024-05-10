import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "カミッチュ",
		'zh-tw': "裹蜜蟲"
	},

	illustrator: "OKACHEKE",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1011],
	hp: 80,
	types: ["Dragon"],

	description: {
		ja: "頭を 出している そとッチュと 尻尾を 出している なかッチュが 助け合い りんごのなかで 暮らす。",
		'zh-tw': "由露出了頭部的外頭蟲與 露出了尾巴的裡頭蟲相扶相持， 一起在蘋果裡面生活。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Fire"],

		name: {
			ja: "みつあめキャッチャー",
			'zh-tw': "蜜糖捕捉器"
		},

		effect: {
			ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに70ダメージ。",
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到70點傷害。"
		}
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card