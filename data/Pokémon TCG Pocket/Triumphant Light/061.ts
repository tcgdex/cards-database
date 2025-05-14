import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Giratina",
		fr: "Giratina",
		es: "Giratina",
		it: "Giratina",
		de: "Giratina",
		'pt-br': "Giratina",
		ko: "기라티나"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		en: "This Pokémon is said to live in a world on the reverse side of ours, where common knowledge is distorted and strange.",
		fr: "Il vit dans le Monde Distorsion,\nun monde à l'opposé du nôtre\nqui échappe au sens commun.",
		es: "Vive en el Mundo Distorsión, un mundo opuesto\nal nuestro y cuyas leyes desafían el sentido común.",
		it: "Vive nel Mondo Distorto che, sfidando l'ordine\ncosmico, si trova sul lato opposto al nostro.",
		de: "Es lebt in einer Zerrwelt, die auf der Kehrseite\nder unseren liegt und die sich aller Logik entzieht.",
		'pt-br': "Dizem que este Pokémon vive em um mundo reverso\nao nosso, onde o senso comum é distorcido e estranho.",
		ko: "상식이 통하지 않는\n이 세상의 이면에 있다고 불리는\n깨어진 세계에 서식한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Crisis Dive",
			fr: "Plongeon Critique",
			es: "Crisis en Picado",
			it: "Picchiata Critica",
			de: "Krisensprung",
			'pt-br': "Mergulho de Calamidade",
			ko: "크라이시스 다이브"
		},

		damage: 120,
		cost: ["Grass", "Psychic", "Colorless"],

		effect: {
			en: "Discard 2 random Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies au hasard de ce Pokémon.",
			es: "Descarta 2 Energías aleatorias de este Pokémon.",
			it: "Rimuovi 2 Energie a caso da questo Pokémon.",
			de: "Lege 2 zufällige Energien von diesem Pokémon ab.",
			'pt-br': "Descarte 2 Energias random deste Pokémon.",
			ko: "이 포켓몬에서 에너지를 랜덤으로 2개 트래쉬한다.",
			'pt-br': "Descarte 2 Energias aleatórias deste Pokémon."
		}
	}],

	retreat: 3
}

export default card
