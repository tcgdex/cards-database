import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Carbink",
		fr: "Strassie",
		es: "Carbink",
		'es-mx': "Carbink",
		de: "Rocara",
		it: "Carbink",
		pt: "Carbink"
	},

	illustrator: "Eri Kamei",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [703],

	abilities: [{
		type: "Ability",

		name: {
			en: "Double Type",
			fr: "Type Double",
			es: "Doble Tipo",
			'es-mx': "Doble Tipo",
			de: "Doppeltyp",
			it: "Doppio Tipo",
			pt: "Tipo Duplo"
		},

		effect: {
			en: "As long as this Pokémon is in play, it is {F} and {P} type.",
			fr: "Tant que ce Pokémon est en jeu, il est de type {F} et {P}.",
			es: "Mientras este Pokémon esté en juego, es de tipo {F} y {P}.",
			'es-mx': "Mientras este Pokémon esté en juego, es de tipo {F} y {P}.",
			de: "Solange dieses Pokémon im Spiel ist, ist es vom Typ {F} und {P}.",
			it: "Fintanto che questo Pokémon è in gioco, è di tipo {F} e {P}.",
			pt: "Enquanto este Pokémon estiver em jogo, será um Pokémon de tipo {F} e {P}."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Counter Jewel",
			fr: "Joyau Riposte",
			es: "Joya Contraataque",
			'es-mx': "Joya de Contraataque",
			de: "Konterjuwel",
			it: "Controgemma",
			pt: "Contra-ataque Joia"
		},

		effect: {
			en: "If your opponent has 2 or fewer Prize cards remaining, this attack does 100 more damage.",
			fr: "S'il reste 2 cartes Récompense ou moins à votre adversaire, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si a tu rival le quedan 2 cartas de Premio o menos, este ataque hace 100 puntos de daño más.",
			'es-mx': "Si a tu rival le quedan 2 cartas de Premio o menos, este ataque hace 100 puntos de daño más.",
			de: "Wenn dein Gegner 2 oder weniger verbleibende Preiskarten hat, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			it: "Se il tuo avversario ha due o meno carte Premio rimanenti, questo attacco infligge 100 danni in più.",
			pt: "Se o seu oponente tiver 2 ou menos cartas de Prêmio restantes, este ataque causará 100 pontos de dano a mais."
		},

		damage: "70+"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675929,
		cardmarket: 869728
	}
}

export default card