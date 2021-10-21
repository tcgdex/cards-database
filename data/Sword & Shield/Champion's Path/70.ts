import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Gardevoir V",
		fr: "Gardevoir V",
		es: "Gardevoir V",
		it: "Gardevoir V",
		pt: "Gardevoir V",
		de: "Guardevoir V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 210,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Magical Shot",
				fr: "Coup Magique",
				es: "Disparo Mágico",
				it: "Magicolpo",
				pt: "Tiro Mágico",
				de: "Magischer Schuss"
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Swelling Pulse",
				fr: "Pulsation Grandissante",
				es: "Pulso Creciente",
				it: "Pulsazioni Amplificate",
				pt: "Pulso Crescente",
				de: "Quellende Woge"
			},
			effect: {
				en: "If this Pokémon was healed during this turn, this attack does 80 more damage.",
				fr: "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si este Pokémon ha sido curado durante este turno, este ataque hace 80 puntos de daño más.",
				it: "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 80 danni in più.",
				pt: "Se este Pokémon tiver sido curado durante este turno, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "120+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
