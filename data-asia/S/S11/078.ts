import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル マッギョ",
		'zh-tw': "伽勒爾 泥巴魚",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "鉄分 たっぷりの 泥の 中で 生息していたため 頑丈な 鋼の 体に 変化した。",
		'zh-tw': "棲息在富含鐵質的泥巴裡，因此獲得了 結實堅固的鋼鐵身軀。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "フィールドトラップ",
				'zh-tw': "場地陷阱",
			},
			damage: 20,
			cost: ["Metal"],
			effect: {
				ja: "場に出ている相手のスタジアムをトラッシュする。トラッシュした場合、相手のバトルポケモンについているエネルギーを2個選び、トラッシュする。",
				'zh-tw': "將場上的對手的競技場卡丟棄。有丟棄的情況下，選擇2個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			},
		},
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
			},
			damage: 50,
			cost: ["Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667953,
				tcgplayer: 570009,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [618],
};

export default card;
