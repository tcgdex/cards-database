import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "モモワロウex",
		'zh-tw': "桃歹郎ex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しはいのくさり" },
			effect: {
				ja: "自分の番に1回使える。自分のベンチの[D]ポケモン（「モモワロウex」をのぞく）を1匹選び、バトルポケモンと入れ替える。その後、新しいバトルポケモンをどくにする。この番、すでに別の「しはいのくさり」を使っていたなら、この特性は使えない。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "イライラバースト",
				'zh-tw': "‌‌[特性]支配鎖鏈",
			},
			damage: "60×",
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "相手がすでにとったサイドの枚数×60ダメージ。",
				'zh-tw': "在自己的回合時可使用1次。選擇1隻自己的備戰區的【惡】寶可夢（「桃歹郎ex」除外），與戰鬥寶可夢互換。然後，將新的戰鬥寶可夢【中毒】。在這個回合，若已經使出了其他的「支配鎖鏈」，則這個特性無法使用。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773788,
				tcgplayer: 566290,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [1025],

	suffix: "EX",
};

export default card;
