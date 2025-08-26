import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "軽いピロスワイン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [221],
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "ふわふわしたウール",
			},
			effect: {
				ja: "相手のターン中、ライトピロスワインがアクティブなポクモンであり、相手の攻撃によって損傷を受けている場合（たとえノックアウトされていても）、コインをひっくり返します。頭の場合、攻撃するポクモンは今眠っています。ライトピロスワインがすでに眠っている、混乱している、または相手が攻撃したときに麻痺している場合、このパワーは機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ノックオーバー",
			},
			effect: {
				ja: "プレイ中にスタジアムカードがある場合は、捨てることができます。",
			},
			damage: 30,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
