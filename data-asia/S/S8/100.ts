import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "フュージョンエネルギー",
		'zh-tw': "匯流能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは「フュージョン」のポケモンにしかつけられず、「フュージョン」のポケモン以外についているなら、トラッシュする。このカードは、ポケモンについているかぎり、すべてのタイプのエネルギー1個ぶんとしてはたらき、このカードをつけているポケモンは、相手のポケモンから特性の効果を受けない。",
		'zh-tw': "這張卡只可附於「匯流」寶可夢身上，若附於「匯流」寶可夢以外的寶可夢身上，則將其丟棄。 只要這張卡附於寶可夢身上，視為提供1個所有屬性的能量，附有這張卡的寶可夢，不會受到對手的寶可夢的特性效果影響。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575655,
				tcgplayer: 569601,
			},
		},
	],

	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
