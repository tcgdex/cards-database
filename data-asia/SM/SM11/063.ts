import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "エルフーン",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 80,
	types: ["Fairy"],

	description: {
		ja: "民家に 忍び込み 大切な ものを 隠したり 部屋中に 綿を まき散らす 厄介者だ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "でたとこサーチ" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札にある好きなカードを1枚、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かぜおこし" },
			damage: 40,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557025,
			},
		},
	],

	evolveFrom: {
		ja: "モンメン",
	},

	retreat: 0,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [547],
};

export default card;
