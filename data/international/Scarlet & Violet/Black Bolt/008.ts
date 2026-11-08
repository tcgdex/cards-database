import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [556],
	set: Set,

	name: {
		'en-us': "Maractus",
		'fr-fr': "Maracachi",
		'de-de': "Maracamba",
		'it-it': "Maractus",
		'pt-br': "Maractus",
		'es-es': "Maractus",
		'es-mx': "Maractus"
	},

	illustrator: "mingo",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Lively Needles",
			'fr-fr': "Épines Animées",
			'de-de': "Rasante Stacheln",
			'it-it': "Spine Vispe",
			'pt-br': "Agulha Agitada",
			'es-es': "Pinchos Animados",
			'es-mx': "Espinas Vivarachas"
		},

		effect: {
			'en-us': "If this Pokémon was healed during this turn, this attack does 100 more damage.",
			'fr-fr': "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 100 dégâts supplémentaires.",
			'de-de': "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 100 danni in più.",
			'pt-br': "Se este Pokémon tiver sido curado durante este turno, este ataque causará 100 pontos de dano a mais.",
			'es-es': "Si este Pokémon ha sido curado durante este turno, este ataque hace 100 puntos de daño más.",
			'es-mx': "Si este Pokémon fue curado durante este turno, este ataque hace 100 puntos de daño más."
		},

		damage: "20+"
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Pierce",
			'fr-fr': "Transpercement",
			'de-de': "Durchbohren",
			'it-it': "Perforare",
			'pt-br': "Perfurar",
			'es-es': "Perforar",
			'es-mx': "Perforar"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835918,
				tcgplayer: 642457
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835918,
				tcgplayer: 642457
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836265,
				tcgplayer: 642702
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836275,
				tcgplayer: 642630
			}
		}
	],
}

export default card
