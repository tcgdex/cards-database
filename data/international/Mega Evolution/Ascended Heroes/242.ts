import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Carbink",
		'fr-fr': "Strassie",
		'es-es': "Carbink",
		'es-mx': "Carbink",
		'de-de': "Rocara",
		'it-it': "Carbink",
		'pt-br': "Carbink"
	},

	illustrator: "sui",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [703],
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Double Type",
			'fr-fr': "Type Double",
			'es-es': "Doble Tipo",
			'es-mx': "Doble Tipo",
			'de-de': "Doppeltyp",
			'it-it': "Doppio Tipo",
			'pt-br': "Tipo Duplo"
		},

		effect: {
			'en-us': "As long as this Pokémon is in play, it is {F} and {P} type.",
			'fr-fr': "Tant que ce Pokémon est en jeu, il est de type {F} et {P}.",
			'es-es': "Mientras este Pokémon esté en juego, es de tipo {F} y {P}.",
			'es-mx': "Mientras este Pokémon esté en juego, es de tipo {F} y {P}.",
			'de-de': "Solange dieses Pokémon im Spiel ist, ist es vom Typ {F} und {P}.",
			'it-it': "Fintanto che questo Pokémon è in gioco, è di tipo {F} e {P}.",
			'pt-br': "Enquanto este Pokémon estiver em jogo, será um Pokémon de tipo {F} e {P}."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Counter Jewel",
			'fr-fr': "Joyau Riposte",
			'es-es': "Joya Contraataque",
			'es-mx': "Joya de Contraataque",
			'de-de': "Konterjuwel",
			'it-it': "Controgemma",
			'pt-br': "Contra-ataque Joia"
		},

		effect: {
			'en-us': "If your opponent has 2 or fewer Prize cards remaining, this attack does 100 more damage.",
			'fr-fr': "S'il reste 2 cartes Récompense ou moins à votre adversaire, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Si a tu rival le quedan 2 cartas de Premio o menos, este ataque hace 100 puntos de daño más.",
			'es-mx': "Si a tu rival le quedan 2 cartas de Premio o menos, este ataque hace 100 puntos de daño más.",
			'de-de': "Wenn dein Gegner 2 oder weniger verbleibende Preiskarten hat, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			'it-it': "Se il tuo avversario ha due o meno carte Premio rimanenti, questo attacco infligge 100 danni in più.",
			'pt-br': "Se o seu oponente tiver 2 ou menos cartas de Prêmio restantes, este ataque causará 100 pontos de dano a mais."
		},

		damage: "70+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869853,
				tcgplayer: 676054
			}
		}
	],
}

export default card
