import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [870],
	set: Set,

	name: {
		'en-us': "Falinks",
		'fr-fr': "Hexadron",
		'es-es': "Falinks",
		'it-it': "Falinks",
		'pt-br': "Falinks",
		'de-de': "Legios"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Form Ranks",
			'fr-fr': "Formation d'Escadron",
			'es-es': "En Formación",
			'it-it': "Formaschieramento",
			'pt-br': "Formação de Escalão",
			'de-de': "Formation bilden"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "All-Out Attack",
			'fr-fr': "Attaque Totale",
			'es-es': "Ataque sin Cuartel",
			'it-it': "Attacco-Tutto-per-Tutto",
			'pt-br': "Atacar com Tudo",
			'de-de': "Volle Attacke"
		},

		effect: {
			'en-us': "If this Pokémon used Form Ranks during your last turn, this attack does 90 more damage.",
			'fr-fr': "Si ce Pokémon a utilisé Formation d'Escadron pendant votre dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si este Pokémon usó En Formación durante tu último turno, este ataque hace 90 puntos de daño más.",
			'it-it': "Se questo Pokémon ha usato Formaschieramento durante il tuo ultimo turno, questo attacco infligge 90 danni in più.",
			'pt-br': "Se este Pokémon usou Formação de Escalão durante o seu último turno, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn dieses Pokémon während deines letzten Zuges Formation bilden eingesetzt hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785942,
				tcgplayer: 567314
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785942,
				tcgplayer: 567314
			}
		},
	],

	illustrator: "Gapao",

}

export default card
