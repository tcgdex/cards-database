import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "気まぐれ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [268],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "出現します",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度、気まぐれがあなたのアクティブなポカモンである場合、コインをひっくり返すことができます。頭の場合は、デッキを検索して、気まぐれから進化するカードを探して、それを気まぐれにします。 （これは進化する気まぐれとしてカウントされます。）その後、デッキをシャッフルします。 Cascookが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "取り組む",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
