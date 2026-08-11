import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤレユータン",
		'zh-tw': "智揮猩",
		'zh-cn': "智揮猩",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "森の奥で 静かに 暮らす。 マントのような 紫の 毛は 歳を 重ねるほどに 長くなる。",
		'zh-tw': "在森林深處過著安靜的生活。 如同斗蓬般的紫色體毛 會隨著年齡而越變越長。",
		'zh-cn': "在森林深處過著安靜的生活。 如同斗蓬般的紫色體毛 會隨著年齡而越變越長。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "よわみをにぎる",
				'zh-tw': "掌握弱點",
				'zh-cn': "掌握弱點",
			},
			cost: ["Colorless"],
			effect: {
				ja: "次の自分の番の終わりまで、このワザを受けたポケモンの弱点は[C]タイプになる。［弱点は「×2」でダメージ計算をする。］",
				'zh-tw': "在下個自己的回合結束前，受到這個招式的寶可夢弱點改爲【無】屬性。[弱點以「×2」計算傷害。]",
				'zh-cn': "在下個自己的回合結束前，受到這個招式的寶可夢弱點改爲【無】屬性。[弱點以「×2」計算傷害。]",
			},
		},
		{
			name: {
				ja: "ひらてうち",
				'zh-tw': "掌擊",
				'zh-cn': "掌擊",
			},
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793524,
				tcgplayer: 587670,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [765],
};

export default card;
