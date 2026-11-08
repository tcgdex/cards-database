import { Card } from "models/database/card"
import Set from "../Stellar Crown"

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
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Resolute Fang",
			'fr-fr': "Croc Résolu",
			'es-es': "Colmillo Resuelto",
			'it-it': "Zanna Risoluta",
			'pt-br': "Presas Resolutas",
			'de-de': "Resolute Fänge"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex, this attack does 70 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 70 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 70 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 70 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 70 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "50+"
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
				cardmarket: 785944,
				tcgplayer: 567316
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785944,
				tcgplayer: 567316
			}
		},
	],

	illustrator: "kawayoo",

}

export default card
