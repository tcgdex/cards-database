import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

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

	illustrator: "Rond",
	rarity: "One Star",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

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

	abilities: [{
		type: "Ability",

		name: {
			en: "Levitate",
			fr: "Lévitation",
			es: "Levitación",
			it: "Levitazione",
			de: "Schwebe",
			'pt-br': "Levitação",
			ko: "부유"
		},

		effect: {
			en: "If this Pokémon has any Energy attached, it has no Retreat Cost.",
			fr: "Si de l'Énergie est attachée à ce Pokémon, il n'a aucun Coût de Retraite.",
			es: "Si este Pokémon tiene alguna Energía unida a él, no tiene ningún Coste de Retirada.",
			it: "Se questo Pokémon ha delle Energie assegnate, non ha costo di ritirata.",
			de: "Wenn an dieses Pokémon mindestens 1 Energie angelegt ist, hat es keine Rückzugskosten.",
			'pt-br': "Se este Pokémon tiver alguma Energia ligada a ele,\nnão terá custo de Recuo.",
			ko: "이 포켓몬에게 에너지가 붙어 있다면 이 포켓몬의 후퇴에 필요한 에너지를 모두 없앤다."
		}
	}],

	attacks: [{
		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
			es: "Disparo Embrujado",
			it: "Colpomistero",
			de: "Spukschuss",
			'pt-br': "Tiro Assustador",
			ko: "홀로숏"
		},

		damage: 70,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 3
}

export default card
