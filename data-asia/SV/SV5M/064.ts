import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒーローマント",
		'zh-tw': "英雄斗篷",
		th: "ผ้าคลุมฮีโร่",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンの最大HPは「＋100」される。",
		'zh-tw': "附有這張卡的寶可夢的最大HP「+100」。",
		th: "HP สูงสุดของโปเกมอนที่ติดการ์ดนี้อยู่จะถูก [+100]",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752948,
				tcgplayer: 566215,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "ACE SPEC Rare",
};

export default card;
