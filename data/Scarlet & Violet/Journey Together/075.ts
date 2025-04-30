import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Alcremie ex",
		fr: "Charmilly-ex",
		es: "Alcremie ex",
		de: "Pokusan-ex",
		it: "Alcremie-ex",
		pt: "Alcremie ex",
		'es-mx': "Alcremie ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Confectionary Gift",
			fr: "Cadeau Gâteau",
			es: "Golosina de Regalo",
			de: "Konfektgeschenk",
			it: "Dolcedono",
			pt: "Presente de Confeitaria",
			'es-mx': "Dulce Regalo"
		},

		effect: {
			en: "Once during your turn, you may heal 30 damage from 1 of your Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez soigner 30 dégâts de l'un de vos Pokémon.",
			es: "Una vez durante tu turno, puedes curar 30 puntos de daño a uno de tus Pokémon.",
			de: "Einmal während deines Zuges kannst du 30 Schadenspunkte bei 1 deiner Pokémon heilen.",
			it: "Una sola volta durante il tuo turno, puoi curare uno dei tuoi Pokémon da 30 danni.",
			pt: "Uma vez durante o seu turno, você poderá curar 30 pontos de dano de 1 dos seus Pokémon.",
			'es-mx': "Una vez durante tu turno, puedes curar 30 puntos de daño a 1 de tus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Whipped Shot",
			fr: "Tir Fouetté",
			es: "Disparo Batido",
			de: "Sahneschlag",
			it: "Montacolpo",
			pt: "Disparo de Chantilly",
			'es-mx': "Disparo Batido"
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
