import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "イエッサン",
		'zh-tw': "博士的研究（維羅博士）",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "頭の ツノで 相手の 気持ちを 感じとる。 オスは 従者の ように 主のそばで 世話を焼く。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "てだすけ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から基本エネルギーを1枚選び、ベンチポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "サイコキネシス" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525230,
				tcgplayer: 597310,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [876],
};

export default card;
