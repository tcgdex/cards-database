import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "アップリュー",
		'zh-tw': "蘋裹龍",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "すっぱい りんごを 食べて 進化。 火傷する ほど 強酸性の 液体を 頬袋に 溜める。",
		'zh-tw': "啃果蟲吃了酸蘋果後進化而成。頰囊裡儲存著足以造成灼傷的強酸性液體。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "アップルドロップ",
				'zh-tw': "蘋果墜擊",
			},
			effect: {
				ja: "自分の番に1回使える。相手のポケモン1匹に、ダメカンを2個のせる。その後、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
				'zh-tw': "在自己的回合時，可使用1次。在對手的1隻寶可夢身上放置2個傷害指示物。然後，將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "アシッドボム",
				'zh-tw': "酸液炸彈",
			},
			damage: 60,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586528,
				tcgplayer: 571266,
			},
		},
	],

	evolveFrom: {
		ja: "カジッチュ",
	},

	retreat: 1,
	regulationMark: "D",
	rarity: "None",
	dexId: [841],
};

export default card;
