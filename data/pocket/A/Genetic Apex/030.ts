import { Card } from "models/database/card"
import Set from "../Genetic Apex"
const card: Card = {
	set: Set,

	name: {
		'en-us': "Lilligant",
		'fr-fr': "Fragilady",
		'es-es': "Lilligant",
		'it-it': "Lilligant",
		'de-de': "Dressella",
		'ko-kr': "드레디어",
		'pt-br': "Lilligant"
	},

	illustrator: "You Iribi",
	category: "Pokemon",

	dexId: [549],
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Petilil"
	},

	attacks: [{
		cost: ["Grass", "Grass"],
		name: {
			'en-us': "Leaf Supply",
			'fr-fr': "Provision de Feuillage",
			'es-es': "Aprovisionamiento Hoja",
			'it-it': "Fogliascorta",
			'de-de': "Blättervorrat",
			'ko-kr': "리프서플라이",
			'pt-br': "Estoque de Folha"
		},
		effect: {
			'en-us': "Take a {G} Energy from your Energy Zone and attach it to 1 of your Benched {G} Pokémon.",
			'fr-fr': "Prenez une Énergie {G} de votre zone Énergie et attachez-la à l'un de vos Pokémon {G} de Banc.",
			'es-es': "Une 1 Energía {G} de tu área de Energía a 1 de tus Pokémon {G} en Banca.",
			'it-it': "Prendi un'Energia {G} dalla tua Zona Energia e assegnala a uno dei tuoi Pokémon {G} in panchina.",
			'de-de': "Lege 1 {G}-Energie aus deinem Energiebereich an 1 {G}-Pokémon auf deiner Bank an.",
			'ko-kr': "자신의 에너지존에서 {G}에너지를 1개 내보내 벤치의 {G} 포켓몬에게 붙인다.",
			'pt-br': "Pegue 1 Energia {G} da sua Zona de Energia e a 1 dos seus Pokémon {G} no Banco."
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
		'en-us': "The fragrance of the garland on its head has a relaxing effect, but taking care of it is very difficult.",
		'fr-fr': "La fleur sur sa tête émet un parfum\nqui apaise instantanément, mais\nelle est très difficile à entretenir.",
		'es-es': "El aroma que despide la flor de su tocado\ntiene efectos tranquilizantes, pero este\nPokémon requiere muchos cuidados.",
		'it-it': "Il fiore che ha sulla testa emette un profumo davvero\nrilassante, ma è molto difficile prendersene cura.",
		'de-de': "Der Blumenschmuck auf seinem Kopf\nsondert einen beruhigenden Duft ab,\nist jedoch nicht gerade pflegeleicht.",
		'pt-br': "A fragrância da guirlanda em sua cabeça possui um\nefeito relaxante. Ela murcha quando não é bem\ncuidada por um Treinador.",
		'ko-kr': "머리의 꽃 장식에서 나는\n향기를 맡으면 편안해지나\n손질이 아주 까다롭다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}
export default card