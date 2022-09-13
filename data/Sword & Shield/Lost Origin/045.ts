import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Basculegion",
		fr: "Paragruel de Hisui",
		es: "Basculegion de Hisui",
		it: "Basculegion di Hisui",
		pt: "Basculegion de Hisui",
		de: "Hisui-Salmagnis"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Hisuian Basculin",
		fr: "Bargantua de Hisui",
		es: "Basculin de Hisui",
		it: "Basculin di Hisui",
		pt: "Basculin de Hisui",
		de: "Hisui-Barschuft"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Upstream Spirits",
			fr: "Esprits à Contre-Courant",
			es: "Almas Contracorriente",
			it: "Spiriti Controcorrente",
			pt: "Espíritos da Piracema",
			de: "Seelenfluss"
		},

		effect: {
			en: "This attack does 20 damage for each basic Energy card in your discard pile. Then, shuffle those cards into your deck.",
			fr: "Cette attaque inflige 20 dégâts pour chaque carte Énergie de base dans votre pile de défausse. Mélangez ensuite ces cartes avec votre deck.",
			es: "Este ataque hace 20 puntos de daño por cada carta de Energía Básica en tu pila de descartes. Después, pon esas cartas en tu baraja y barájalas todas.",
			it: "Questo attacco infligge 20 danni per ogni carta Energia base nella tua pila degli scarti. Poi rimischia quelle carte nel tuo mazzo.",
			pt: "Este ataque causa 20 pontos de dano para cada carta de Energia básica na sua pilha de descarte. Em seguida, embaralhe aquelas cartas no seu baralho.",
			de: "Diese Attacke fügt für jede Basis-Energiekarte in deinem Ablagestapel 20 Schadenspunkte zu. Mische jene Karten anschließend in dein Deck."
		},

		damage: "20×"
	}, {
		cost: ["Water"],

		name: {
			en: "Water Shot",
			fr: "Tir Aquatique",
			es: "Disparo Agua",
			it: "Colpo Acquatico",
			pt: "Disparo d'Água",
			de: "Wassertreffer"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte 1 Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	}
}

export default card