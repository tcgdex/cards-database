import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "タギングル",
		'zh-tw': "塗標客",
		th: "ทากิงกูลู",
		id: "Grafaiai",
		'zh-cn': "塗標客"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	dexId: [945],
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "エサによって 色が 変化する 毒の 唾液を 指に 塗して 森の 木々に 模様を 描く。",
		'zh-tw': "會將能隨著吃下的食物而變色的毒唾液塗在指頭上， 在森林的樹木描繪上圖案。",
		th: "สีของน้ำลายพิษจะเปลี่ยนไปตามอาหาร มันจะป้ายน้ำลายบนนิ้วแล้ววาดลวดลายบนต้นไม้ในป่า",
		id: "Grafaiai melumuri jarinya dengan air liur beracun yang warnanya berubah tergantung dari makanannya dan melukis pola pada pohon-pohon yang ada di hutan.",
		'zh-cn': "會將能隨著吃下的食物而變色的毒唾液塗在指頭上， 在森林的樹木描繪上圖案。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "どくえき",
			'zh-tw': "毒液",
			th: "ของเหลวพิษ",
			id: "Cairan Racun",
			'zh-cn': "毒液"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun.",
			'zh-cn': "將對手的戰鬥寶可夢【中毒】。"
		}
	}, {
		cost: ["Darkness"],

		name: {
			ja: "カラフルグラフィティ",
			'zh-tw': "鮮豔塗鴉",
			th: "คัลเลอร์ฟูลกราฟฟิตี้",
			id: "Colorful Graffiti",
			'zh-cn': "鮮豔塗鴉"
		},

		damage: "40×",

		effect: {
			ja: "自分の手札から基本エネルギーを好きなだけトラッシュし、トラッシュした基本エネルギーのタイプの数×40ダメージ。",
			'zh-tw': "從自己的手牌將任意數量的基本能量卡丟棄，造成丟棄的基本能量卡的屬性種類的數量×40點傷害。",
			th: "ทิ้งการ์ดพลังงานพื้นฐานจากบนมือฝ่ายเราตามจำนวนที่ชอบที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนประเภทของการ์ดพลังงานพื้นฐานที่ทิ้ง x40",
			id: "Buang sesukanya Energi Dasar dari Kartu Pegangan sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 40 untuk tiap tipe Energi Dasar yang dibuang ke Trash.",
			'zh-cn': "從自己的手牌將任意數量的基本能量卡丟棄，造成丟棄的基本能量卡的屬性種類的數量×40點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card