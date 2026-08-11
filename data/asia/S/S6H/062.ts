import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "いちげきの巻物 貫通の巻",
		'zh-tw': "一擊的卷軸 貫通之卷",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている「いちげき」のポケモンは、このカードに書かれているワザを使える。［ワザを使うためのエネルギーは必要。］",
		'zh-tw': "附有這張卡的「一擊」寶可夢，可使用這張卡上寫的招式。[需要有足夠使用招式的能量。]火●●　槍彈突破　120這個招式的傷害不計算弱點・抵抗力、對手的戰鬥寶可夢身上的附加效果。",
	},

	attacks: [
		{
			name: { ja: "だんがんとっぱ" },
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560478,
				tcgplayer: 569194,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
