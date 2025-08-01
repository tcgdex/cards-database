import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Dedenne",
		fr: "Dedenne",
		es: "Dedenne",
		it: "Dedenne",
		pt: "Dedenne",
		de: "Dedenne"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		702,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Find a Friend",
				fr: "Trouver un Ami",
				es: "Encontrar un Amigo",
				it: "Trovamico",
				pt: "Encontre um Amigo",
				de: "Freunde finden"
			},
			effect: {
				en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electrichain",
				fr: "Électrichaîne",
				es: "Cadena Eléctrica",
				it: "Elettrocatena",
				pt: "Corrente Elétrica",
				de: "Stromkette"
			},
			effect: {
				en: "If you have any Lightning Pokémon on your Bench, this attack does 30 more damage.",
				fr: "Si vous avez un Pokémon Lightning sur votre Banc, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si tienes algún Pokémon Lightning en tu Banca, este ataque hace 30 puntos de daño más.",
				it: "Se hai dei Pokémon Lightning in panchina, questo attacco infligge 30 danni in più.",
				pt: "Se você tiver algum Pokémon Lightning no seu Banco, este ataque causará 30 pontos de dano a mais.",
				de: "Wenn du mindestens 1 Lightning-Pokémon auf deiner Bank hast, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 355602
	}
}

export default card
