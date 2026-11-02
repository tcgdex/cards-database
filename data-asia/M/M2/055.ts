import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ワルビアル",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "強力な あごで 噛みつくと そのまま 思い切り 体を ひねり 獲物を 切断する。",
	},

	stage: "Stage2",

	attacks: [{"name": {"ja": "リベンジファング"}, "damage": "60+", "cost": ["Darkness"], "effect": {"ja": "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、160ダメージ追加。"}}, {"name": {"ja": "ぶちかます"}, "damage": 160, "cost": ["Darkness", "Colorless", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ワルビル",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [553],

	thirdParty: {
		cardmarket: 850562,
		tcgplayer: 655834,
	},
};

export default card;