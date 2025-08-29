import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークシゾール",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [212],
	hp: 70,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "脅かす",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、相手の手を見てください。彼または彼女がそこにトレーナーカードを持っている場合は、それらの1つを選択してください。あなたの対戦相手はそのカードを彼または彼女のデッキにシャッフルします。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "スラッシュ",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
