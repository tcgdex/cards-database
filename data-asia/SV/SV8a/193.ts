import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "タイム",
		id: "Tima",
		'zh-tw': "泰姆",
		'zh-cn': "泰姆"
	},

	illustrator: "Yuu Nishida",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の手札からポケモンを1枚選び、そのポケモンの名前を相手に伝えてから、ウラにして置く。相手はそのポケモンのHPを答える。ウラにしたポケモンをオモテにして、正解なら、相手は山札を4枚引く。不正解なら、自分は山札を4枚引く。その後、置いたカードを自分の手札にもどす。",
		id: "Pilih 1 lembar Pokémon dari Kartu Pegangan sendiri, beri tahu lawan nama Pokémon tersebut, lalu taruh dengan sisi depan menghadap ke bawah. Lawan menebak HP Pokémon tersebut. Balikkan Pokémon tersebut sehingga sisi depannya menjadi menghadap ke atas, jika benar, lawan mengambil 4 kartu dari atas Deck. Jika salah, pemain mengambil 4 kartu dari atas Deck. Setelah itu, kembalikan kartu yang ditaruh tersebut ke Kartu Pegangan sendiri.",
		'zh-tw': "從自己的手牌選擇1張寶可夢卡，向對手宣言那隻寶可夢的名稱後，翻到反面放置。對手回答那隻寶可夢的HP。將翻到反面的寶可夢卡翻到正面，若正確，則對手從牌庫抽出4張卡。若不正確，則自己從牌庫抽出4張卡。然後，將放置的卡放回自己的手牌。",
		'zh-cn': "從自己的手牌選擇1張寶可夢卡，向對手宣言那隻寶可夢的名稱後，翻到反面放置。對手回答那隻寶可夢的HP。將翻到反面的寶可夢卡翻到正面，若正確，則對手從牌庫抽出4張卡。若不正確，則自己從牌庫抽出4張卡。然後，將放置的卡放回自己的手牌。"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card