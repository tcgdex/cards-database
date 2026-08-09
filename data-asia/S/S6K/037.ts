import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "こくばバドレックスVMAX",
		'zh-tw': "黑馬蕾冠王VMAX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Psychic"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: { ja: "めいかいのとびら" },
			effect: {
				ja: "自分の番に1回使える。自分の手札から[超]エネルギーを1枚選び、自分のベンチの[超]ポケモンにつける。その後、自分の山札を2枚引く。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ダイガイスト",
				'zh-tw': "極巨之魂",
			},
			damage: "10+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについている[超]エネルギーの数×30ダメージ追加。",
				'zh-tw': "增加自己的場上寶可夢身上附加的【超】能量的數量×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560808,
				tcgplayer: 569265,
			},
		},
	],

	evolveFrom: {
		ja: "こくばバドレックスV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [898],
};

export default card;
