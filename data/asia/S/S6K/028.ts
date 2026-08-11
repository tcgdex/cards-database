import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤミラミ",
		'zh-tw': "勾魂眼",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "宝石の 結晶を 食べる。 暗闇の 中では 両目が 宝石の 輝きを 放つ。",
		'zh-tw': "會去吃寶石的結晶。雙眼在漆黑一片的地方會發出寶石的光芒。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "とりにいく",
				'zh-tw': "前往拿取",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からトレーナーズを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張訓練家卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "おいつめる",
				'zh-tw': "窮追不捨",
			},
			damage: 40,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560795,
				tcgplayer: 569256,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [302],
};

export default card;
