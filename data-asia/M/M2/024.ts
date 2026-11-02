import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "イノムー",
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "長い 体毛に 覆われていて 寒さに 強く 氷の キバは 雪が降ると さらに 太くなる。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "つきあげる"}, "damage": "30+", "cost": ["Colorless", "Colorless"], "effect": {"ja": "コインを1回投げオモテなら、30ダメージ追加。"}}, {"name": {"ja": "フロストスマッシュ"}, "damage": 70, "cost": ["Water", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ウリムー",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [221],

	thirdParty: {
		cardmarket: 850531,
		tcgplayer: 655803,
	},
};

export default card;