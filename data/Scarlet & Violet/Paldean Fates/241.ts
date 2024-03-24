import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Chi-Yu ex",
		fr: "Yuyu-ex",
		es: "Chi-Yu ex",
		it: "Chi-Yu-ex",
		de: "Yuyu-ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Jealously Singe",
			fr: "Jalousement Roussi",
			es: "Quemadura Envidiosa",
			it: "Scottata Invidiosa",
			de: "Brennender Neid"
		},

		effect: {
			en: "Discard the top 2 cards of your opponent's deck.",
			fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			es: "Descarta las 2 primeras cartas de la baraja de tu rival.",
			it: "Scarta le prime due carte del mazzo del tuo avversario.",
			de: "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Flame Surge",
			fr: "Déferlante Enflammée",
			es: "Oleada de Llamas",
			it: "Ondata Fiammante",
			de: "Flammenwoge"
		},

		effect: {
			en: "Choose up to 3 of your Benched Pokémon. For each of those Pokémon, search your deck for a Basic Fire Energy card and attach it to that Pokémon. Then, shuffle your deck.",
			fr: "Choisissez jusqu'à 3 de vos Pokémon de Banc. Pour chacun de ces Pokémon, cherchez dans votre deck une carte Énergie Fire de base, puis attachez-la à ce Pokémon-là. Mélangez ensuite votre deck.",
			es: "Elige hasta 3 de tus Pokémon en Banca. Para cada uno de esos Pokémon, busca en tu baraja 1 carta de Energía Fire Básica y únela a ese Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Scegli fino a tre dei tuoi Pokémon in panchina. Per ognuno di essi, cerca nel tuo mazzo una carta Energia base Fire e assegnala a quel Pokémon. Poi rimischia le carte del tuo mazzo.",
			de: "Wähle bis zu 3 Pokémon auf deiner Bank. Durchsuche für jedes jener Pokémon dein Deck nach 1 Basis-Fire-Energiekarte und lege sie an jenes Pokémon an. Mische anschließend dein Deck."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card