import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Arceus VSTAR",
		fr: "Arceus VSTAR",
		es: "Arceus V-ASTRO",
		it: "Arceus V ASTRO",
		pt: "Arceus V-ASTRO",
		de: "Arceus VSTAR"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],

	evolveFrom: {
		en: "Arceus V",
		fr: "Arceus-V",
		es: "Arceus V",
		it: "Arceus-V",
		pt: "Arceus V",
		de: "Arceus-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Trinity Nova",
			fr: "Nova Trinité",
			es: "Lucero Trinidad",
			it: "Nova Triade",
			pt: "Supernova Tríptica",
			de: "Nova der Dreiheit"
		},

		effect: {
			en: "Search your deck for up to 3 basic Energy cards and attach them to your Pokémon V in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 cartes Énergie de base, puis attachez-les à vos Pokémon-V comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 3 cartas de Energía Básica y únelas a tus Pokémon V de la manera que desees. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre carte Energia base e assegnale ai tuoi Pokémon-V nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 cartas de Energia básica no seu baralho e ligue-as aos seus Pokémon V como desejar. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten und lege sie beliebig an deine Pokémon-V an. Mische anschließend dein Deck."
		},

		damage: 200
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608669,
		tcgplayer: 263904
	}
}

export default card