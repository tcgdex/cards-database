import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [198],
	set: Set,

	name: {
		'en-us': "Murkrow",
		'fr-fr': "Cornèbre",
		'es-es': "Murkrow",
		'it-it': "Murkrow",
		'pt-br': "Murkrow",
		'de-de': "Kramurx"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Spin Turn",
			'fr-fr': "Tournoyer",
			'es-es': "Giro y Vuelta",
			'it-it': "Girotondo",
			'pt-br': "Volta Giratória",
			'de-de': "Absatzdreher"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 10
	}, {
		cost: ["Darkness"],

		name: {
			'en-us': "United Wings",
			'fr-fr': "Ailes Unies",
			'es-es': "Alas Unidas",
			'it-it': "Ali Unite",
			'pt-br': "União Alada",
			'de-de': "Vereinte Schwingen"
		},

		effect: {
			'en-us': "This attack does 20 damage for each Pokémon in your discard pile that has the United Wings attack.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse ayant l'attaque Ailes Unies.",
			'es-es': "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Alas Unidas.",
			'it-it': "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che ha l'attacco Ali Unite.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada Pokémon na sua pilha de descarte que tiver o ataque União Alada.",
			'de-de': "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel, das die Attacke Vereinte Schwingen hat, 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "Shiburingaru",
	description: {
		'en-us': "Feared and loathed by many, it is believed to bring misfortune to all those who see it at night.",
	},
	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 715469,
				tcgplayer: 501893
			},
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"],
			thirdParty: {
				cardmarket: 761125,
				tcgplayer: 527563
			},
		}
	],
}

export default card
