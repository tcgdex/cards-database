import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ルチャブル",
		'zh-tw': "摔角鷹人"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [701],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "群れを 作らず 静かに 暮らす。 集団で 騒ぐ オコリザルは 天敵で いつも 争いになる。",
		'zh-tw': "不集結成群，過著靜靜的生活。 天敵是喜歡集體大鬧的火爆猴， 時不時就會起爭執。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "サイドカウンター",
			'zh-tw': "獎賞反擊"
		},

		damage: "50+",

		effect: {
			ja: "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、90ダメージ追加。",
			'zh-tw': "若自己剩餘獎賞卡的張數，比對手剩餘獎賞卡的張數多，則增加90點傷害。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card