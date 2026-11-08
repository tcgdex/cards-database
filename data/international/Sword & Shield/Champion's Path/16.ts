import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [282],

	name: {
		'en-us': "Gardevoir V",
		'fr-fr': "Gardevoir V",
		'es-es': "Gardevoir V",
		'it-it': "Gardevoir V",
		'pt-br': "Gardevoir V",
		'de-de': "Guardevoir V"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,
	hp: 210,

	types: [
		"Psychic",
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	attacks: [{
		name: {
			'en-us': "Magical Shot",
			'fr-fr': "Coup Magique",
			'es-es': "Disparo Mágico",
			'it-it': "Magicolpo",
			'pt-br': "Tiro Mágico",
			'de-de': "Magischer Schuss"
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			'en-us': "Swelling Pulse",
			'fr-fr': "Pulsation Grandissante",
			'es-es': "Pulso Creciente",
			'it-it': "Pulsazioni Amplificate",
			'pt-br': "Pulso Crescente",
			'de-de': "Quellende Woge"
		},

		effect: {
			'en-us': "If this Pokémon was healed during this turn, this attack does 80 more damage.",
			'fr-fr': "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si este Pokémon ha sido curado durante este turno, este ataque hace 80 puntos de daño más.",
			'it-it': "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 80 danni in più.",
			'pt-br': "Se este Pokémon tiver sido curado durante este turno, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "120+",
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 499935,
		tcgplayer: 222327
	}
}

export default card
