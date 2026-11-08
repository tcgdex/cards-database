import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [306],
	set: Set,

	name: {
		'en-us': "Aggron VMAX",
		'fr-fr': "Galeking VMAX",
		'es-es': "Aggron VMAX",
		'it-it': "Aggron VMAX",
		'pt-br': "Aggron VMAX",
		'de-de': "Stolloss VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Aggron V",
		'fr-fr': "Galeking-V",
		'es-es': "Aggron V",
		'it-it': "Aggron-V",
		'pt-br': "Aggron V",
		'de-de': "Stolloss-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Cracking Stomp",
			'fr-fr': "Piétinement Écrasant",
			'es-es': "Pisotón Quebrantador",
			'it-it': "Spaccapestone",
			'pt-br': "Pisoteada Demolidora",
			'de-de': "Demolierender Stampfer"
		},

		effect: {
			'en-us': "Discard the top card of your opponent's deck.",
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
		},

		damage: 150
	}, {
		cost: ["Metal", "Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Max Take Down",
			'fr-fr': "Bélieromax",
			'es-es': "Maxiderribo",
			'it-it': "Dynariduttore",
			'pt-br': "Desmantelar Max",
			'de-de': "Dyna-Bodycheck"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 270
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608643,
				tcgplayer: 263815
			}
		},
	],
}

export default card
