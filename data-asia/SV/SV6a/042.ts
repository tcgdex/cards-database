import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "ダイオウドウ"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [879],
	hp: 200,
	types: ["Metal"],

	description: {
		ja: "プライドが 高く 気難しい。 鮮やかな 緑の 皮膚の ものが 仲間の 尊敬を 集める。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "どでかいからだ"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手は手札からスタジアムを出せない。"
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			ja: "ノーズラリアット"
		},

		damage: "130＋",

		effect: {
			ja: "のぞむなら、100ダメージ追加。その場合、次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 4
}

export default card