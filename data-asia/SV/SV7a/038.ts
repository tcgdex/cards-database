import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "賽富豪",
		'zh-cn': "賽富豪",
		ja: "サーフゴー"
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "堆疊硬幣而形成的身體 結實堅固。會連續發射 硬幣來壓制敵人。",
		'zh-cn': "堆疊硬幣而形成的身體 結實堅固。會連續發射 硬幣來壓制敵人。",
		ja: "コインが 積みあがって 作られた 体は 頑丈。 コインを 連射して 敵を 圧倒する。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "富裕強襲",
			'zh-cn': "富裕強襲",
			ja: "リッチストライク"
		},

		effect: {
			'zh-tw': "在這個回合，若這隻寶可夢從「索財靈」進化，則增加90點傷害。",
			'zh-cn': "在這個回合，若這隻寶可夢從「索財靈」進化，則增加90點傷害。",
			ja: "この番、このポケモンが「コレクレー」から進化していたなら、90ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "賽富迴旋",
			'zh-cn': "賽富迴旋",
			ja: "サーフリターン"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。",
			'zh-cn': "若希望，將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。",
			ja: "のぞむなら、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [1000]
}

export default card