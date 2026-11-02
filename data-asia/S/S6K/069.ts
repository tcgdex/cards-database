import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "スパイラルエネルギー",
		'zh-tw': "螺旋能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは「れんげき」のポケモンにしかつけられず、「れんげき」のポケモン以外についているなら、トラッシュする。このカードは、ポケモンについているかぎり、すべてのタイプのエネルギー1個ぶんとしてはたらき、このカードをつけているポケモンはマヒにならず、受けているマヒは、すべて回復する。",
		'zh-tw': "這張卡只可附於「連擊」寶可夢身上，若附於「連擊」寶可夢以外的寶可夢身上，則將其丟棄。這張卡只要附於寶可夢身上，視為提供1個所有屬性的能量，附有這張卡的寶可夢不會【麻痺】，受到的【麻痺】會恢復。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560857,
				tcgplayer: 569297,
			},
		},
	],

	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
