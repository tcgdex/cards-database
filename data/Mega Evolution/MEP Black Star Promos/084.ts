import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Dhelmise",
		fr: "Sinistrail",
		de: "Moruda",
		it: "Dhelmise",
		es: "Dhelmise",
		pt: "Dhelmise",
		'es-mx': "Dhelmise"
	},

	illustrator: "Dsuke",
	rarity: "Promo",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [781],

	attacks: [{
		cost: ["Psychic"],

		name: {
        	en: "Vengeful Anchor",
        	fr: "Ancre Vengeresse",
        	de: "Verankerte Rache",
        	it: "Ancora Vendicativa",
        	es: "Ancla Vengativa",
        	pt: "Âncora Vingativa",
        	'es-mx': "Ancla Vengativa"
        },

		effect: {
			en: "If you have 4 or more Pokémon that have the Hide 'n' Sneak Ability in your discard pile, this attack does 140 more damage.",
			fr: "Si vous avez au moins 4 Pokémon ayant le talent Cachette en Douce dans votre pile de défausse, cette attaque inflige 140 dégâts supplémentaires.",
			de: "Wenn du 4 oder mehr Pokémon, die die Fähigkeit Listiges Versteckspiel haben, in deinem Ablagestapel hast, fügt diese Attacke 140 Schadenspunkte mehr zu."
			it: "Se hai quattro o più Pokémon che hanno l'abilità Nascondino Furbino nella tua pila degli scarti, questo attacco infligge 140 danni in più.",
			es: "Si tienes en tu pila de descartes 4 Pokémon o más que tengan la habilidad Escondite a Hurtadillas, este ataque hace 140 puntos de daño más.",
			pt: "Se você tiver 4 ou mais Pokémon que têm a Habilidade Esconde-some na sua pilha de descarte, este ataque causará 140 pontos de dano a mais.",
			'es-mx': "Si tienes 4 Pokémon o más que tengan la Habilidad Escondidas Furtivas en tu pila de descartes, este ataque hace 140 puntos de daño más."
		},

		damage: "30+"
	}],

	retreat: 3,
	regulationMark: "J",

	weaknesses: [{
		type: "Darkness",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 894263,
				tcgplayer: 706137

			}
		},
	],
}

export default card
