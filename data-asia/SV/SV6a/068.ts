import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヨマワル"
	},

	illustrator: "James Turner",
	category: "Pokemon",
	dexId: [355],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "真っ赤な ひとつ目で 睨みつけられ 生体エネルギーを 吸われるとき ひどい 寒気に 襲われる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "むかえにいく"
		},

		effect: {
			ja: "自分のトラッシュから「ヨマワル」を3枚まで選び、ベンチに出す。"
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "つぶやく"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	rarity: "None"
}

export default card