import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ロゼリア"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [315],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "花の 香りを かぐと 気持ちが リラックスする。 香りの 強い ロゼリアは 元気な 証拠。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "どくのトゲ"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをどくにする。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "リーフステップ"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card