import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラブトロス",
		'zh-tw': "眷戀雲",
		th: "เลิฟโทลอส"
	},

	illustrator: "DOM",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [905],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "海を越えて 飛来したらば 厳しき冬の 終わりを知る。 慈愛が ヒスイの地に 新しき命 芽吹かせるとの 伝承あり。",
		'zh-tw': "當牠越過大海飛來，便代表嚴寒的冬季即將終結。傳說中其慈愛將使 新的生命在洗翠大地上萌芽。",
		th: "หากมันบินข้ามทะเลมา ก็จะรู้ว่าฤดูหนาวอันแสนหนาวเหน็บกำลังจะจบลง มีตำนานกล่าวว่า ความเมตตาจะทำให้ชีวิตใหม่เกิดขึ้นในภูมิภาคฮิซุย"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ハートサイン",
			'zh-tw': "愛心標誌",
			th: "ฮาร์ตไซน์"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ラブレゾナンス",
			'zh-tw': "愛之同感",
			th: "เลิฟเรโซแนนซ์"
		},

		damage: "80+",

		effect: {
			ja: "自分の場に、相手の場のポケモンと同じタイプのポケモンがいるなら、120ダメージ追加。",
			'zh-tw': "若自己的場上有與對手的場上寶可夢相同屬性的寶可夢，則增加120點傷害。",
			th: "ถ้าบนกระดานฝ่ายเรา มีโปเกมอนประเภทเดียวกับโปเกมอนบนกระดานฝ่ายตรงข้าม การโจมตีนี้จะเพิ่มแดเมจอีก 120"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card