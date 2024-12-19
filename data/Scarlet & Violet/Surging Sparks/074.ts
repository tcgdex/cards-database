import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Azumarill",
		fr: "Azumarill",
		es: "Azumarill",
		it: "Azumarill",
		pt: "Azumarill",
		de: "Azumarill"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Glistening Bubbles",
			fr: "Bulles Chatoyantes",
			es: "Burbujas Brillantes",
			it: "Bolle Scintillanti",
			pt: "Bolhas Cintilantes",
			de: "Glitzernde Bläschen"
		},

		effect: {
			en: "If you have any Tera Pokémon in play, this Pokémon can use the Double-Edge attack for Psychic.",
			fr: "Si vous avez au moins un Pokémon Téracristal en jeu, ce Pokémon peut utiliser l'attaque Damoclès pour Psychic.",
			es: "Si tienes algún Pokémon Teracristal en juego, este Pokémon puede usar el ataque Doble Filo por Psychic.",
			it: "Se hai dei Pokémon Teracristal in gioco, questo Pokémon può usare l'attacco Sdoppiatore al costo di Psychic.",
			pt: "Se você tiver algum Pokémon Tera em jogo, este Pokémon poderá usar o ataque Faca de Dois Gumes por Psychic.",
			de: "Wenn du mindestens 1 Terakristall-Pokémon im Spiel hast, kann dieses Pokémon die Attacke Risikotackle für Psychic einsetzen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Psychic", "Psychic"],

		name: {
			en: "Double-Edge",
			fr: "Damoclès",
			es: "Doble Filo",
			it: "Sdoppiatore",
			pt: "Faca de Dois Gumes",
			de: "Risikotackle"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			pt: "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 230
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Marill",
		fr: "Marill",
		es: "Marill",
		it: "Marill",
		pt: "Marill",
		de: "Marill"
	}
}

export default card
