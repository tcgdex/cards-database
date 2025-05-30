import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine ex",
		fr: "Arcanin-ex",
		de: "Arkani-ex",
		it: "Arcanine-ex",
		es: "Arcanine ex",
		pt: "Arcanine ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Raging Claws",
			fr: "Griffes Enragées",
			de: "Wutklauen",
			it: "Furiartigli",
			es: "Garras Furiosas",
			pt: "Garras Devastadoras"
		},

		effect: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon."
		},

		damage: "30+"
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			en: "Bright Flame",
			fr: "Flamme Éclatante",
			de: "Helle Flamme",
			it: "Splendifiamma",
			es: "Llama Viva",
			pt: "Chama Reluzente"
		},

		effect: {
			en: "Discard 2 {R} Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies {R} de ce Pokémon.",
			de: "Lege 2 {R}-Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta due Energie {R} da questo Pokémon.",
			es: "Descarta 2 Energías {R} de este Pokémon.",
			pt: "Descarte 2 Energias {R} deste Pokémon."
		},

		damage: 250
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card