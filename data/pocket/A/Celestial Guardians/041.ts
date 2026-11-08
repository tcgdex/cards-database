import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alolan Ninetales",
		'fr-fr': "Feunardd'Alola",
		'es-es': "Ninetalesde Alola",
		'it-it': "Ninetalesdi Alola",
		'de-de': "Alola-Vulnona",
		'pt-br': "Ninetalesde Alola",
		'ko-kr': "알로라나인테일"
	},

	illustrator: "Eri Yamaki",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [38],
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Alolan Vulpix"
	},

	description: {
		'en-us': "A deity resides in the snowy mountains where this Pokémon lives. In ancient times, it was worshiped as that deity's incarnation.",
		'fr-fr': "Parce qu'il vivait dans une montagne enneigée\nqui abritait une divinité, on le considérait jadis\ncomme un avatar de cette dernière.",
		'es-es': "Antaño lo veneraban como la encarnación de una deidad\nque se creía que moraba en las montañas nevadas.",
		'it-it': "In passato viveva su un impenetrabile monte innevato,\ndimora di una divinità di cui era considerato l'incarnazione.",
		'de-de': "Einst lebte es auf einem schneebedeckten Berg,\nder auch die Heimat einer Gottheit war, weshalb\nes als deren Verkörperung verehrt wurde.",
		'pt-br': "Uma divindade vive nas montanhas nevadas que são o lar\ndeste Pokémon. Em tempos antigos, foi venerado como\na encarnação dessa divindade.",
		'ko-kr': "눈으로 폐쇄된 신이 사는\n산에 살았기 때문에 과거에는\n신의 화신으로 숭상받아왔다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Blizzard",
			'fr-fr': "Blizzard",
			'es-es': "Ventisca",
			'it-it': "Bora",
			'de-de': "Blizzard",
			'pt-br': "Nevasca",
			'ko-kr': "눈보라"
		},

		damage: 60,
		cost: ["Water", "Water", "Water"],

		effect: {
			'en-us': "This attack also does 20 damage to each of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à chaque Pokémon de Banc de votre adversaire.",
			'es-es': "Este ataque también hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
			'it-it': "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 20 pontos de dano a cada Pokémon no Banco do seu oponente.",
			'ko-kr': "상대의 벤치 포켓몬 전원에게도 20데미지를 준다."
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