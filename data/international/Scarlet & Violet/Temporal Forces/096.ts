import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [984],
	set: Set,

	name: {
		'en-us': "Great Tusk",
		'fr-fr': "Fort-Ivoire",
		'es-es': "Colmilargo",
		'it-it': "Grandizanne",
		'pt-br': "Presa Grande",
		'de-de': "Riesenzahn"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Lunge Out",
			'fr-fr': "Allonger",
			'es-es': "Arremeter",
			'it-it': "Affondo Lungo",
			'pt-br': "Bote",
			'de-de': "Sprungangriff"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Wrathful Charge",
			'fr-fr': "Charge Furieuse",
			'es-es': "Carga Iracunda",
			'it-it': "Carica Furibonda",
			'pt-br': "Colisão Enfurecida",
			'de-de': "Zorniger Ansturm"
		},

		effect: {
			'en-us': "If your Benched Pokémon have any damage counters on them, this attack does 80 more damage.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 80 puntos de daño más.",
			'it-it': "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 80 danni in più.",
			'pt-br': "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",

	description: {
		'en-us': "Sightings of this Pokémon have occurred in recent years. The name Great Tusk was taken from a creature listed in a certain book.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760726,
				tcgplayer: 542840
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760726,
				tcgplayer: 542840
			}
		},
		{
			type: "normal",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 866039,
			}
		},
	],

	illustrator: "Mitsuhiro Arita",

}

export default card