import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Ninetales",
		fr: "Feunardd'Alola",
		es: "Ninetalesde Alola",
		it: "Ninetalesdi Alola",
		de: "Alola-Vulnona",
		'pt-br': "Ninetalesde Alola",
		ko: "알로라나인테일"
	},

	illustrator: "Eri Yamaki",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [38],
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Alolan Vulpix"
	},

	description: {
		en: "A deity resides in the snowy mountains where this Pokémon lives. In ancient times, it was worshiped as that deity's incarnation.",
		fr: "Parce qu'il vivait dans une montagne enneigée\nqui abritait une divinité, on le considérait jadis\ncomme un avatar de cette dernière.",
		es: "Antaño lo veneraban como la encarnación de una deidad\nque se creía que moraba en las montañas nevadas.",
		it: "In passato viveva su un impenetrabile monte innevato,\ndimora di una divinità di cui era considerato l'incarnazione.",
		de: "Einst lebte es auf einem schneebedeckten Berg,\nder auch die Heimat einer Gottheit war, weshalb\nes als deren Verkörperung verehrt wurde.",
		'pt-br': "Uma divindade vive nas montanhas nevadas que são o lar\ndeste Pokémon. Em tempos antigos, foi venerado como\na encarnação dessa divindade.",
		ko: "눈으로 폐쇄된 신이 사는\n산에 살았기 때문에 과거에는\n신의 화신으로 숭상받아왔다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Blizzard",
			fr: "Blizzard",
			es: "Ventisca",
			it: "Bora",
			de: "Blizzard",
			'pt-br': "Nevasca",
			ko: "눈보라"
		},

		damage: 60,
		cost: ["Water", "Water", "Water"],

		effect: {
			en: "This attack also does 20 damage to each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige aussi 20 dégâts à chaque Pokémon de Banc de votre adversaire.",
			es: "Este ataque también hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 20 pontos de dano a cada Pokémon no Banco do seu oponente.",
			ko: "상대의 벤치 포켓몬 전원에게도 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card