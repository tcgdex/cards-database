import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Scovillain ex",
		fr: "Scovilain-ex",
		es: "Scovillain ex",
		it: "Scovillain-ex",
		pt: "Scovillain ex",
		de: "Halupenjo-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Double Type",
			fr: "Type Double",
			es: "Doble Tipo",
			it: "Doppio Tipo",
			pt: "Tipo Duplo",
			de: "Doppeltyp"
		},

		effect: {
			en: "As long as this Pokémon is in play, it is Grass and Fire type.",
			fr: "Tant que ce Pokémon est en jeu, il est de type Grass et Fire.",
			es: "Mientras este Pokémon esté en juego, es de tipo Grass y Fire.",
			it: "Fintanto che questo Pokémon è in gioco, è di tipo Grass e Fire.",
			pt: "Enquanto este Pokémon estiver em jogo, será um Pokémon de tipo Grass e Fire.",
			de: "Solange dieses Pokémon im Spiel ist, ist es vom Typ Grass und Fire."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Spicy Rage",
			fr: "Frénésie Pimentée",
			es: "Furia Picante",
			it: "Ira Piccante",
			pt: "Ira Apimentada",
			de: "Scharfer Zorn"
		},

		effect: {
			en: "This attack does 70 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 70 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 70 puntos de daño más por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 70 danni in più per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 70 pontos de dano a mais para cada contador de dano neste Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 70 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card