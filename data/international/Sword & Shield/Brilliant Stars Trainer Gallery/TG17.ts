import { Card } from "models/database/card"
import Set from "../Brilliant Stars Trainer Gallery"

const card: Card = {
	dexId: [778],
	set: Set,

	name: {
		'en-us': "Mimikyu VMAX",
		'fr-fr': "Mimiqui VMAX",
		'es-es': "Mimikyu VMAX",
		'it-it': "Mimikyu VMAX",
		'pt-br': "Mimikyu VMAX",
		'de-de': "Mimigma VMAX"
	},

	illustrator: "Naoki Saito",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 300,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Mimikyu V",
		'fr-fr': "Mimiqui-V",
		'es-es': "Mimikyu V",
		'it-it': "Mimikyu-V",
		'pt-br': "Mimikyu V",
		'de-de': "Mimigma-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Ominous Numbers",
			'fr-fr': "Compte Inquiétant",
			'es-es': "Números de Mal Agüero",
			'it-it': "Numeri Funesti",
			'pt-br': "Números Tenebrosos",
			'de-de': "Unheilvolle Zahlen"
		},

		effect: {
			'en-us': "Put 4 damage counters on your opponent's Pokémon in any way you like. If you played Acerola's Premonition from your hand during this turn, place 13 damage counters instead.",
			'fr-fr': "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît. Si vous avez joué Prémonition de Margie de votre main pendant ce tour, placez 13 marqueurs de dégâts à la place.",
			'es-es': "Pon 4 contadores de daño en los Pokémon de tu rival de la manera que desees. Si has jugado Presentimiento de Zarala de tu mano durante este turno, pon 13 contadores de daño en vez de 4.",
			'it-it': "Metti quattro segnalini danno sui Pokémon del tuo avversario nel modo che preferisci. Se hai giocato Premonizione di Malpi dalla tua mano durante questo turno, invece mettine 13.",
			'pt-br': "Coloque 4 contadores de dano nos Pokémon do seu oponente como desejar. Se você jogou Premonição da Acerola da sua mão durante este turno, coloque 13 contadores de dano ao invés de 4.",
			'de-de': "Lege 4 Schadensmarken beliebig auf die Pokémon deines Gegners. Wenn du Lolas Vorahnung während dieses Zuges aus deiner Hand gespielt hast, platziere stattdessen 13 Schadensmarken."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Max Shadow",
			'fr-fr': "Ombromax",
			'es-es': "Maxipenumbra",
			'it-it': "Dynaombra",
			'pt-br': "Sombra Max",
			'de-de': "Dyna-Schatten"
		},

		effect: {
			'en-us': "Discard a random card from your opponent's hand.",
			'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
			'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
			'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
			'pt-br': "Descarte 1 carta aleatória da mão do seu oponente.",
			'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608749,
				tcgplayer: 263785
			}
		},
	],
}

export default card
