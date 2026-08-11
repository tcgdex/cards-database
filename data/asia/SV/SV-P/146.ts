import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ワザマシン エヴォリューション",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、このカードに書かれているワザを使える。［ワザを使うためのエネルギーは必要。］ポケモンについているこのカードは、自分の番の終わりにトラッシュする。[C] エヴォリューション 自分のベンチポケモンを2匹まで選び、そのポケモンから進化するカードを、自分の山札から1枚ずつ選び、それぞれにのせて進化させる。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 761020,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
