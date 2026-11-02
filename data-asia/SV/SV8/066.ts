import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "トリトドン",
		'zh-tw': "海兔獸",
		'zh-cn': "海兔獸",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "浅い 磯辺に 現れる。 獲物を 捕らえると 粘液で ゆっくりと 溶かし すするのだ。",
		'zh-tw': "能在水淺的岩岸發現牠。 會用黏液慢慢溶解 並吸食捕捉到的獵物。",
		'zh-cn': "能在水淺的岩岸發現牠。 會用黏液慢慢溶解 並吸食捕捉到的獵物。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ねんちゃくしばり",
				'zh-tw': "黏著束縛",
				'zh-cn': "黏著束縛",
			},
			effect: {
				ja: "このポケモンがベンチにいるかぎり、おたがいのベンチの2進化ポケモンの特性は、すべてなくなる。",
				'zh-tw': "只要這隻寶可夢在備戰區，雙方的備戰區的【2階進化】寶可夢的特性全部消除。",
				'zh-cn': "只要這隻寶可夢在備戰區，雙方的備戰區的【2階進化】寶可夢的特性全部消除。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "マッドショット",
				'zh-tw': "泥巴射擊",
				'zh-cn': "泥巴射擊",
			},
			damage: 80,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793500,
				tcgplayer: 587646,
			},
		},
	],

	evolveFrom: {
		ja: "カラナクシ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [423],
};

export default card;
