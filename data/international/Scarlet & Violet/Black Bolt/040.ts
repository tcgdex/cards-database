import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [605],
	set: Set,

	name: {
		'en-us': "Elgyem",
		'fr-fr': "Lewsor",
		'de-de': "Pygraulon",
		'it-it': "Elgyem",
		'pt-br': "Elgyem",
		'es-es': "Elgyem",
		'es-mx': "Elgyem"
	},

	illustrator: "Apios",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Slight Shift",
			'fr-fr': "Léger Déplacement",
			'de-de': "Leichte Bewegung",
			'it-it': "Lieve Spostamento",
			'pt-br': "Deslocamento Discreto",
			'es-es': "Pequeño Cambio",
			'es-mx': "Movidita"
		},

		effect: {
			'en-us': "Move an Energy from 1 of your opponent's Pokémon to another of their Pokémon.",
			'fr-fr': "Déplacez une Énergie de l'un des Pokémon de votre adversaire vers un autre de ses Pokémon.",
			'de-de': "Verschiebe 1 Energie von 1 Pokémon deines Gegners auf 1 anderes seiner Pokémon.",
			'it-it': "Sposta un'Energia da uno dei Pokémon del tuo avversario a un altro dei suoi Pokémon.",
			'pt-br': "Mova uma Energia de 1 dos Pokémon do seu oponente para outro Pokémon dele.",
			'es-es': "Mueve 1 Energía de uno de los Pokémon de tu rival a otro de sus Pokémon.",
			'es-mx': "Mueve 1 Energía de 1 de los Pokémon de tu rival a otro de sus Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Beam",
			'fr-fr': "Rayon",
			'de-de': "Strahl",
			'it-it': "Raggio",
			'pt-br': "Feixe",
			'es-es': "Transmisión",
			'es-mx': "Rayo"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835988,
				tcgplayer: 642492
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835988,
				tcgplayer: 642492
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836357,
				tcgplayer: 642736
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836359,
				tcgplayer: 642663
			}
		}
	]
}

export default card
