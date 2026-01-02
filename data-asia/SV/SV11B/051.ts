import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ドテッコツ",
	},

	illustrator: "Shinya Mizuno",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "鍛え上げられた 筋肉の 体は プロレスラーが 束に なって 攻撃しても びくとも しない。",
	},

	stage: "Stage1",

	attacks: [
		{ name: { ja: "けたぐり" }, damage: 30, cost: ["Fighting"] },
		{
			name: { ja: "アームハンマー" },
			damage: 60,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: { ja: "相手の山札を上から1枚トラッシュする。" },
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "ドッコラー",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [533],
};

export default card;
