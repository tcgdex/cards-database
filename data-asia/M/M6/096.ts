import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ファイアローex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エキサイトダイブ" },
			effect: {
				ja: "自分の番に、このカードが手札にあり、自分の場に[C]タイプの「メガシンカex」がいるなら、1回使える。このカードをベンチに出す。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かぎづめハント" },
			damage: 150,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900129,
				tcgplayer: 709249,
			},
		},
	],

	evolveFrom: {
		ja: "ヒノヤコマ",
	},

	retreat: 0,
	regulationMark: "J",
	rarity: "Mega Hyper Rare",
	dexId: [663],

	suffix: "EX",
};

export default card;
