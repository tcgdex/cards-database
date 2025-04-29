import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Toedscruel",
		fr: "Terracruel",
		es: "Toedscruel",
		de: "Tenterra",
		it: "Toedscruel",
		pt: "Toedscruel",
		'es-mx': "Toedscruel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Secret Forest Path",
			fr: "Chemin Forestier Secret",
			es: "Sendero Forestal Secreto",
			de: "Geheimer Waldweg",
			it: "Scorciatoia nel Bosco",
			pt: "Atalho da Floresta",
			'es-mx': "Atajo Forestal"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, your Active Pokémon's Retreat Cost is ColorlessColorless less.",
			fr: "Tant que ce Pokémon est sur votre Banc, le Coût de Retraite de votre Pokémon Actif est diminué de ColorlessColorless.",
			es: "Mientras este Pokémon esté en tu Banca, el Coste de Retirada de tu Pokémon Activo es de ColorlessColorless menos.",
			de: "Solange sich dieses Pokémon auf deiner Bank befindet, verringern sich die Rückzugskosten deines Aktiven Pokémon um ColorlessColorless.",
			it: "Fintanto che questo Pokémon è nella tua panchina, il costo di ritirata del tuo Pokémon attivo è ridotto di ColorlessColorless.",
			pt: "Enquanto este Pokémon estiver no seu Banco, o custo de Recuo do seu Pokémon Ativo será ColorlessColorless a menos.",
			'es-mx': "Mientras este Pokémon esté en tu Banca, el Costo de Retirada de tu Pokémon Activo es de ColorlessColorless menos."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Mud Shot",
			fr: "Tir de Boue",
			es: "Disparo Lodo",
			de: "Lehmschuss",
			it: "Colpodifango",
			pt: "Tiro de Lama",
			'es-mx': "Disparo de Lodo"
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
