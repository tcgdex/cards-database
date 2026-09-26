import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Articuno"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		id: "Ada yang mengatakan bahwa bulu biru indah Articuno terbuat dari es. Pokémon ini terbang di gunung bersalju sembari mengibarkan ekor panjangnya."
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				id: "Kepakan Pembeku"
			},
			effect: {
				id: "Dapat digunakan 1 kali pada giliran sendiri jika ada Moltres dan Zapdos di Arena sendiri. Pilih 1 lembar Energi Dasar Air dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon ini."
			},
		},
	],

	attacks: [
		{
			name: {
				id: "Hujan Es"
			},
			cost: ["Water", "Water", "Colorless"],
			effect: {
				id: "Serangan ini memberikan kerusakan masing-masing sejumlah 30 kepada semua Pokémon lawan. <em>[Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]</em>"
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [144],
};

export default card;
