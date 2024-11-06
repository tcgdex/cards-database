import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ラウドボーン",
		'zh-tw': "骨紋巨聲鱷",
		'zh-cn': "骨紋巨聲鱷"
	},

	illustrator: "akagi",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [911],
	hp: 180,
	types: ["Fire"],

	description: {
		ja: "優しい 歌声は 聴いた者の 魂を 癒す。 ３０００度の 炎で 敵を 焼き尽くす。",
		'zh-tw': "溫柔的歌聲能療癒聽者的靈魂。 會使用３０００度的火焰 將敵人燒成灰燼。",
		'zh-cn': "溫柔的歌聲能療癒聽者的靈魂。 會使用３０００度的火焰 將敵人燒成灰燼。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "てんねん",
			'zh-tw': "純樸",
			'zh-cn': "純樸"
		},

		effect: {
			ja: "このポケモンは、相手のポケモンが使うワザの効果を受けない。",
			'zh-tw': "這隻寶可夢不會受到對手的寶可夢使用招式的效果的影響。",
			'zh-cn': "這隻寶可夢不會受到對手的寶可夢使用招式的效果的影響。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "フレアリサイタル",
			'zh-tw': "純樸",
			'zh-tw': "閃焰獨唱會",
			'zh-cn': "閃焰獨唱會"
		},

		damage: "60+",

		effect: {
			ja: "おたがいのベンチポケモンの数×20ダメージ追加。",
			'zh-tw': "這隻寶可夢不會受到對手的寶可夢使用招式的效果的影響。",
			'zh-tw': "增加雙方的備戰寶可夢的數量×20點傷害。",
			'zh-cn': "增加雙方的備戰寶可夢的數量×20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card