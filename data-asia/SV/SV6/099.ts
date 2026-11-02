import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "お祭り会場",
		'zh-tw': "祭典會場",
		th: "สถานที่จัดเทศกาล",
	},

	illustrator: "MARINA Chikazawa",
	category: "Trainer",

	effect: {
		ja: "エネルギーがついているおたがいのポケモン全員は、特殊状態にならず、受けている特殊状態は、すべて回復する。",
		'zh-tw': "雙方的所有身上附有能量卡的寶可夢不會陷入特殊狀態，並將受到的特殊狀態全部恢復。",
		th: "โปเกมอนของทั้งสองฝ่ายทุกตัวที่มีพลังงานติดอยู่ จะไม่เป็นสภาวะผิดปกติ และจะหายจากสภาวะผิดปกติทั้งหมดที่ได้รับมา",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767192,
				tcgplayer: 568089,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
