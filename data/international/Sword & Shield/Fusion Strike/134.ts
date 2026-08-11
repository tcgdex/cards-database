import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [57],
	set: Set,

	name: {
		'en-us': "Primeape",
		'fr-fr': "Colossinge",
		'es-es': "Primeape",
		'it-it': "Primeape",
		'pt-br': "Primeape",
		'de-de': "Rasaff"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
		'es-es': "Mankey",
		'it-it': "Mankey",
		'pt-br': "Mankey",
		'de-de': "Menki"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yuya Oka",

	description: {
		'en-us': "The blood vessels in its brain are sturdier than those of other Pokémon, so it can stay healthy despite its constant raging."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Gut Punch",
			'fr-fr': "Poing Estomaquant",
			'de-de': "Magenhieb",
			'es-es': "Puño Tripa",
			'pt-br': "Soco Tenaz",
			'it-it': "Spavaldopugno"
		},

		damage: "30+",

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon V, this attack does 60 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 60 dégâts supplémentaires.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 60 puntos de daño más.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon V, este ataque causará 60 pontos de dano a mais.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 60 danni in più."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582712,
				tcgplayer: 253337
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582712,
				tcgplayer: 253337
			}
		},
	],
}

export default card
