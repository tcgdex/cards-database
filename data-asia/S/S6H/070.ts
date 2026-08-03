import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "インパクトエネルギー",
		'zh-tw': "衝擊能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは「いちげき」のポケモンにしかつけられず、「いちげき」のポケモン以外についているなら、トラッシュする。このカードは、ポケモンについているかぎり、すべてのタイプのエネルギー1個ぶんとしてはたらき、このカードをつけているポケモンはどくにならず、受けているどくは、すべて回復する。",
		'zh-tw': "這張卡只可附於「一擊」寶可夢身上，若附於「一擊」寶可夢以外的寶可夢身上，則將其丟棄。這張卡只要附於寶可夢身上，視為提供1個所有屬性的能量，附有這張卡的寶可夢不會【中毒】，受到的【中毒】會恢復。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560492,
				tcgplayer: 569202,
			},
		},
	],

	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
