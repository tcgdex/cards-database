import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "Porygon2",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [233],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "エネルギーコンバーター",
			},
			effect: {
				ja: "ターン中に（攻撃の前）</em> </em>、ポケモンの1つに1つの基本エネルギーカードを選択し、エネルギータイプを選択できます。そのエネルギーカードをターンの終わりまでそのタイプとして扱います。 Porygon2が眠ったり、混乱したり、麻痺している場合、このパワーは使用できません。 Porygon2が眠り、混乱、または麻痺した場合、エネルギーカードは元のタイプに戻ります。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "デルタビーム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、防御するポケモンが眠っているか、混乱したり、麻痺したりするかどうかを選択します。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
