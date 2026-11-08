import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "aky CG Works",
	category: "Pokemon",
	stage: "Basic",

	name: {
		'en-us': "Dragapult V",
		'fr-fr': "Lanssorien V",
		'de-de': "Katapuldra V",
		'es-es': "Dragapult V",
		'pt-br': "Dragapult V",
		'it-it': "Dragapult V"
	},

	rarity: "Promo",
	dexId: [887],
	hp: 210,
	types: ["Psychic"],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'de-de': "Biss",
			'es-es': "Mordisco",
			'pt-br': "Mordida",
			'it-it': "Morso"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Jet Assault",
			'fr-fr': "Assaut Propulsé",
			'de-de': "Jet-Angriff",
			'es-es': "Asalto Propulsión",
			'pt-br': "Ofensiva a Jato",
			'it-it': "Assalto Jet"
		},

		effect: {
			'en-us': "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 80 more damage.",
			'fr-fr': "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
			'de-de': "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			'es-es': "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 80 puntos de daño más.",
			'pt-br': "Se este Pokémon foi movido do seu Banco para o Campo Ativo durante este turno, este ataque causará 80 pontos de dano a mais.",
			'it-it': "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 80 danni in più."
		},

		damage: "60+"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 549386
	}
}

export default card
