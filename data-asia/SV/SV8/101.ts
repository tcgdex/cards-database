import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "ワザマシン フローライト",
		'zh-tw': "招式學習器 螢石",
		'zh-cn': "招式學習器 螢石",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、このカードに書かれているワザを使える。［ワザを使うためのエネルギーは必要。］ ポケモンについているこのカードは、自分の番の終わりにトラッシュする。",
		'zh-tw': "附有這張卡的寶可夢，可使用這張卡上寫的招式。[需要有足夠使用招式的能量。]將附於寶可夢身上的這張卡，在自己的回合結束時丟棄。",
		'zh-cn': "附有這張卡的寶可夢，可使用這張卡上寫的招式。[需要有足夠使用招式的能量。]將附於寶可夢身上的這張卡，在自己的回合結束時丟棄。",
	},

	attacks: [
		{
			name: { ja: "フローライト" },
			cost: ["Grass", "Water", "Psychic"],
			effect: {
				ja: "このポケモンについているエネルギーをすべてトラッシュし、自分の「テラスタル」のポケモン全員のHPを、すべて回復する。",
			},
		},
	],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793535,
				tcgplayer: 587681,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
