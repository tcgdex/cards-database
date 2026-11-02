import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ニドクイン",
	},

	illustrator: "Aliya Chen",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "攻めるよりも 守るほうが 得意。 鎧のような ウロコで いかなる 攻撃からも 子どもを 守る。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ははのいざない" },
			effect: {
				ja: "自分の番に1回使える。コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ギガインパクト" },
			damage: 150,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 899946,
				tcgplayer: 709196,
			},
		},
	],

	evolveFrom: {
		ja: "ニドリーナ",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Rare",
	dexId: [31],
};

export default card;
