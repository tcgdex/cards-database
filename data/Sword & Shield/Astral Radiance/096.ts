import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Mightyena"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Poochyena",
		fr: "Medhyèna",
		es: "Poochyena",
		it: "Poochyena",
		pt: "Poochyena",
		de: "Fiffyen"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Hustle Bark",
			fr: "Aboiement Acharné",
			es: "Ladrido Apremiante",
			it: "Abbaiare Frenetico",
			pt: "Latido Alvoroçado",
			de: "Ehrgeiziges Bellen"
		},

		effect: {
			en: "If your opponent has any Pokémon VMAX in play, this Pokémon's attacks cost ColorlessColorlessColorless less.",
			fr: "Si votre adversaire a au moins un Pokémon-VMAX en jeu, les attaques de ce Pokémon coûtent ColorlessColorlessColorless de moins.",
			es: "Si tu rival tiene algún Pokémon VMAX en juego, los ataques de este Pokémon cuestan ColorlessColorlessColorless menos.",
			it: "Se il tuo avversario ha dei Pokémon-VMAX in gioco, il costo degli attacchi di questo Pokémon è ridotto di ColorlessColorlessColorless.",
			pt: "Se o seu oponente tiver algum Pokémon VMAX em jogo, os ataques deste Pokémon custarão ColorlessColorlessColorless a menos.",
			de: "Wenn dein Gegner mindestens 1 Pokémon-VMAX im Spiel hat, verringern sich die Kosten der Attacken dieses Pokémon um ColorlessColorlessColorless."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Wild Tackle",
			fr: "Tacle Brutal",
			es: "Placaje Salvaje",
			it: "Azionferoce",
			pt: "Investida Feroz",
			de: "Wilder Tackle"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			pt: "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card