import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団エネルギー",
		'zh-tw': "火箭隊能量",
		'zh-cn': "火箭隊能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは「ロケット団のポケモン」にしかつけられず、「ロケット団のポケモン」以外についているなら、トラッシュする。このカードは、ポケモンについているかぎり、[P][D]の2つのタイプのエネルギー2個ぶんとしてはたらく。",
		'zh-tw': "這張卡只可附於「火箭隊的寶可夢」身上，若附於「火箭隊的寶可夢」以外的寶可夢身上，則將其丟棄。 只要這張卡附於寶可夢身上，視為提供2個【超】【惡】2種屬性的能量。",
		'zh-cn': "這張卡只可附於「火箭隊的寶可夢」身上，若附於「火箭隊的寶可夢」以外的寶可夢身上，則將其丟棄。 只要這張卡附於寶可夢身上，視為提供2個【超】【惡】2種屬性的能量。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821930,
				tcgplayer: 628739,
			},
		},
	],

	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
