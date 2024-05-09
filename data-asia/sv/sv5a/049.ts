import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "カミッチュ"
	},

	illustrator: "OKACHEKE",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1011],
	hp: 80,
	types: ["Dragon"],

	description: {
		ja: "頭を 出している そとッチュと 尻尾を 出している なかッチュが 助け合い りんごのなかで 暮らす。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Fire"],

		name: {
			ja: "みつあめキャッチャー"
		},

		effect: {
			ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに70ダメージ。"
		}
	}],

	retreat: 2
}

export default card