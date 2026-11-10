import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Heat Rotom ex",
		fr: "Motisma Chaleur‑ex",
		de: "Hitze-Rotom-ex",
		es: "Rotom Calor ex",
		it: "Rotom Calore-ex",
		pt: "Rotom Calor ex",
		'es-mx': "Rotom Calor ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Rewarm",
			fr: "Réchauffage",
			de: "Erhitzen",
			es: "Volver a Calentar",
			it: "Scaldare",
			pt: "Requentar",
			'es-mx': "Recalentar"
		},

		effect: {
			en: "This attack does 30 damage for each Basic <span class=\"energy-symbol Fire\" title=\"Fire\">Fire</span> Energy card in your discard pile. Then, shuffle those cards into your deck.",
			fr: "Cette attaque inflige 30 dégâts pour chaque carte Énergie <span class=\"energy-symbol Fire\" title=\"Feu\">Fire</span> de base dans votre pile de défausse. Mélangez ensuite ces cartes avec votre deck.",
			de: "Diese Attacke fügt für jede Basis-<span class=\"energy-symbol Fire\" title=\"Feuer\">Fire</span>-Energiekarte in deinem Ablagestapel 30 Schadenspunkte zu. Mische jene Karten anschließend in dein Deck.",
			es: "Este ataque hace 30 puntos de daño por cada carta de Energía <span class=\"energy-symbol Fire\" title=\"Fuego\">Fire</span> Básica en tu pila de descartes. Después, pon esas cartas en tu baraja y barájalas todas.",
			it: "Questo attacco infligge 30 danni per ogni carta Energia base <span class=\"energy-symbol Fire\" title=\"Fuoco\">Fire</span> nella tua pila degli scarti. Poi rimischia quelle carte nel tuo mazzo.",
			pt: "Este ataque causa 30 pontos de dano para cada carta de Energia <span class=\"energy-symbol Fire\" title=\"Fogo\">Fire</span> Básica na sua pilha de descarte. Em seguida, embaralhe aquelas cartas no seu baralho.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada carta de Energía <span class=\"energy-symbol Fire\" title=\"Fuego\">Fire</span> Básica en tu pila de descartes. Después, baraja esas cartas en tu mazo."
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Strong Flare",
			fr: "Flamboiement Intense",
			de: "Großes Auflodern",
			es: "Fuerte Llama",
			it: "Vampata Potente",
			pt: "Labareda Forte",
			'es-mx': "Llama Fulminante"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon."
		},

		damage: 170,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 727589,
		cardmarket: 918838
	}
}

export default card