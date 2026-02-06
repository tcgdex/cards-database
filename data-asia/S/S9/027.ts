import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "帝王拿波",
		ja: "エンペルト"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		'zh-tw': "從鳥嘴延伸出的３隻角是實力的象徵。 領袖的角是最大的。",
		ja: "クチバシから 伸びている ３本の ツノは 強さの 象徴。 リーダーが 一番 大きい。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "緊急浮上",
			ja: "きんきゅうふじょう"
		},

		effect: {
			'zh-tw': "在自己的回合，若這張卡在棄牌區，自己1張手牌都沒有，則可使用1次。將這張卡放置於備戰區。然後，從自己的牌庫抽出3張卡。",
			ja: "自分の番に、このカードがトラッシュにあり、自分の手札が1枚もないなら、1回使える。このカードをベンチに出す。その後、自分の山札を3枚引く。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "水箭",
			ja: "ウォーターアロー"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到60點傷害。[在備戰區不計算弱點・抵抗力。]",
			ja: "相手のポケモン1匹に、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [395],

	thirdParty: {
		cardmarket: 605878
	}
}

export default card