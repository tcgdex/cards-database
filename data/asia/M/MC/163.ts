import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "フリーザー",
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "氷を 自在に 操る 力を もつ。 永久凍土の 雪山に 棲んでいるという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つめたいはばたき" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「基本[W]エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "アイスブラスト" },
			damage: 110,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863459,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [144],
};

export default card;
