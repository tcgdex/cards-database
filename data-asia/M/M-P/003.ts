import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "マシマシラ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "安全な 場所から 強烈な めまいを 引き起こす 念力を 放って 敵を 翻弄する。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "アドレナブレイン" },
			effect: {
				ja: "このポケモンに[D]エネルギーがついているなら、自分の番に1回使える。自分の場のポケモン1匹にのっているダメカンを3個まで選び、相手の場のポケモン1匹にのせ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サイコトリップ" },
			damage: 60,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 839215,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [1015],
};

export default card;
