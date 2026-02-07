import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [556],
	set: Set,

	name: {
		en: "Maractus",
		fr: "Maracachi",
		de: "Maracamba",
		it: "Maractus",
		pt: "Maractus",
		es: "Maractus",
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
			en: "Lively Needles",
			fr: "Épines Animées",
			de: "Rasante Stacheln",
			it: "Spine Vispe",
			pt: "Agulha Agitada",
			es: "Pinchos Animados",
			'es-mx': "Espinas Vivarachas"
		},

		effect: {
			en: "If this Pokémon was healed during this turn, this attack does 100 more damage.",
			fr: "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 100 dégâts supplémentaires.",
			de: "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 100 danni in più.",
			pt: "Se este Pokémon tiver sido curado durante este turno, este ataque causará 100 pontos de dano a mais.",
			es: "Si este Pokémon ha sido curado durante este turno, este ataque hace 100 puntos de daño más.",
			'es-mx': "Si este Pokémon fue curado durante este turno, este ataque hace 100 puntos de daño más."
		},

		damage: "20+"
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Pierce",
			fr: "Transpercement",
			de: "Durchbohren",
			it: "Perforare",
			pt: "Perfurar",
			es: "Perforar",
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
				cardmarket: 835918
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835918
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836265
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836275
			}
		}
	],
}

export default card
