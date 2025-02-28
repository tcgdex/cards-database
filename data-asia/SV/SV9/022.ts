import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ハスブレロ",
		'zh-tw': "蓮帽小童",
		'zh-cn': "蓮帽小童"
	},

	illustrator: "Mousho",
	rarity: "Common",
	category: "Pokemon",
	dexId: [271],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "キタカミの 古い 伝承には いたずら好きの 子供が ポケモンに 生まれ変わったと 記されている。",
		'zh-tw': "北上的古老傳說記載著 牠是喜歡惡作劇的小孩 轉生而來的寶可夢。",
		'zh-cn': "北上的古老傳說記載著 牠是喜歡惡作劇的小孩 轉生而來的寶可夢。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "アクアスラッシュ",
			'zh-tw': "水流斬",
			'zh-cn': "水流斬"
		},

		damage: 70,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card