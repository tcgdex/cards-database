import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [870],
	set: Set,

	name: {
		'fr-fr': "Hexadron",
		'en-us': "Falinks",
		'es-es': "Falinks",
		'it-it': "Falinks",
		'pt-br': "Falinks",
		'de-de': "Legios"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Coup d'Boule",
			'en-us': "Headbutt",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Attaque Risquée Groupée",
			'en-us': "Reckless Charge Together",
			'es-es': "Carga Descuidada Conjunta",
			'it-it': "Carica Avventata Collettiva",
			'pt-br': "Carga Indomável Unida",
			'de-de': "Waghalsiger Team-Sturmangriff"
		},

		effect: {
			'fr-fr': "Si Hexadron est sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
			'en-us': "If Falinks is on your Bench, this attack does 90 more damage.",
			'es-es': "Si Falinks está en tu Banca, este ataque hace 90 puntos de daño más.",
			'it-it': "Se Falinks è nella tua panchina, questo attacco infligge 90 danni in più.",
			'pt-br': "Se Falinks estiver no seu Banco, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn sich Legios auf deiner Bank befindet, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "70+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715594,
				tcgplayer: 497534,
				cardtrader: 248766
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715594,
				tcgplayer: 497534,
				cardtrader: 248766
			}
		},
	],

	illustrator: "kurumitsu",

	description: {
		'en-us': "The brass, which is the one that stands at the front and issues orders, is the strongest and smartest of the six.",
	},
}

export default card
