import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "シャリタツ",
		'zh-tw': "米立龍"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [978],
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "非常に 悪賢い ポケモン。 弱ったふりで 獲物を おびき寄せ 仲間の ポケモンに 襲わせる。",
		'zh-tw': "極為奸詐狡猾的寶可夢。會假裝虛弱來吸引獵物接近，接著讓同夥的寶可夢發動攻擊。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "みずでっぽう",
			'zh-tw': "水槍"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "せいぞんせんりゃく",
			'zh-tw': "生存戰略"
		},

		effect: {
			ja: "自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。のぞむなら、このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。若希望，將這隻寶可夢與備戰寶可夢互換。"
		}
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card