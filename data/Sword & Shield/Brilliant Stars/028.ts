import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Kingler V",
		fr: "Krabboss V",
		es: "Kingler V",
		it: "Kingler V",
		pt: "Kingler V",
		de: "Kingler V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Falling Bubbles",
			fr: "Chute de Bulles",
			es: "Lluvia de Burbujas",
			it: "Bolle Cadenti",
			pt: "Desabar de Bolhas",
			de: "Wie die Tropfen fallen"
		},

		effect: {
			en: "Flip a coin. If heads, search your deck for up to 5 Water Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck jusqu'à 5 cartes Énergie Water, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Lanza 1 moneda. Si sale cara, busca en tu baraja hasta 5 cartas de Energía Water y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo fino a cinque carte Energia Water e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Jogue 1 moeda. Se sair cara, procure por até 5 cartas de Energia Water no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			de: "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach bis zu 5 Water-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Raging Pincer",
			fr: "Pince Enragée",
			es: "Tenaza Furiosa",
			it: "Chela Furiosa",
			pt: "Pinça Indomada",
			de: "Tobende Kneifer"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 200
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
		cardmarket: 608478
	}
}

export default card
