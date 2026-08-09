import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "崩れたスタジアム",
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーがベンチに出せるポケモンの数は、4匹になる。［ベンチの数を変更する効果は、少ない数が優先される。］（このカードが場に出たとき、ベンチが5匹以上いるプレイヤーは、4匹になるまでトラッシュする。トラッシュするのは、このカードの持ち主から。）",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 668245,
				tcgplayer: 570058,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "F",
	rarity: "Mega Hyper Rare",
};

export default card;
