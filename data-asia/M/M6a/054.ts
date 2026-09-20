import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウツー",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "ミュウの 遺伝子から つくられた ポケモン。 圧倒的 パワーと 狂暴な 心を もつ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちからをあたえる" },
			cost: ["Psychic"],
			effect: {
				ja: "自分のトラッシュから基本エネルギーを2枚まで選び、自分のポケモン1匹につける。",
			},
		},
		{
			name: { ja: "サイコドライブ" },
			damage: 120,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908232,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [150],
};

export default card;
