import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ギルガルド",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		ja: "攻撃に 特化した 体勢。 鋼の 重さと 強度を 活かして 相手を 叩き割る。",
	},

	stage: "Stage2",

	attacks: [{"name": {"ja": "きりさく"}, "damage": 80, "cost": ["Colorless", "Colorless", "Colorless"]}, {"name": {"ja": "メタルスラッシュ"}, "damage": 230, "cost": ["Metal", "Colorless", "Colorless", "Colorless"], "effect": {"ja": "次の自分の番、このポケモンはワザが使えない。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ニダンギル",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [681],

	thirdParty: {
		cardmarket: 868007,
		tcgplayer: 674376,
	},
};

export default card;