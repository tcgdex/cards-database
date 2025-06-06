import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [198],
	set: Set,

	name: {
		fr: "Cornèbre",
		en: "Murkrow",
		es: "Murkrow",
		it: "Murkrow",
		pt: "Murkrow",
		de: "Kramurx"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Tournoyer",
			en: "Spin Turn",
			es: "Giro y Vuelta",
			it: "Girotondo",
			pt: "Volta Giratória",
			de: "Absatzdreher"
		},

		effect: {
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 10
	}, {
		cost: ["Darkness"],

		name: {
			fr: "Ailes Unies",
			en: "United Wings",
			es: "Alas Unidas",
			it: "Ali Unite",
			pt: "União Alada",
			de: "Vereinte Schwingen"
		},

		effect: {
			fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse ayant l'attaque Ailes Unies.",
			en: "This attack does 20 damage for each Pokémon in your discard pile that has the United Wings attack.",
			es: "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Alas Unidas.",
			it: "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che ha l'attacco Ali Unite.",
			pt: "Este ataque causa 20 pontos de dano para cada Pokémon na sua pilha de descarte que tiver o ataque União Alada.",
			de: "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel, das die Attacke Vereinte Schwingen hat, 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Teeziro"
}

export default card