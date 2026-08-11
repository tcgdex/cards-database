import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルーグV",
		'zh-tw': "泥偶巨人V",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "メガトンパンチ",
				'zh-tw': "百萬噸重拳",
			},
			damage: 80,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
		{
			name: {
				ja: "リワインドビーム",
				'zh-tw': "倒轉光束",
			},
			damage: 180,
			cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手の進化しているバトルポケモンから、「進化カード」を1枚はがして退化させる。はがしたカードは、相手の手札にもどす。",
				'zh-tw': "從對手的進化的戰鬥寶可夢身上，移除1張「進化卡」使其退化。將移除的卡放回對手的手牌。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 571597,
				tcgplayer: 569338,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [623],
};

export default card;
