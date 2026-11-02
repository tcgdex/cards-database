import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ルナトーン",
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "４０年前に 隕石の 落ちた  場所で 初めて 見つかった。  にらむ だけで 敵を 眠らせる。",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "ルナサイクル"}, "effect": {"ja": "自分の場に「ソルロック」がいて、自分の番に、自分の手札から「基本エネルギー」を1枚トラッシュするなら、1回使える。自分の山札を3枚引く。この特性は別の「ルナサイクル」を使った番は使えない。"}}],

	attacks: [{"name": {"ja": "パワージェム"}, "damage": 50, "cost": ["Fighting", "Fighting"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [337],

	thirdParty: {
		cardmarket: 840317,
		tcgplayer: 647135,
	},
};

export default card;