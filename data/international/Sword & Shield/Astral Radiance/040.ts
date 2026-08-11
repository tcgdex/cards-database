import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [484],
	set: Set,

	name: {
		'en-us': "Origin Forme Palkia VSTAR",
		'fr-fr': "Palkia Originel VSTAR",
		'es-es': "Palkia Origen V-ASTRO",
		'it-it': "Palkia Originale V ASTRO",
		'pt-br': "Palkia Forma Origem V-ASTRO",
		'de-de': "Ur-Palkia VSTAR"
	},

	illustrator: "aky CG Works",
	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 280,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Origin Forme Palkia V",
		'fr-fr': "Palkia Originel-V",
		'es-es': "Palkia Origen V",
		'it-it': "Palkia Originale-V",
		'pt-br': "Palkia Forma Origem V",
		'de-de': "Ur-Palkia-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Subspace Swell",
			'fr-fr': "Houle Subspatiale",
			'es-es': "Oleaje Subespacial",
			'it-it': "Sottospazio Amplificato",
			'pt-br': "Maré do Subespaço",
			'de-de': "Subraumschwall"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's).",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire).",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Pokémon en Banca (tanto tuyos como de tu rival).",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon in panchina, sia tuo che del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco (seus e do seu oponente).",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf der Bank (deiner und der deines Gegners) 20 Schadenspunkte mehr zu."
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


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658560,
				tcgplayer: 272240
			}
		},
	],
}

export default card
