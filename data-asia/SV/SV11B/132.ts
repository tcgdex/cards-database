import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ドテッコツ",
	},

	illustrator: "Souichirou Gunjima",
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
	resistances: [],

	variants: [{ type: "holo" }],

	evolveFrom: {
		ja: "ドッコラー",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [533],

	thirdParty: {
		cardmarket: 829378,
		tcgplayer: 636486,
	},
};

export default card;
