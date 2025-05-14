import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Lilligant",
		fr: "Fragilady",
		es: "Lilligant",
		it: "Lilligant",
		de: "Dressella",
		'pt-br': "Lilligant",
		ko: "드레디어"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Petilil"
	},


	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			en: "Leaf Supply",
			fr: "Provision de Feuillage",
			es: "Aprovisionamiento Hoja",
			it: "Fogliascorta",
			de: "Blättervorrat",
			'pt-br': "Estoque de Folha",
			ko: "리프서플라이"
		},

		effect: {
			en: "Take a {G} Energy from your Energy Zone and attach it to 1 of your Benched {G} Pokémon.",
			fr: "Prenez une Énergie {G} de votre zone Énergie et attachez-la à l'un de vos Pokémon {G} de Banc.",
			es: "Une Energía {G} de tu área de Energía a 1 de tus Pokémon {G} en Banca.",
			it: "Prendi un'Energia {G} dalla tua Zona Energia e assegnala a uno dei tuoi Pokémon {G} in panchina.",
			de: "Lege G-Energie aus deinem Energiebereich an 1 {G} Pokémon auf deiner Bank an.",
			'pt-br': "Pegue Energia {G} da sua Zona de Energia e a 1 dos seus Pokémon {G} no Banco.",
			ko: "자신의 에너지존에서 G에너지를 개 내보내 벤치의 {G} 포켓몬에게 붙인다."
		},

		damage: "50"
	}],


	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "The fragrance of the garland on its head has a relaxing effect, but taking care of it is very difficult.",
		fr: "La fleur sur sa tête émet un parfum\nqui apaise instantanément, mais\nelle est très difficile à entretenir.",
		es: "El aroma que despide la flor de su tocado\ntiene efectos tranquilizantes, pero este\nPokémon requiere muchos cuidados.",
		it: "Il fiore che ha sulla testa emette un profumo davvero\nrilassante, ma è molto difficile prendersene cura.",
		de: "Der Blumenschmuck auf seinem Kopf\nsondert einen beruhigenden Duft ab,\nist jedoch nicht gerade pflegeleicht.",
		'pt-br': "A fragrância da guirlanda em sua cabeça possui um\nefeito relaxante. Ela murcha quando não é bem\ncuidada por um Treinador.",
		ko: "머리의 꽃 장식에서 나는\n향기를 맡으면 편안해지나\n손질이 아주 까다롭다."
	}
}

export default card
