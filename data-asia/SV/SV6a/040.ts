import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゲノセクト"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [649],
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "プラズマ団によって 改造された 古代の むしポケモン。 背中の 大砲が パワーアップした。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "エースキャンセラー"
		},

		effect: {
			ja: "このポケモンに「ポケモンのどうぐ」がついているなら、相手は手札から「ACE SPEC」のカードを出して使えない。"
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "マグネブラスト"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 1
}

export default card