import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のミュウツーex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 280,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "パワーセーバー" },
			effect: {
				ja: "自分の場の「ロケット団のポケモン」が4匹以上のときにしか、このポケモンはワザが使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "イレイザーボール" },
			damage: "160+",
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "のぞむなら、自分のベンチポケモンについているエネルギーを2枚までトラッシュし、その枚数×60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863592,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [150],

	suffix: "EX",
};

export default card;
