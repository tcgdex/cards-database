import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [198],
	set: Set,

	name: {
		'fr-fr': "Cornèbre",
		'en-us': "Murkrow",
		'es-es': "Murkrow",
		'it-it': "Murkrow",
		'pt-br': "Murkrow",
		'de-de': "Kramurx"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Tournoyer",
			'en-us': "Spin Turn",
			'es-es': "Giro y Vuelta",
			'it-it': "Girotondo",
			'pt-br': "Volta Giratória",
			'de-de': "Absatzdreher"
		},

		effect: {
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 10
	}, {
		cost: ["Darkness"],

		name: {
			'fr-fr': "Ailes Unies",
			'en-us': "United Wings",
			'es-es': "Alas Unidas",
			'it-it': "Ali Unite",
			'pt-br': "União Alada",
			'de-de': "Vereinte Schwingen"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse ayant l'attaque Ailes Unies.",
			'en-us': "This attack does 20 damage for each Pokémon in your discard pile that has the United Wings attack.",
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

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715606,
				tcgplayer: 497592,
				cardtrader: 248788
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715606,
				tcgplayer: 497592,
				cardtrader: 248788
			}
		},
	],

	illustrator: "Teeziro",

	description: {
		'en-us': "Feared and loathed by many, it is believed to bring misfortune to all those who see it at night.",
	},
}

export default card
