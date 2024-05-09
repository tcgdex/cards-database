import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "イイネイヌ"
	},

	category: "Pokemon",
	rarity: "Rare",
	illustrator: "Souichirou Gunjima",
	dexId: [1014],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "すぐ 頭に 血が 上ってしまう 荒くれもの。 首の 鎖を 振り回し なんでも 叩き潰す。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "アドレナパワー"
		},

		effect: {
			ja: "このポケモンにエネルギーがついているなら、このポケモンの最大HPは「＋100」され、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+100」される。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "グッドパンチ"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card
