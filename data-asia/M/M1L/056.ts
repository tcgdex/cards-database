import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "デカグース",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "獲物の 痕跡を 見つけると 日が 落ちるまで その場に 留まり 忍耐強く 張り込み続ける。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "しょうこあつめ"}, "effect": {"ja": "自分の番に1回使える。自分の手札を1枚選び、山札の上のカードと入れ替える。"}}],

	attacks: [{"name": {"ja": "かみつく"}, "damage": 50, "cost": ["Colorless", "Colorless"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ヤングース",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [735],

	thirdParty: {
		cardmarket: 840351,
		tcgplayer: 647165,
	},
};

export default card;