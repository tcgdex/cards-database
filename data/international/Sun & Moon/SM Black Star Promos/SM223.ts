import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [639],
	set: Set,

	name: {
		'en-us': "Terrakion",
		'fr-fr': "Terrakium",
		'es-es': "Terrakion",
		'it-it': "Terrakion",
		'pt-br': "Terrakion",
		'de-de': "Terrakium"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Promo",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Cavern Counter",
			'fr-fr': "Marqueur des Grottes",
			'es-es': "Contraataque Gruta",
			'it-it': "Segnali Rupestri",
			'pt-br': "Vingança Cavernosa",
			'de-de': "Höhlenkonter"
		},

		damage: "50+",

		effect: {
			'en-us': "If all of your Benched Pokémon have at least 1 damage counter on them, this attack does 150 more damage.",
			'fr-fr': "Si tous vos Pokémon de Banc ont au moins un marqueur de dégâts, cette attaque inflige 150 dégâts supplémentaires.",
			'es-es': "Si todos tus Pokémon en Banca tienen por lo menos 1 contador de daño sobre ellos, este ataque hace 150 puntos de daño más.",
			'it-it': "Se tutti i tuoi Pokémon in panchina hanno almeno un segnalino danno, questo attacco infligge 150 danni in più.",
			'pt-br': "Se todos os seus Pokémon no Banco tiverem pelo menos 1 contador de dano neles, este ataque causará 150 pontos de dano a mais.",
			'de-de': "Wenn auf jedem Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Boulder Crush",
			'fr-fr': "Rocher Écrasant",
			'es-es': "Alud de Rocas",
			'it-it': "Macignata",
			'pt-br': "Rocha Esmagadora",
			'de-de': "Felsenquetscher"
		},

		damage: 110,
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,

	description: {
		'en-us': "Its charge is strong enough to break through a giant castle wall in one blow. This Pokémon is spoken of in legends.",
	},
}

export default card
