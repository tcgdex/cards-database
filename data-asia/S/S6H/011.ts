import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ポワルン たいようのすがた",
		'zh-tw': "飄浮泡泡 太陽的樣子",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "暑い 日差しを 浴びていると この姿に 変わる。 火照った 身体を 触ると パサパサするぞ。",
		'zh-tw': "暴露在烈日下就會變成這個樣子。如果去摸牠熱烘烘的身體，會感覺到乾巴巴的。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "てんきよみ" },
			effect: {
				ja: "自分のトラッシュに「スタジアム」が8枚以上あるなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "こうきあつブラスト",
				'zh-tw': "踩",
			},
			damage: 150,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "場に出ている「スタジアム」をトラッシュする。トラッシュできないなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560427,
				tcgplayer: 569143,
			},
		},
	],

	retreat: 0,
	regulationMark: "E",
	rarity: "Common",
	dexId: [351],
};

export default card;
