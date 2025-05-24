import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Falinks",
		fr: "Hexadron",
		es: "Falinks",
		it: "Falinks",
		pt: "Falinks",
		de: "Legios"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Form Ranks",
			fr: "Formation d'Escadron",
			es: "En Formación",
			it: "Formaschieramento",
			pt: "Formação de Escalão",
			de: "Formation bilden"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "All-Out Attack",
			fr: "Attaque Totale",
			es: "Ataque sin Cuartel",
			it: "Attacco-Tutto-per-Tutto",
			pt: "Atacar com Tudo",
			de: "Volle Attacke"
		},

		effect: {
			en: "If this Pokémon used Form Ranks during your last turn, this attack does 90 more damage.",
			fr: "Si ce Pokémon a utilisé Formation d'Escadron pendant votre dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si este Pokémon usó En Formación durante tu último turno, este ataque hace 90 puntos de daño más.",
			it: "Se questo Pokémon ha usato Formaschieramento durante il tuo ultimo turno, questo attacco infligge 90 danni in più.",
			pt: "Se este Pokémon usou Formação de Escalão durante o seu último turno, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn dieses Pokémon während deines letzten Zuges Formation bilden eingesetzt hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Gapao"
}

export default card
