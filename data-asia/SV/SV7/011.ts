import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "裹蜜蟲",
		'zh-cn': "裹蜜蟲",
		ja: "カミッチュ"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "由露出了頭部的外頭蟲與 露出了尾巴的裡頭蟲相扶相持， 一起在蘋果裡面生活。",
		'zh-cn': "由露出了頭部的外頭蟲與 露出了尾巴的裡頭蟲相扶相持， 一起在蘋果裡面生活。",
		ja: "頭を 出している そとッチュと 尻尾を 出している なかッチュが 助け合い りんごのなかで 暮らす。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "塗層攻擊",
			'zh-cn': "塗層攻擊",
			ja: "コーティングアタック"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到【基礎】寶可夢招式的傷害。",
			'zh-cn': "在下個對手的回合，這隻寶可夢不會受到【基礎】寶可夢招式的傷害。",
			ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [1011]
}

export default card