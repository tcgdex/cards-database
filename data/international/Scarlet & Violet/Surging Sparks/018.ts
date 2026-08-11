import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [128],
	set: Set,

	name: {
		'en-us': "Paldean Tauros",
		'fr-fr': "Tauros de Paldea",
		'es-es': "Tauros de Paldea",
		'it-it': "Tauros di Paldea",
		'pt-br': "Tauros de Paldea",
		'de-de': "Paldea-Tauros"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'de-de': "Rückwärtskick"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Spirited Tackle",
			'fr-fr': "Charge Impétueuse",
			'es-es': "Placaje Vigoroso",
			'it-it': "Vigorazione",
			'pt-br': "Investida Vivaz",
			'de-de': "Hitziger Tackle"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Stage 1 Pokémon, this attack does 90 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon de Niveau 1, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon de Fase 1, este ataque hace 90 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon di Fase 1, questo attacco infligge 90 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Estágio 1, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Phase-1-Pokémon ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794273,
				tcgplayer: 590014
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794273,
				tcgplayer: 590014
			}
		},
	],

	illustrator: "Taiga Kasai",
	
}

export default card
