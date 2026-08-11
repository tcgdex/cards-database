import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [203],
	set: Set,

	name: {
		'en-us': "Girafarig",
		'fr-fr': "Girafarig",
		'es-es': "Girafarig",
		'it-it': "Girafarig",
		'pt-br': "Girafarig",
		'de-de': "Girafarig"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Psychic Assault",
			'fr-fr': "Assaut Psychique",
			'es-es': "Asalto Psíquico",
			'it-it': "Psicoassalto",
			'pt-br': "Ataque Psíquico",
			'de-de': "Psycho-Ansturm"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Girafarig's tail has a small head. It instinctively bites at any foe that approaches the Pokémon from behind.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760696,
				tcgplayer: 542810
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760696,
				tcgplayer: 542810
			}
		},
	],

	illustrator: "matazo",

}

export default card