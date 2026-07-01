import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "ハリボーグ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "仲間同士で 体を ぶつけ合い 足腰を 鍛える。 自分からは 戦わない 優しい 性格。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "リーフチャージ",
			},
			damage: 20,
			cost: ["Grass"],
			effect: {
				ja: "自分の山札から「基本エネルギー」を1枚選び、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: {
				ja: "つるのムチ",
			},
			damage: 80,
			cost: ["Grass", "Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],
	variants: [{ type: "normal" }],
	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [651],

	thirdParty: {
		cardmarket: 876904
	}
};

export default card;
