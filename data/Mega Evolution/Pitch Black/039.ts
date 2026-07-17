import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "After a piece of seaweed merged with debris from a sunken ship, it was reborn as this ghost Pokémon.",
		de: "Dieses Geister-Pokémon entstand, als sich vom Meeresgrund stammendes Seegras auf Bruchstücken eines Schiffswracks ablagerte."
	},

	name: {
		en: "Dhelmise",
		fr: "Sinistrail",
		es: "Dhelmise",
		'es-mx': "Dhelmise",
		de: "Moruda"
	},

	illustrator: "Oku",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [781],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Vengeful Anchor",
			es: "Ancla Vengativa",
			'es-mx': "Ancla Vengativa",
			de: "Verankerte Rache"
		},

		cost: ["Psychic"],

		damage: "30+",

		effect: {
			en: "If you have 4 or more Pokémon that have the Hide 'n' Sneak Ability in your discard pile, this attack does 140 more damage.",
			es: "Si tienes en tu pila de descartes 4 Pokémon o más que tengan la habilidad Escondite a Hurtadillas, este ataque hace 140 puntos de daño más.",
			'es-mx': "Si tienes 4 Pokémon o más que tengan la Habilidad Escondidas Furtivas en tu pila de descartes, este ataque hace 140 puntos de daño más.",
			de: "Wenn du 4 oder mehr Pokémon, die die Fähigkeit Listiges Versteckspiel haben, in deinem Ablagestapel hast, fügt diese Attacke 140 Schadenspunkte mehr zu."
		}
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
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895825,
				tcgplayer: 704796
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895825,
				tcgplayer: 704796
			}
		},
	],
}

export default card
