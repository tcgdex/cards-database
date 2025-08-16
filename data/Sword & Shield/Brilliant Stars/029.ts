import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [99],
	set: Set,

	name: {
		en: "Kingler VMAX",
		fr: "Krabboss VMAX",
		es: "Kingler VMAX",
		it: "Kingler VMAX",
		pt: "Kingler VMAX",
		de: "Kingler VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],

	evolveFrom: {
		en: "Kingler V",
		fr: "Krabboss-V",
		es: "Kingler V",
		it: "Kingler-V",
		pt: "Kingler V",
		de: "Kingler-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Bubbles Galore",
			fr: "Bulles Abondantes",
			es: "Burbujas a Raudales",
			it: "Bolle a Volontà",
			pt: "Mundaréu de Bolhas",
			de: "Tropfenparty"
		},

		effect: {
			en: "Search your deck for up to 5 Water Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 5 cartes Énergie Water, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 5 cartas de Energía Water y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a cinque carte Energia Water e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 5 cartas de Energia Water no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 5 Water-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "G-Max Pincer",
			fr: "Pince G-Max",
			es: "Gigatenaza",
			it: "Gigachela",
			pt: "Pinça G-Max",
			de: "Giga-Kneifer"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 240
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608479,
		tcgplayer: 263728
	}
}

export default card
