import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "エルフーン",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 70,
	types: ["Fairy"],

	description: {
		ja: "民家に 忍び込み 大切な ものを 隠したり 部屋中に 綿を まき散らす 厄介者だ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "すきまのポケット" },
			cost: ["Fairy"],
			effect: {
				ja: "分の手札を1枚、ロストゾーンに置く。その後、自分の山札を3枚引く。",
			},
		},
		{
			name: { ja: "ロストマーチ" },
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "分のロストゾーンにあるポケモン（♢（プリズムスター）をのぞく）の枚数×20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544126,
			},
		},
	],

	evolveFrom: {
		ja: "モンメン",
	},

	retreat: 0,
	regulationMark: "C",
	rarity: "None",
	dexId: [547],
};

export default card;
