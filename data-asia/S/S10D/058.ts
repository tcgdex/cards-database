import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヨクバリス",
		'zh-tw': "藏飽栗鼠"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [820],
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		ja: "ホシガリス"
	},

	description: {
		ja: "しっぽに 木の実を 溜めこむ。 溜めこみすぎて ポロポロ こぼすが 鈍いので 気がつかない。",
		'zh-tw': "在尾巴裡囤積樹果。雖然囤過頭了就會掉出來， 但遲鈍的牠不會發現。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "もってくる",
			'zh-tw': "呼喚"
		},

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "ぶちまける",
			'zh-tw': "傾瀉"
		},

		effect: {
			ja: "自分の手札をすべてトラッシュし、トラッシュした枚数が5枚以上なら、150ダメージ追加。",
			'zh-tw': "將自己的手牌全部丟棄，若丟棄的張數為5張以上，則增加150點傷害。"
		},

		damage: "60+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651026,
				tcgplayer: 569813,
				cardtrader: 234194,
			},
		},
	]
}

export default card