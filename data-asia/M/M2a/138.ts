import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨルノズク",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "非常に 柔らかい 羽は 飛ぶとき 音を 出さないので こっそり 獲物に 近づける。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "ほうせきさがし"}, "effect": {"ja": "自分の番に、このカードを手札から出して進化させたとき、自分の場に「テラスタル」のポケモンがいるなら、1回使える。自分の山札からトレーナーズを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"}}],

	attacks: [{"name": {"ja": "スピードウイング"}, "cost": ["Colorless", "Colorless"], "damage": 60}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ホーホー",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [164],
};

export default card;
