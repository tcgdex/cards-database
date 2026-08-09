import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "れんげきエネルギー",
		'zh-tw': "連擊能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは「れんげき」のポケモンにしかつけられず、「れんげき」のポケモン以外についているなら、トラッシュする。このカードは、ポケモンについているかぎり、[水][闘]の2つのタイプのエネルギー2個ぶんとしてはたらく。",
		'zh-tw': "這張卡只可附於「連擊」寶可夢身上，若附於「連擊」寶可夢以外的寶可夢身上，則將其丟棄。 只要這張卡附於寶可夢身上，視為提供2個【水】【鬥】2種屬性的能量。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586700,
				tcgplayer: 571436,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578462,
			},
		},
	],

	regulationMark: "E",
	rarity: "None",
};

export default card;
