import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Pyukumuku",
		fr: "Concombaffe",
		es: "Pyukumuku",
		it: "Pyukumuku",
		pt: "Pyukumuku",
		de: "Gufa"
	},

	illustrator: "Asako Ito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		771,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la Famille",
				es: "Llamar a la Familia",
				it: "Cerca Famiglia",
				pt: "Chamar a Família",
				de: "Familienruf"
			},
			effect: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surprise Fist",
				fr: "Poing Surprise",
				es: "Puño Sorprendente",
				it: "Pugno a Sorpresa",
				pt: "Punho Surpresa",
				de: "Überraschungsfaust"
			},
			effect: {
				en: "You and your opponent play Rock-Paper-Scissors. If you win, this attack does 60 more damage.",
				fr: "Jouez à pierre-ciseaux-feuille avec votre adversaire. Si vous gagnez, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Tu rival y tú jugáis a piedra, papel, tijeras. Si ganas tú, este ataque hace 60 puntos de daño más.",
				it: "Tu e il tuo avversario giocate a morra cinese. Se vinci, questo attacco infligge 60 danni in più.",
				pt: "Você e seu oponente jogam “pedra, papel e tesoura”. Se você vencer, este ataque causará 60 pontos de dano a mais.",
				de: "Du und dein Gegner spielt Schere/Stein/Papier. Wenn du gewinnst, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372344
	}
}

export default card
