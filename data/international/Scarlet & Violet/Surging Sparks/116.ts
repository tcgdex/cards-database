import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [1007],
	set: Set,

	name: {
		'en-us': "Koraidon",
		'fr-fr': "Koraidon",
		'es-es': "Koraidon",
		'it-it': "Koraidon",
		'pt-br': "Koraidon",
		'de-de': "Koraidon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Unrelenting Onslaught",
			'fr-fr': "Assauts Incessants",
			'es-es': "Arremetida Incesante",
			'it-it': "Offensiva Incessante",
			'pt-br': "Arrancada Implacável",
			'de-de': "Unerbittlicher Ansturm"
		},

		effect: {
			'en-us': "If 1 of your other Ancient Pokémon used an attack during your last turn, this attack does 150 more damage.",
			'fr-fr': "Si l'un de vos autres Pokémon Temps passé a utilisé une attaque pendant votre dernier tour, cette attaque inflige 150 dégâts supplémentaires.",
			'es-es': "Si uno de tus otros Pokémon del pasado usó un ataque durante tu último turno, este ataque hace 150 puntos de daño más.",
			'it-it': "Se uno dei tuoi altri Pokémon Tempo Passato ha usato un attacco durante il tuo ultimo turno, questo attacco infligge 150 danni in più.",
			'pt-br': "Se 1 dos seus outros Pokémon Ancestrais usou um ataque durante o seu último turno, este ataque causará 150 pontos de dano a mais.",
			'de-de': "Wenn 1 deiner anderen Pokémon aus der Vergangenheit während deines letzten Zuges eine Attacke eingesetzt hat, fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794455,
				tcgplayer: 589979
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794455,
				tcgplayer: 589979
			}
		},
	],

	illustrator: "Ryuta Fuse",

}

export default card
