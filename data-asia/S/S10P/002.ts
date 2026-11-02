import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ビリリダマ",
		'zh-tw': "洗翠 霹靂電球",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "モンスターボールと 空似せし 謎の ポケモン。 気 昂るほど 腹に 蓄えし電流を 解き放ち 大笑す。",
		'zh-tw': "形狀頗似精靈球的奇異寶可夢。 當情緒高漲時，積蓄在腹部的 電流就會放出，同時發出大笑。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ごきげんチャージ",
				'zh-tw': "精心充能",
			},
			cost: [],
			effect: {
				ja: "このワザは、後攻プレイヤーの最初の番にだけ使える。自分のベンチポケモンを2匹まで選び、山札から基本エネルギーを1枚ずつつける。そして山札を切る。",
				'zh-tw': "這個招式只可在後攻玩家的最初回合使用。選擇最多2隻自己的備戰寶可夢，從牌庫附給那些寶可夢各1張基本能量卡。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
			},
			damage: 10,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651061,
				tcgplayer: 569845,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [100],
};

export default card;
