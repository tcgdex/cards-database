import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [780],
	set: Set,

	name: {
		'en-us': "Drampa",
		'fr-fr': "Draïeul",
		'es-es': "Drampa",
		'it-it': "Drampa",
		'pt-br': "Drampa",
		'de-de': "Sen-Long"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'es-es': "Bofetada Gentil",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha",
			'de-de': "Sanfter Hieb"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Raging Cannon",
			'fr-fr': "Canon Déchaîné",
			'es-es': "Cañón Iracundo",
			'it-it': "Cannone Furioso",
			'pt-br': "Canhão Furioso",
			'de-de': "Wutkanone"
		},

		effect: {
			'en-us': "If all of your Benched Pokémon have at least 1 damage counter on them, this attack does 120 more damage.",
			'fr-fr': "Si tous vos Pokémon de Banc ont au moins un marqueur de dégâts, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si todos tus Pokémon en Banca tienen por lo menos un contador de daño sobre ellos, este ataque hace 120 puntos de daño más.",
			'it-it': "Se tutti i tuoi Pokémon in panchina hanno almeno un segnalino danno, questo attacco infligge 120 danni in più.",
			'pt-br': "Se todos os seus Pokémon no Banco tiverem pelo menos 1 contador de dano neles, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn auf allen Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760768,
				tcgplayer: 542882
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760768,
				tcgplayer: 542882
			}
		},
	],

	illustrator: "Toshinao Aoki",

	description: {
		'en-us': "The mountains it calls home are nearly two miles in height. On rare occasions, it descends to play with the children living in the towns below.",
	},

	thirdParty: {
		cardmarket: 760768
	}
}

export default card
