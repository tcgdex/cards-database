import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蛋蛋",
		'zh-cn': "蛋蛋",
		ja: "タマタマ"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],

	description: {
		'zh-tw': "會發出只有蛋蛋才能收到的 心靈感應，因此不論何時 都能６隻聚集在一起。",
		'zh-cn': "會發出只有蛋蛋才能收到的 心靈感應，因此不論何時 都能６隻聚集在一起。",
		ja: "タマタマだけに 伝わる テレパシーを 出し合っているので どんなときでも ６匹 集まれる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "早熟進化",
			'zh-cn': "早熟進化",
			ja: "そうじゅくしんか"
		},

		effect: {
			'zh-tw': "這個招式可在先攻玩家的最初回合使用。從自己的牌庫選擇1張從這隻寶可夢進化而來的卡，放置於這隻寶可夢身上完成進化。並且重洗牌庫。",
			'zh-cn': "這個招式可在先攻玩家的最初回合使用。從自己的牌庫選擇1張從這隻寶可夢進化而來的卡，放置於這隻寶可夢身上完成進化。並且重洗牌庫。",
			ja: "このワザは、先攻プレイヤーの最初の番でも使える。このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [102],

	thirdParty: {
		cardmarket: 787561
	}
}

export default card