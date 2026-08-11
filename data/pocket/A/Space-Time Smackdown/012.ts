import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Torterra",
		'fr-fr': "Torterra",
		'es-es': "Torterra",
		'it-it': "Torterra",
		'de-de': "Chelterrar",
		'pt-br': "Torterra",
		'ko-kr': "토대부기"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [389],
	hp: 160,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Grotle"
	},

	description: {
		'en-us': "Ancient people imagined that beneath the ground dwelt a gigantic Torterra.",
		'fr-fr': "Autrefois, les gens croyaient que le monde\nreposait sur le dos d'un gigantesque Torterra.",
		'es-es': "Las gentes de antaño creían que la superficie\nterrestre se encontraba sobre un gran Torterra.",
		'it-it': "In tempi antichissimi si credeva che\nsottoterra dimorasse un gigantesco Torterra.",
		'de-de': "In alten Zeiten malten die Menschen sich aus, dass sich\nein riesiges Chelterrar unter der Erde befinde.",
		'pt-br': "Povos antigos acreditavam que um Torterra gigante\nvivia embaixo da terra.",
		'ko-kr': "오랜 옛날 사람들은 대지\n밑에 거대한 토대부기가\n있다고 공상했었다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Frenzy Plant",
			'fr-fr': "Végé-Attaque",
			'es-es': "Planta Feroz",
			'it-it': "Radicalbero",
			'de-de': "Flora-Statue",
			'pt-br': "Planta Mortal",
			'ko-kr': "하드플랜트"
		},

		damage: 150,
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Frenzy Plant.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Végé-Attaque.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Planta Feroz.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Radicalbero.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Flora-Statue nicht einsetzen.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Planta Mortal.",
			'ko-kr': "자신의 다음 차례에 이 포켓몬은 「하드플랜트」 사용할 수 없다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["palkia"]
}

export default card
