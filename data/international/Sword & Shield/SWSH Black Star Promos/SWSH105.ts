import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",

	name: {
		'en-us': "Gardevoir V",
		'fr-fr': "Gardevoir V",
		'es-es': "Gardevoir V",
		'pt-br': "Gardevoir V",
		'de-de': "Guardevoir V",
		'it-it': "Gardevoir V"
	},

	rarity: "Promo",
	hp: 210,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Magical Shot",
			'fr-fr': "Coup Magique",
			'es-es': "Disparo Mágico",
			'pt-br': "Tiro Mágico",
			'de-de': "Magischer Schuss",
			'it-it': "Magicolpo"
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			'en-us': "Swelling Pulse",
			'fr-fr': "Pulsation Grandissante",
			'es-es': "Pulso Creciente",
			'pt-br': "Pulso Crescente",
			'de-de': "Quellende Woge",
			'it-it': "Pulsazioni Amplificate"
		},

		effect: {
			'en-us': "If this Pokémon was healed during this turn, this attack does 80 more damage.",
			'fr-fr': "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si este Pokémon ha sido curado durante este turno, este ataque hace 80 puntos de daño más.",
			'pt-br': "Se este Pokémon tiver sido curado durante este turno, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 80 danni in più."
		},

		damage: "120+",
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	dexId: [282],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 561770
	}
}

export default card
