import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "aky CG Works",
	category: "Pokemon",
	stage: "Basic",

	name: {
		en: "Dragapult V",
		fr: "Lanssorien V",
		de: "Katapuldra V",
		es: "Dragapult V",
		pt: "Dragapult V",
		it: "Dragapult V"
	},

	rarity: "None",
	dexId: [887],
	hp: 210,
	types: ["Psychic"],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Bite",
			fr: "Morsure",
			de: "Biss",
			es: "Mordisco",
			pt: "Mordida",
			it: "Morso"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Jet Assault",
			fr: "Assaut Propulsé",
			de: "Jet-Angriff",
			es: "Asalto Propulsión",
			pt: "Ofensiva a Jato",
			it: "Assalto Jet"
		},

		effect: {
			en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 80 more damage.",
			fr: "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
			de: "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			es: "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 80 puntos de daño más.",
			pt: "Se este Pokémon foi movido do seu Banco para o Campo Ativo durante este turno, este ataque causará 80 pontos de dano a mais.",
			it: "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 80 danni in più."
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
