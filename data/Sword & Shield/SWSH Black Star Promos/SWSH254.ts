import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Palkia Originel VSTAR",
		de: "Ur-Palkia VSTAR",
		es: "Palkia Origen V-ASTRO",
		pt: "Palkia Forma Origem V-ASTRO",
		it: "Palkia Originale V ASTRO",
		en: "Origin Forme Palkia VSTAR"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 280,
	types: ["Water"],

	evolveFrom: {
		fr: "Palkia Originel-V",
		de: "Ur-Palkia-V",
		es: "Palkia Origen V",
		pt: "Palkia Forma Origem V",
		it: "Palkia Originale-V",
		en: "Origin Forme Palkia V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			fr: "Houle Subspatiale",
			de: "Subraumschwall",
			es: "Oleaje Subespacial",
			pt: "Maré do Subespaço",
			it: "Sottospazio Amplificato",
			en: "Subspace Swell"
		},

		effect: {
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire).",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank (deiner und der deines Gegners) 20 Schadenspunkte mehr zu.",
			es: "Este ataque hace 20 puntos de daño más por cada Pokémon en Banca (tanto tuyos como de tu rival).",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco (seus e do seu oponente).",
			it: "Questo attacco infligge 20 danni in più per ogni Pokémon in panchina, sia tuo che del tuo avversario.",
			en: "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's)."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card