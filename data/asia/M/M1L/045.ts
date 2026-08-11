import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ハガネール",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 200,
	types: ["Metal"],

	description: {
		ja: "土と 一緒に 飲みこんだ  鉄分が 溜まっていって 体が  変化したとも 考えられる。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ウェルカムテール"}, "damage": "40+", "cost": ["Colorless", "Colorless"], "effect": {"ja": "自分のサイドの残り枚数が6枚なら、200ダメージ追加。"}}, {"name": {"ja": "ロケットずつき"}, "damage": 140, "cost": ["Metal", "Metal", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "イワーク",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [208],

	thirdParty: {
		cardmarket: 840340,
		tcgplayer: 647154,
	},
};

export default card;