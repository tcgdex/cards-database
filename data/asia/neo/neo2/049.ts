import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "Eevee",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [133],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "エネルギーの進化",
			},
			effect: {
				ja: "Eeveeにエネルギーカードを取り付けるときはいつでも、コインをひっくり返します。頭の場合は、Eeveeに接続したエネルギーカードと同じタイプのEeveeから進化するカードをデッキに検索してください。そのカードをEeveeに添付します。これは進化するEeveeとしてカウントされます。その後、デッキをシャッフルします。 Eeveeが眠ったり、混乱したり、麻痺したりしている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "スマッシュキック",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
