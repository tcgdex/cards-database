import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "メガレックウザex",
	},

	illustrator: "Kozuki Minami",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はしゃのほうこう" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の山札を上から4枚見て、その中から基本エネルギーを1枚選び、このポケモンにつける。残りのカードはウラにして切り、山札の下にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ストームエメラルダ" },
			damage: "50×",
			cost: ["Fire", "Lightning", "Colorless"],
			effect: {
				ja: "自分のポケモン全員についている[R]と[L]エネルギーの数×50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900143,
				tcgplayer: 709264,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Mega Hyper Rare",
	dexId: [384],

	suffix: "EX",
};

export default card;
