import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Frost Rotom",
		'fr-fr': "Motisma Froid",
		'es-es': "Rotom Frío",
		'it-it': "Rotom Gelo",
		'de-de': "Frost-Rotom",
		'pt-br': "Rotom Congelante",
		'ko-kr': "프로스트로토무"
	},

	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [479],
	hp: 80,
	types: ["Water"],

	description: {
		'en-us': "This Rotom has entered a refrigerator. It leaps around gleefully after it uses cold air to freeze the area around it.",
		'fr-fr': "Ce Motisma a pris possession d'un réfrigérateur.\nIl gèle les alentours grâce à l'air froid qu'il produit,\npuis il saute gaiement dans tous les sens.",
		'es-es': "Asume esta forma cuando toma posesión de\nun frigorífico. Congela todo a su alrededor con\naire gélido para acto seguido brincar de alegría.",
		'it-it': "Ha assunto questa forma entrando in un frigorifero. Congela ciò\nche ha intorno con aria ghiacciata per poi saltellare tutto contento.",
		'de-de': "Dieses Rotom ist in einen Kühlschrank eingedrungen.\nMit eiskalter Luft friert es seine Umgebung ein und\nspringt dann fröhlich umher.",
		'pt-br': "Este Rotom entrou em uma geladeira. Salta alegremente\napós usar ar glacial para congelar a área ao redor.",
		'ko-kr': "냉장고에 들어간 모습.\n냉기로 주위를 얼려 놓고는\n유쾌하다는 듯이 통통 튄다."
	},

	stage: "Basic",

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

		damage: 30,
		cost: ["Water", "Water"],

		effect: {
			'en-us': "This attack also does 10 damage to each of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à chaque Pokémon de Banc de votre adversaire.",
			'es-es': "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
			'it-it': "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 10 pontos de dano a cada Pokémon no Banco do seu oponente.",
			'ko-kr': "상대의 벤치 포켓몬 전원에게도 10데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
