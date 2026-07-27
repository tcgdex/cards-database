import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "アズマオウ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "ツノは ドリルのように 回転して 硬い 岩も グングン くり貫く。 オスの方が 鮮やかな 色合い。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "エキサイトホーン" },
			damage: "30×",
			cost: ["Water"],
			effect: {
				ja: "コインを2回投げ、オモテの数x30ダメージ。このポケモンに「ポケモンのどうぐ」がついているなら、このワザで投げるコインの数は6回になる。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558197,
			},
		},
	],

	evolveFrom: {
		ja: "トサキント",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [119],
};

export default card;
