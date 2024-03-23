import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Scovillain",
		fr: "Scovilain",
		es: "Scovillain",
		it: "Scovillain",
		pt: "Scovillain"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Double Type",
			fr: "Type Double",
			es: "Doble Tipo",
			it: "Doppio Tipo",
			pt: "Tipo Duplo"
		},

		effect: {
			en: "As long as this Pokémon is in play, it is Grass and Fire type.",
			fr: "Tant que ce Pokémon est en jeu, il est de type Grass et Fire.",
			es: "Mientras este Pokémon esté en juego, es de tipo Grass y Fire.",
			it: "Fintanto che questo Pokémon è in gioco, è di tipo Grass e Fire.",
			pt: "Enquanto este Pokémon estiver em jogo, será um Pokémon de tipo Grass e Fire."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Spicy Headbutt",
			fr: "Coup d'Boule Pimenté",
			es: "Cabezazo Picante",
			it: "Testata Piccante",
			pt: "Cabeçada Ardida"
		},

		effect: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "O dano deste ataque não é afetado por Resistência."
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card