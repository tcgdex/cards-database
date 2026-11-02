import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "れんげきの巻物 天の巻",
		'zh-tw': "連擊的卷軸 天之卷",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている「れんげき」のポケモンは、このカードに書かれているワザを使える。［ワザを使うためのエネルギーは必要。］",
		'zh-tw': "附有這張卡的「連擊」寶可夢，可使用這張卡上寫的招式。[需要有足夠使用招式的能量。]雷●　飯綱墜擊　10+增加對手的戰鬥寶可夢身上附加的能量的數量×50點傷害。",
	},

	attacks: [
		{
			name: { ja: "いづなおとし" },
			damage: "10+",
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×50ダメージ追加。",
			},
		},
	],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560851,
				tcgplayer: 569291,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
