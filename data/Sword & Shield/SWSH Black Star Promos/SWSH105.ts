import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",

	name: {
		en: "Gardevoir V",
		fr: "Gardevoir V",
		es: "Gardevoir V",
		pt: "Gardevoir V",
		de: "Guardevoir V",
		it: "Gardevoir V"
	},

	rarity: "None",
	hp: 210,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			es: "Disparo Mágico",
			pt: "Tiro Mágico",
			de: "Magischer Schuss",
			it: "Magicolpo"
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			en: "Swelling Pulse",
			fr: "Pulsation Grandissante",
			es: "Pulso Creciente",
			pt: "Pulso Crescente",
			de: "Quellende Woge",
			it: "Pulsazioni Amplificate"
		},

		effect: {
			en: "If this Pokémon was healed during this turn, this attack does 80 more damage.",
			fr: "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si este Pokémon ha sido curado durante este turno, este ataque hace 80 puntos de daño más.",
			pt: "Se este Pokémon tiver sido curado durante este turno, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 80 danni in più."
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
	suffix: "V"
}

export default card
