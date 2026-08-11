import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [554],
	set: Set,

	name: {
		'en-us': "Galarian Darumaka",
		'fr-fr': "Darumarond de Galar",
		'es-es': "Darumaka de Galar",
		'it-it': "Darumaka di Galar",
		'pt-br': "Darumaka de Galar",
		'de-de': "Galar-Flampion"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Atsuko Nishida",

	description: {
		'en-us': "The colder they get, the more energetic they are. They freeze their breath to make snowballs, using them as ammo for playful snowball fights."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Reckless Charge",
			'fr-fr': "Attaque Imprudente",
			'de-de': "Waghalsiger Sturmangriff",
			'es-es': "Carga Descuidada",
			'pt-br': "Carga Indomável",
			'it-it': "Carica Avventata"
		},

		damage: 20,

		effect: {
			'en-us': "Flip a coin. If tails, this Pokémon also does 10 damage to itself.",
			'fr-fr': "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige aussi 10 dégâts.",
			'de-de': "Wirf 1 Münze. Bei Zahl fügt dieses Pokémon auch sich selbst 10 Schadenspunkte zu.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este Pokémon também causará 10 pontos de dano a si mesmo.",
			'it-it': "Lancia una moneta. Se esce croce, questo Pokémon infligge anche 10 danni a se stesso."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582205,
				tcgplayer: 253218
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582205,
				tcgplayer: 253218
			}
		},
	],
}

export default card
