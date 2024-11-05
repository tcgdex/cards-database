import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "エムリット"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [481],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "悲しみの 苦しさと 喜びの 尊さを 人々に 教えた。 感情の神と 呼ばれている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "こころをみたす"
		},

		effect: {
			ja: "自分の手札から「基本エネルギー」を2枚まで選び、自分のポケモンに好きなようにつける。"
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "ゴッドバースト"
		},

		damage: 160,

		effect: {
			ja: "自分のベンチに「ユクシー」「アグノム」がいないなら、このワザは失敗。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card