import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ウオチルドンV",
		'zh-tw': "鰓魚海獸V",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "げんしれいとう",
				'zh-tw': "終極衝擊",
			},
			damage: 80,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けた「ポケモンV・GX」は、ワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			},
		},
		{
			name: { ja: "ギガインパクト" },
			damage: 220,
			cost: ["Water", "Water", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560766,
				tcgplayer: 569245,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [881],
};

export default card;
