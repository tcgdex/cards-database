import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Hexadron",
		en: "Falinks",
		es: "Falinks",
		it: "Falinks",
		pt: "Falinks",
		de: "Legios"
	},

	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	attacks: [{
		name: {
			fr: "Appel à la Famille",
			en: "Call for Family",
			es: "Llamar a la Familia",
			it: "Cerca Famiglia",
			pt: "Chamar a Família",
			de: "Familienruf"
		},

		effect: {
			fr: "Cherchez jusqu'à 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Attaque de Groupe",
			en: "Team Attack",
			es: "Ataque en Equipo",
			it: "Attacco in Team",
			pt: "Ataque em Equipe",
			de: "Teamangriff"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon de Banc ayant « Hexadron » dans son nom.",
			en: "This attack does 30 damage for each of your Benched Pokémon that has \"Falinks\" in its name.",
			es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en Banca que tenga \"Falinks\" en su nombre.",
			it: "Questo attacco infligge 30 danni per ogni Pokémon nella tua panchina con “Falinks” nel nome.",
			pt: "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon no Banco que tenha \"Falinks” em seu nome.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank, bei dem „Legios“ zum Namen gehört, 30 Schadenspunkte zu."
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "Five of them are troopers, and one is the brass. The brass's orders are absolute."
	},

	thirdParty: {
		cardmarket: 539758
	}
}

export default card
