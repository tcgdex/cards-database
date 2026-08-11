import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "アルセウス&ディアルガ&パルキアGX",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アルティメットレイ" },
			damage: 150,
			cost: ["Water", "Metal", "Colorless"],
			effect: {
				ja: "自分の山札にある基本エネルギーを3枚まで、自分のポケモンに好きなようにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "オルタージェネシスGX" },
			cost: ["Metal"],
			effect: {
				ja: "この対戦が終わるまで、自分のポケモン全員が使うワザの、相手のバトルポケモンへのダメージはすべて「+30」される。追加で[水]エネルギーが1個ついているなら、そのワザのダメージで相手のバトルポケモンをきぜつさせた場合、サイドを1枚多くとる。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555053,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [493, 483, 484],

	suffix: "TAG TEAM-GX",
};

export default card;
