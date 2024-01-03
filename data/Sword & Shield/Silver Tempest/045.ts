import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Phione",
		fr: "Phione",
		es: "Phione",
		it: "Phione",
		pt: "Phione",
		de: "Phione"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Sea Feast",
			fr: "Festin Océanique",
			es: "Festín Marino",
			it: "Festa del Mare",
			pt: "Banquete Marinho",
			de: "Meeresschmaus"
		},

		effect: {
			en: "Search your deck for up to 3 Basic Water Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 Pokémon Water de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 3 Pokémon Water Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre Pokémon Base Water e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 Pokémon Water Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 3 Basis-Water-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			es: "Chapoteo Ondulante",
			it: "Schizzi d'Onda",
			pt: "Onda Borrifante",
			de: "Wellenplatscher"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card