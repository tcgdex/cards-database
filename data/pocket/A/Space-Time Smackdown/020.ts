import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Leafeon",
		'fr-fr': "Phyllali",
		'es-es': "Leafeon",
		'it-it': "Leafeon",
		'de-de': "Folipurba",
		'pt-br': "Leafeon",
		'ko-kr': "리피아"
	},

	illustrator: "Kouki Saitou",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [470],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Eevee"
	},

	description: {
		'en-us': "When you see Leafeon asleep in a patch of sunshine, you'll know it is using photosynthesis to produce clean air.",
		'fr-fr': "Un Phyllali qui dort par beau temps produit\nun air frais et pur par photosynthèse.",
		'es-es': "En días soleados, duerme y hace la fotosíntesis,\ncon la que emite aire puro a su alrededor.",
		'it-it': "Nelle belle giornate dorme al sole e usa\nla fotosintesi, producendo aria pulita.",
		'de-de': "An klaren Tagen erzeugt ein schlafendes Folipurba\nsaubere Luft, indem es Fotosynthese betreibt.",
		'pt-br': "Quando vir um Leafeon adormecido sob os raios de sol,\nvocê saberá que ele está fazendo fotossíntese\npara produzir ar fresco.",
		'ko-kr': "맑은 날에 잠든 리피아는\n광합성을 해서\n깨끗한 공기를 만들어 낸다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Leafy Cyclone",
			'fr-fr': "Cyclone Arboré",
			'es-es': "Ciclón Hojarasca",
			'it-it': "Fogliaturbine",
			'de-de': "Blättergewirbel",
			'pt-br': "Ciclone Folhoso",
			'ko-kr': "잎날사이클론"
		},

		damage: 90,
		cost: ["Grass", "Colorless"],

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'ko-kr': "자신의 다음 차례에 이 포켓몬은 기술을 사용할 수 없다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
