import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "マシマシラex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ひょうしぬけ" },
			effect: {
				ja: "このポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、自分の場に「モモワロウex」がいるなら、とられるサイドは1枚少なくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ダーティヘッド" },
			damage: 190,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「ダーティヘッド」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773829,
				tcgplayer: 566331,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Ultra Rare",
	dexId: [1015],

	suffix: "EX",
};

export default card;
