import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [484],
	set: Set,

	name: {
		'fr-fr': "Palkia Originel VSTAR",
		'de-de': "Ur-Palkia VSTAR",
		'es-es': "Palkia Origen V-ASTRO",
		'pt-br': "Palkia Forma Origem V-ASTRO",
		'it-it': "Palkia Originale V ASTRO",
		'en-us': "Origin Forme Palkia VSTAR"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 280,
	types: ["Water"],

	evolveFrom: {
		'fr-fr': "Palkia Originel-V",
		'de-de': "Ur-Palkia-V",
		'es-es': "Palkia Origen V",
		'pt-br': "Palkia Forma Origem V",
		'it-it': "Palkia Originale-V",
		'en-us': "Origin Forme Palkia V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'fr-fr': "Houle Subspatiale",
			'de-de': "Subraumschwall",
			'es-es': "Oleaje Subespacial",
			'pt-br': "Maré do Subespaço",
			'it-it': "Sottospazio Amplificato",
			'en-us': "Subspace Swell"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire).",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf der Bank (deiner und der deines Gegners) 20 Schadenspunkte mehr zu.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Pokémon en Banca (tanto tuyos como de tu rival).",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco (seus e do seu oponente).",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon in panchina, sia tuo che del tuo avversario.",
			'en-us': "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's)."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 669481
	}
}

export default card
