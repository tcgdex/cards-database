import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Scovilain",
		en: "Scovillain",
		es: "Scovillain",
		it: "Scovillain",
		pt: "Scovillain",
		de: "Halupenjo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Type Double",
			en: "Double Type",
			es: "Doble Tipo",
			it: "Doppio Tipo",
			pt: "Tipo Duplo",
			de: "Doppeltyp"
		},

		effect: {
			fr: "Tant que ce Pokémon est en jeu, il est de type Grass et Fire.",
			en: "As long as this Pokémon is in play, it is Grass and Fire type.",
			es: "Mientras este Pokémon esté en juego, es de tipo Grass y Fire.",
			it: "Fintanto che questo Pokémon è in gioco, è di tipo Grass e Fire.",
			pt: "Enquanto este Pokémon estiver em jogo, será um Pokémon de tipo Grass e Fire.",
			de: "Solange dieses Pokémon im Spiel ist, ist es vom Typ Grass und Fire."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			fr: "Coup d'Boule Pimenté",
			en: "Spicy Headbutt",
			es: "Cabezazo Picante",
			it: "Testata Piccante",
			pt: "Cabeçada Ardida",
			de: "Scharfe Kopfnuss"
		},

		effect: {
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			en: "This attack's damage isn't affected by Resistance.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "O dano deste ataque não é afetado por Resistência.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false
	},

	evolveFrom: {
		en: "Capsakid"
	}
}

export default card
