import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル マタドガス",
		'zh-tw': "伽勒爾 雙彈瓦斯",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "工場が 建ち並び 空気が 汚れていた むかし。 なぜか この姿に 変化した。",
		'zh-tw': "在往昔工廠林立、空氣嚴重污染的時代，雙彈瓦斯不知道為什麼變成了這個樣子。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "エナジーファクトリー",
				'zh-tw': "能量工廠",
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分の場の、名前に「マタドガス」とつくポケモンについている基本[悪]エネルギーは、それぞれ[悪]エネルギー2個ぶんとしてはたらく。この効果は、この特性を持つポケモンが何匹いても、重ならない。",
				'zh-tw': "只要這隻寶可夢在場上，自己的場上的，名稱中有「雙彈瓦斯」的寶可夢身上附加的基本【惡】能量，各視為提供2個【惡】能量。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ガスでつつむ",
				'zh-tw': "瓦斯包圍",
			},
			damage: 50,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560823,
				tcgplayer: 569274,
			},
		},
	],

	evolveFrom: {
		ja: "ドガース",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [110],
};

export default card;
