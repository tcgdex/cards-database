import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ザマゼンタ",
		'zh-tw': "藏瑪然特",
		'zh-cn': "藏瑪然特",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "いかなる 攻撃も 弾き返す 姿は 格闘王の盾 と 呼ばれ 恐れ 崇められた。",
		'zh-tw': "能夠反彈一切的攻擊， 因此被稱為格鬥王之盾， 受到人們的畏懼與尊崇。",
		'zh-cn': "能夠反彈一切的攻擊， 因此被稱為格鬥王之盾， 受到人們的畏懼與尊崇。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ストロングバッシュ",
				'zh-tw': "強大猛擊",
				'zh-cn': "強大猛擊",
			},
			damage: 70,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、受けたダメージぶんのダメカンを、ワザを使ったポケモンにのせる。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害時，將與受到的傷害相同數值的傷害指示物，放置於使用招式的寶可夢身上。",
				'zh-cn': "在下個對手的回合，這隻寶可夢受到招式的傷害時，將與受到的傷害相同數值的傷害指示物，放置於使用招式的寶可夢身上。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821907,
				tcgplayer: 628716,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [889],
};

export default card;
