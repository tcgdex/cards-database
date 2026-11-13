import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Tauros",
		fr: "Tauros",
		de: "Tauros",
		es: "Tauros",
		it: "Tauros",
		pt: "Tauros",
		'es-mx': "Tauros"
	},

	illustrator: "Uta",
	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Raging Horns",
			fr: "Cornes Furieuses",
			de: "Rasende Hörner",
			es: "Cuernos Embravecidos",
			it: "Corna Furiose",
			pt: "Chifres Indomáveis",
			'es-mx': "Cuernos Iracundos"
		},

		effect: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			'es-mx': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon."
		},

		damage: "50+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	thirdParty: {
		tcgplayer: 728045,
		cardmarket: 918905
	}
}

export default card