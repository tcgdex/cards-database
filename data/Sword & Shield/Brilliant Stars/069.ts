import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Mimikyu VMAX",
		fr: "Mimiqui VMAX",
		es: "Mimikyu VMAX",
		it: "Mimikyu VMAX",
		pt: "Mimikyu VMAX",
		de: "Mimigma VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 300,
	types: ["Psychic"],

	evolveFrom: {
		en: "Mimikyu V",
		fr: "Mimiqui-V",
		es: "Mimikyu V",
		it: "Mimikyu-V",
		pt: "Mimikyu V",
		de: "Mimigma-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Ominous Numbers",
			fr: "Compte Inquiétant",
			es: "Números de Mal Agüero",
			it: "Numeri Funesti",
			pt: "Números Tenebrosos",
			de: "Unheilvolle Zahlen"
		},

		effect: {
			en: "Put 4 damage counters on your opponent's Pokémon in any way you like. If you played Acerola's Premonition from your hand during this turn, place 13 damage counters instead.",
			fr: "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît. Si vous avez joué Prémonition de Margie de votre main pendant ce tour, placez 13 marqueurs de dégâts à la place.",
			es: "Pon 4 contadores de daño en los Pokémon de tu rival de la manera que desees. Si has jugado Presentimiento de Zarala de tu mano durante este turno, pon 13 contadores de daño en vez de 4.",
			it: "Metti quattro segnalini danno sui Pokémon del tuo avversario nel modo che preferisci. Se hai giocato Premonizione di Malpi dalla tua mano durante questo turno, invece mettine 13.",
			pt: "Coloque 4 contadores de dano nos Pokémon do seu oponente como desejar. Se você jogou Premonição da Acerola da sua mão durante este turno, coloque 13 contadores de dano ao invés de 4.",
			de: "Lege 4 Schadensmarken beliebig auf die Pokémon deines Gegners. Wenn du Lolas Vorahnung während dieses Zuges aus deiner Hand gespielt hast, platziere stattdessen 13 Schadensmarken."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Max Shadow",
			fr: "Ombromax",
			es: "Maxipenumbra",
			it: "Dynaombra",
			pt: "Sombra Max",
			de: "Dyna-Schatten"
		},

		effect: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival.",
			it: "Scarta una carta a caso dalla mano del tuo avversario.",
			pt: "Descarte 1 carta aleatória da mão do seu oponente.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608519,
		tcgplayer: 263785
	}
}

export default card
