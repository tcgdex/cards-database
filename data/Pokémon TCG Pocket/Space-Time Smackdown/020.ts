import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Leafeon",
		fr: "Phyllali",
		es: "Leafeon",
		it: "Leafeon",
		de: "Folipurba",
		'pt-br': "Leafeon",
		ko: "리피아"
	},

	illustrator: "Kouki Saitou",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "When you see Leafeon asleep in a patch of sunshine, you'll know it is using photosynthesis to produce clean air.",
		fr: "Un Phyllali qui dort par beau temps produit\nun air frais et pur par photosynthèse.",
		es: "En días soleados, duerme y hace la fotosíntesis,\ncon la que emite aire puro a su alrededor.",
		it: "Nelle belle giornate dorme al sole e usa\nla fotosintesi, producendo aria pulita.",
		de: "An klaren Tagen erzeugt ein schlafendes Folipurba\nsaubere Luft, indem es Fotosynthese betreibt.",
		'pt-br': "Quando vir um Leafeon adormecido sob os raios de sol,\nvocê saberá que ele está fazendo fotossíntese\npara produzir ar fresco.",
		ko: "맑은 날에 잠든 리피아는\n광합성을 해서\n깨끗한 공기를 만들어 낸다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Leafy Cyclone",
			fr: "Cyclone Arboré",
			es: "Ciclón Hojarasca",
			it: "Fogliaturbine",
			de: "Blättergewirbel",
			'pt-br': "Ciclone Folhoso",
			ko: "잎날사이클론"
		},

		damage: 90,
		cost: ["Grass", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			ko: "자신의 다음 차례에 이 포켓몬은 기술을 사용할 수 없다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
