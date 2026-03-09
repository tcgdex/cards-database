import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [121],
	set: Set,

	name: {
		en: "Misty's Starmie",
		fr: "Staross d'Ondine",
		de: "Mistys Starmie",
		it: "Starmie di Misty",
		es: "Starmie de Misty",
		pt: "Starmie da Misty",
		'es-mx': "Starmie de Misty"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		en: "Misty's Staryu",
		fr: "Stari d'Ondine",
		de: "Mistys Sterndu",
		it: "Staryu di Misty",
		es: "Staryu de Misty",
		pt: "Staryu da Misty",
		'es-mx': "Staryu de Misty"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Abrupt Flash",
			fr: "Flash Brusque",
			de: "Abrupter Blitz",
			it: "Flash Inaspettato",
			es: "Destello Súbito",
			pt: "Clarão Abrupto",
			'es-mx': "Destello Súbito"
		},

		effect: {
			en: "If this Pokémon evolved from Misty's Staryu during this turn, this attack does 80 more damage.",
			fr: "Si ce Pokémon a évolué de Stari d'Ondine pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
			de: "Wenn sich dieses Pokémon während dieses Zuges aus Mistys Sterndu entwickelt hat, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon si è evoluto da Staryu di Misty durante questo turno, questo attacco infligge 80 danni in più.",
			es: "Si este Pokémon ha evolucionado de Staryu de Misty durante este turno, este ataque hace 80 puntos de daño más.",
			pt: "Se este Pokémon evoluiu de Staryu da Misty durante este turno, este ataque causará 80 pontos de dano a mais.",
			'es-mx': "Si este Pokémon evolucionó de Staryu de Misty durante este turno, este ataque hace 80 puntos de daño más."
		},

		damage: "60+"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 825921
	}
}

export default card
