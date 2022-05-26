import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Origin Forme Palkia VSTAR",
		fr: "Palkia Originel VSTAR",
		es: "Palkia Origen V-ASTRO",
		it: "Palkia Originale V ASTRO",
		pt: "Palkia Forma Origem V-ASTRO",
		de: "Ur-Palkia VSTAR"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Water"],

	evolveFrom: {
		en: "Origin Forme Palkia V",
		fr: "Palkia Originel-V",
		es: "Palkia Origen V",
		it: "Palkia Originale-V",
		pt: "Palkia Forma Origem V",
		de: "Ur-Palkia-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Subspace Swell",
			fr: "Houle Subspatiale",
			es: "Oleaje Subespacial",
			it: "Sottospazio Amplificato",
			pt: "Maré do Subespaço",
			de: "Subraumschwall"
		},

		effect: {
			en: "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's).",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire).",
			es: "Este ataque hace 20 puntos de daño más por cada Pokémon en Banca (tanto tuyos como de tu rival).",
			it: "Questo attacco infligge 20 danni in più per ogni Pokémon in panchina, sia tuo che del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco (seus e do seu oponente).",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank (deiner und der deines Gegners) 20 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card