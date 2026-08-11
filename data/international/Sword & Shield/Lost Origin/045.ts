import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [902],
	set: Set,

	name: {
		'en-us': "Hisuian Basculegion",
		'fr-fr': "Paragruel de Hisui",
		'es-es': "Basculegion de Hisui",
		'it-it': "Basculegion di Hisui",
		'pt-br': "Basculegion de Hisui",
		'de-de': "Hisui-Salmagnis"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Hisuian Basculin",
		'fr-fr': "Bargantua de Hisui",
		'es-es': "Basculin de Hisui",
		'it-it': "Basculin di Hisui",
		'pt-br': "Basculin de Hisui",
		'de-de': "Hisui-Barschuft"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Upstream Spirits",
			'fr-fr': "Esprits à Contre-Courant",
			'es-es': "Almas Contracorriente",
			'it-it': "Spiriti Controcorrente",
			'pt-br': "Espíritos da Piracema",
			'de-de': "Seelenfluss"
		},

		effect: {
			'en-us': "This attack does 20 damage for each basic Energy card in your discard pile. Then, shuffle those cards into your deck.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque carte Énergie de base dans votre pile de défausse. Mélangez ensuite ces cartes avec votre deck.",
			'es-es': "Este ataque hace 20 puntos de daño por cada carta de Energía Básica en tu pila de descartes. Después, pon esas cartas en tu baraja y barájalas todas.",
			'it-it': "Questo attacco infligge 20 danni per ogni carta Energia base nella tua pila degli scarti. Poi rimischia quelle carte nel tuo mazzo.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada carta de Energia básica na sua pilha de descarte. Em seguida, embaralhe aquelas cartas no seu baralho.",
			'de-de': "Diese Attacke fügt für jede Basis-Energiekarte in deinem Ablagestapel 20 Schadenspunkte zu. Mische jene Karten anschließend in dein Deck."
		},

		damage: "20×"
	}, {
		cost: ["Water"],

		name: {
			'en-us': "Water Shot",
			'fr-fr': "Tir Aquatique",
			'es-es': "Disparo Agua",
			'it-it': "Colpo Acquatico",
			'pt-br': "Disparo d'Água",
			'de-de': "Wassertreffer"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte 1 Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674055,
				tcgplayer: 283919
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674055,
				tcgplayer: 283919
			}
		},
	],
}

export default card
