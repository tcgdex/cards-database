import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ポワルン ゆきぐものすがた",
		'zh-tw': "飄浮泡泡 雪雲的樣子",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "霰に 打たれると この 姿に 変化する。 全身 冷たく 皮膚は 少し 凍っているぞ。",
		'zh-tw': "被冰雹打到時就會變成這個樣子。全身上下冷冰冰的，皮膚有一點結冰。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "てんきよみ",
				'zh-tw': "能量工廠",
			},
			effect: {
				ja: "自分のトラッシュに「スタジアム」が8枚以上あるなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。",
				'zh-tw': "只要這隻寶可夢在場上，自己的場上的，名稱中有「雙彈瓦斯」的寶可夢身上附加的基本【惡】能量，各視為提供2個【惡】能量。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "フロストタイフーン",
				'zh-tw': "瓦斯包圍",
			},
			damage: 120,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「フロストタイフーン」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560435,
				tcgplayer: 569151,
			},
		},
	],

	retreat: 0,
	regulationMark: "E",
	rarity: "Common",
	dexId: [351],
};

export default card;
