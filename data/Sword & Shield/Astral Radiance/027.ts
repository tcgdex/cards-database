import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Radiant Heatran",
		fr: "Heatran Radieux",
		es: "Heatran Radiante",
		it: "Heatran Lucente",
		pt: "Heatran Radiante",
		de: "Strahlendes Heatran"
	},

	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Raging Blast",
			fr: "Explosion Furieuse",
			es: "Explosión Rabiosa",
			it: "Furiascoppio",
			pt: "Explosão Devastadora",
			de: "Wutexplosion"
		},

		effect: {
			en: "This attack does 70 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 70 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 70 puntos de daño por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 70 danni per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 70 pontos de dano para cada contador de dano neste Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 70 Schadenspunkte zu."
		},

		damage: "70×"
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658531,
		tcgplayer: 272227
	}
}

export default card
