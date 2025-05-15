import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Doduo",
		fr: "Doduo",
		es: "Doduo",
		it: "Doduo",
		de: "Dodu",
		'pt-br': "Doduo",
		ko: "두두"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			it: "Beccata",
			de: "Pikser",
			'pt-br': "Bicada",
			ko: "쪼기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "A two-headed Pokémon that was discovered as a sudden mutation. It runs at a pace of over 60 miles per hour.",
		fr: "Ce Pokémon à deux têtes est le résultat d'une\nsoudaine mutation. Il peut courir jusqu'à 100 km/h.",
		es: "Este Pokémon de dos cabezas es el\nresultado de una mutación. Cuando corre,\npuede alcanzar casi 100 km por hora.",
		it: "Pokémon a due teste, scoperto a seguito di\nun'improvvisa mutazione. Può correre a 100 km/h.",
		de: "Dieses zweiköpfige Pokémon gilt als plötzliche\nMutation. Es rennt bis zu 100 km/h schnell.",
		'pt-br': "Um Pokémon com duas cabeças que foi\ndescoberto como uma mutação repentina.\nEle corre a mais de 100 km/h.",
		ko: "돌연변이로 발견된\n두 개의 머리를 지닌 포켓몬이다.\n시속 100km로 달린다."
	}
}

export default card
