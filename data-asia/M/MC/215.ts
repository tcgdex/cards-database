import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "イルカマン",
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "身体能力は ナミイルカと 変わらないが 仲間の ピンチには 変身して パワーアップするぞ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "マイティチェンジ" },
			effect: {
				ja: "自分の番に、このポケモンがバトル場からベンチにもどったとき、1回使える。自分の山札から「イルカマンex」を1枚選び、このカードと入れ替える（ついているカード・ダメカン・特殊状態・効果などは、すべて引きつぐ）。入れ替えたなら、このカードは山札にもどす。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スプラッシュ" },
			damage: 30,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863511,
			},
		},
	],

	evolveFrom: {
		ja: "ナミイルカ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [964],
};

export default card;
