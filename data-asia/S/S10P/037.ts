import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "トリトドン",
		'zh-tw': "海兔獸",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "エサを 求めて 陸にも 上がる。 トリトドンが 這った跡には ネバネバの 粘液が 残る。",
		'zh-tw': "為了覓食也會登上陸地。海兔獸經過的地方 會留下黏糊糊的黏液。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "じこさいせい",
				'zh-tw': "自我再生",
			},
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。このポケモンのHPを、すべて回復する。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。將這隻寶可夢的HP全部恢復。",
			},
		},
		{
			name: {
				ja: "じしん",
				'zh-tw': "地震",
			},
			damage: 170,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "自分のベンチポケモン全員にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "自己的所有備戰寶可夢也各受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651096,
				tcgplayer: 569880,
			},
		},
	],

	evolveFrom: {
		ja: "カラナクシ",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [423],
};

export default card;
