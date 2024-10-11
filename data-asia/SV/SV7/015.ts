import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆焰龜獸",
		'zh-cn': "爆焰龜獸",
		ja: "バクガメス"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "背上的甲殼上敷了炸藥。 會用大爆炸去回擊 來攻擊自己的敵人。",
		'zh-cn': "背上的甲殼上敷了炸藥。 會用大爆炸去回擊 來攻擊自己的敵人。",
		ja: "爆薬で コーティングされた 甲羅を 背負う。 攻撃してきた 敵を 大爆発で 返り討ち。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "火焰陣",
			'zh-cn': "火焰陣",
			ja: "フレイムサークル"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			'zh-cn': "將對手的戰鬥寶可夢【灼傷】。在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			ja: "相手のバトルポケモンをやけどにする。次の相手の番、このワザを受けたポケモンは、にげられない。"
		},

		damage: 50,
		cost: ["Fire", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "猛火猛撞",
			'zh-cn': "猛火猛撞",
			ja: "もうかのとっしん"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到60點傷害。",
			'zh-cn': "這隻寶可夢也受到60點傷害。",
			ja: "このポケモンにも60ダメージ。"
		},

		damage: 180,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [776]
}

export default card