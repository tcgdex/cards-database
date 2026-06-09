import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "サーフゴー",
	},

	illustrator: "Yukihiro Tada",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "１０００枚の コインで 体が できているらしい。 人懐こく だれとでも すぐに 仲良くなれる。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "つかみほうだい"}, "cost": ["Colorless"], "effect": {"ja": "ウラが出るまでコインを投げ、オモテの数ぶんまで、自分の山札から好きなカードを選び、手札に加える。そして山札を切る。"}}, {"name": {"ja": "スピードアタック"}, "damage": 100, "cost": ["Metal", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "コレクレー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [1000],

	thirdParty: {
		cardmarket: 840346,
		tcgplayer: 647160,
	},
};

export default card;