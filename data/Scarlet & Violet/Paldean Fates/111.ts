import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Paldean Tauros",
		fr: "Tauros de Paldea",
		es: "Tauros de Paldea",
		it: "Tauros di Paldea",
		pt: "Tauros de Paldea"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Raging Horns",
			fr: "Cornes Furieuses",
			es: "Cuernos Embravecidos",
			it: "Corna Furiose",
			pt: "Chifres Indomáveis"
		},

		effect: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon."
		},

		damage: "20+"
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Blaze Dash",
			fr: "Ruée Flamboyante",
			es: "Embestida Ardiente",
			it: "Corsa Infuocata",
			pt: "Arremetida de Labareda"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card