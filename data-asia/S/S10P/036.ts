import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "レジロック",
		'zh-tw': "雷吉洛克",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "体の あらゆる 部分が 岩で できている。 体が 削れても 自分で 岩を つけて 治す。",
		'zh-tw': "全身所有部分都是由岩石構成。即使身體有磨損， 也能自己補上岩石修復。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "レジゲート",
				'zh-tw': "雷吉之門",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ギガインパクト",
				'zh-tw': "終極衝擊",
			},
			damage: 140,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651095,
				tcgplayer: 569879,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [377],
};

export default card;
