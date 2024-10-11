import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "モモワロウ"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1025],
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "モモ型の 殻は 猛毒の 貯蔵庫。 毒の 餅を 作り 人や ポケモンに ふるまう。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "もうどくしはい"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手のどくのポケモンは、どくでのせるダメカンの数が5個多くなる。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "ポイズンチェーン"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、にげられない。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card