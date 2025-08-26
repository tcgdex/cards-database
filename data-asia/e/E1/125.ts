import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "Clefable -125/128",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [36],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "月光",
			},
			effect: {
				ja: "順番<em>（攻撃の前）</em> </em>、手からカードをデッキに戻すことができます。そうした場合は、デッキを検索して、基本的なエネルギーカードを検索し、対戦相手に見せて、手に入れてください。その後、デッキをシャッフルします。 Clefableが特別な状態の影響を受ける場合、この電力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "doubleslap",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
