import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [121],
	set: Set,

	name: {
		'en-us': "Misty's Starmie",
		'fr-fr': "Staross d'Ondine",
		'de-de': "Mistys Starmie",
		'it-it': "Starmie di Misty",
		'es-es': "Starmie de Misty",
		'pt-br': "Starmie da Misty",
		'es-mx': "Starmie de Misty"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Misty's Staryu",
		'fr-fr': "Stari d'Ondine",
		'de-de': "Mistys Sterndu",
		'it-it': "Staryu di Misty",
		'es-es': "Staryu de Misty",
		'pt-br': "Staryu da Misty",
		'es-mx': "Staryu de Misty"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Abrupt Flash",
			'fr-fr': "Flash Brusque",
			'de-de': "Abrupter Blitz",
			'it-it': "Flash Inaspettato",
			'es-es': "Destello Súbito",
			'pt-br': "Clarão Abrupto",
			'es-mx': "Destello Súbito"
		},

		effect: {
			'en-us': "If this Pokémon evolved from Misty's Staryu during this turn, this attack does 80 more damage.",
			'fr-fr': "Si ce Pokémon a évolué de Stari d'Ondine pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
			'de-de': "Wenn sich dieses Pokémon während dieses Zuges aus Mistys Sterndu entwickelt hat, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon si è evoluto da Staryu di Misty durante questo turno, questo attacco infligge 80 danni in più.",
			'es-es': "Si este Pokémon ha evolucionado de Staryu de Misty durante este turno, este ataque hace 80 puntos de daño más.",
			'pt-br': "Se este Pokémon evoluiu de Staryu da Misty durante este turno, este ataque causará 80 pontos de dano a mais.",
			'es-mx': "Si este Pokémon evolucionó de Staryu de Misty durante este turno, este ataque hace 80 puntos de daño más."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825921,
				tcgplayer: 630814
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825921,
				tcgplayer: 630814
			}
		},
	],
}

export default card
