import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Giratina",
		'fr-fr': "Giratina",
		'es-es': "Giratina",
		'it-it': "Giratina",
		'de-de': "Giratina",
		'pt-br': "Giratina",
		'ko-kr': "기라티나"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [487],
	hp: 120,
	types: ["Psychic"],

	description: {
		'en-us': "This Pokémon is said to live in a world on the reverse side of ours, where common knowledge is distorted and strange.",
		'fr-fr': "Il vit dans le Monde Distorsion,\nun monde à l'opposé du nôtre\nqui échappe au sens commun.",
		'es-es': "Vive en el Mundo Distorsión, un mundo opuesto\nal nuestro y cuyas leyes desafían el sentido común.",
		'it-it': "Vive nel Mondo Distorto che, sfidando l'ordine\ncosmico, si trova sul lato opposto al nostro.",
		'de-de': "Es lebt in einer Zerrwelt, die auf der Kehrseite\nder unseren liegt und die sich aller Logik entzieht.",
		'pt-br': "Dizem que este Pokémon vive em um mundo reverso\nao nosso, onde o senso comum é distorcido e estranho.",
		'ko-kr': "상식이 통하지 않는\n이 세상의 이면에 있다고 불리는\n깨어진 세계에 서식한다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Levitate",
			'fr-fr': "Lévitation",
			'es-es': "Levitación",
			'it-it': "Levitazione",
			'de-de': "Schwebe",
			'pt-br': "Levitação",
			'ko-kr': "부유"
		},

		effect: {
			'en-us': "If this Pokémon has any Energy attached, it has no Retreat Cost.",
			'fr-fr': "Si de l'Énergie est attachée à ce Pokémon, il n'a aucun Coût de Retraite.",
			'es-es': "Si este Pokémon tiene alguna Energía unida a él, no tiene ningún Coste de Retirada.",
			'it-it': "Se questo Pokémon ha delle Energie assegnate, non ha costo di ritirata.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Energie angelegt ist, hat es keine Rückzugskosten.",
			'pt-br': "Se este Pokémon tiver alguma Energia ligada a ele,\nnão terá custo de Recuo.",
			'ko-kr': "이 포켓몬에게 에너지가 붙어 있다면 이 포켓몬의 후퇴에 필요한 에너지를 모두 없앤다."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Spooky Shot",
			'fr-fr': "Tir Effrayant",
			'es-es': "Disparo Embrujado",
			'it-it': "Colpomistero",
			'de-de': "Spukschuss",
			'pt-br': "Tiro Assustador",
			'ko-kr': "홀로숏"
		},

		damage: 70,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["palkia"]
}

export default card
