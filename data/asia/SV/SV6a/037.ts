import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "マシマシラex",
		'zh-tw': "願增猿ex",
	},

	illustrator: "takuyoa",
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
			name: {
				ja: "ダーティヘッド",
				'zh-tw': "‌[特性]鬆口氣",
			},
			damage: 190,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「ダーティヘッド」が使えない。",
				'zh-tw': "這隻寶可夢受到對手的寶可夢招式的傷害而【昏厥】時，若自己的場上有「桃歹郎ex」，則被獲得的獎賞卡減少1張。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773786,
				tcgplayer: 566288,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [1015],

	suffix: "EX",
};

export default card;
