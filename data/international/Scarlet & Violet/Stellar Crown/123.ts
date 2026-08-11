import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [663],
	set: Set,

	name: {
		'en-us': "Talonflame",
		'fr-fr': "Flambusard",
		'es-es': "Talonflame",
		'it-it': "Talonflame",
		'pt-br': "Talonflame",
		'de-de': "Fiaro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Fletchinder",
		'fr-fr': "Braisillon",
		'es-es': "Fletchinder",
		'it-it': "Fletchinder",
		'pt-br': "Fletchinder",
		'de-de': "Dartignis"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Aero Chase",
			'fr-fr': "Poursuite Aérienne",
			'es-es': "Persecución Aérea",
			'it-it': "Tallonamento Aereo",
			'pt-br': "Caçada Aérea",
			'de-de': "Aero-Jagd"
		},

		effect: {
			'en-us': "If the Retreat Cost of your opponent's Active Pokémon is {C}{C} or more, this attack does 110 more damage.",
			'fr-fr': "Si le Coût de Retraite du Pokémon Actif de votre adversaire est de {C}{C} ou plus, cette attaque inflige 110 dégâts supplémentaires.",
			'es-es': "Si el Coste de Retirada del Pokémon Activo de tu rival es de {C}{C} o más, este ataque hace 110 puntos de daño más.",
			'it-it': "Se il costo di ritirata del Pokémon attivo del tuo avversario è {C}{C} o più, questo attacco infligge 110 danni in più.",
			'pt-br': "Se o custo de Recuo do Pokémon Ativo do seu oponente for {C}{C} ou mais, este ataque causará 110 pontos de dano a mais.",
			'de-de': "Wenn die Rückzugskosten des Aktiven Pokémon deines Gegners {C}{C} oder mehr betragen, fügt diese Attacke 110 Schadenspunkte mehr zu."
		},

		damage: "110+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785977,
				tcgplayer: 567356
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785977,
				tcgplayer: 567356
			}
		},
	],

	illustrator: "Nurikabe",

}

export default card
