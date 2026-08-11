import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [150],
	set: Set,

	name: {
		'en-us': "Mewtwo",
		'fr-fr': "Mewtwo",
		'es-es': "Mewtwo",
		'it-it': "Mewtwo",
		'pt-br': "Mewtwo",
		'de-de': "Mewtu"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Psypump",
			'fr-fr': "Pompe Psy",
			'es-es': "Psicobomba",
			'it-it': "Psicopompa",
			'pt-br': "Bomba Psíquica",
			'de-de': "Psipumpe"
		},

		effect: {
			'en-us': "Attach up to 2 Psychic Energy cards from your discard pile to 1 of your Pokémon.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie Psychic de votre pile de défausse à l'un de vos Pokémon.",
			'es-es': "Une hasta 2 cartas de Energía Psychic de tu pila de descartes a 1 de tus Pokémon.",
			'it-it': "Assegna a uno dei tuoi Pokémon fino a due carte Energia Psychic dalla tua pila degli scarti.",
			'pt-br': "Ligue até 2 cartas de Energia Psychic da sua pilha de descarte a 1 dos seus Pokémon.",
			'de-de': "Lege bis zu 2 Psychic-Energiekarten aus deinem Ablagestapel an 1 deiner Pokémon an."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Limit Break",
			'fr-fr': "Brèche Frontière",
			'es-es': "Golpe Límite",
			'it-it': "Frangilimite",
			'pt-br': "Limite Intenso",
			'de-de': "Limitbruch"
		},

		effect: {
			'en-us': "If your opponent has 3 or fewer Prize cards remaining, this attack does 90 more damage.",
			'fr-fr': "S'il reste 3 cartes Récompense ou moins à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si a tu rival le quedan 3 cartas de Premio o menos, este ataque hace 90 puntos de daño más.",
			'it-it': "Se il tuo avversario ha tre o meno carte Premio rimanenti, questo attacco infligge 90 danni in più.",
			'pt-br': "Se o seu oponente tiver 3 ou menos cartas de Prêmio restantes, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn dein Gegner 3 oder weniger verbleibende Preiskarten hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "A Pokémon created by recombining Mew's genes. It's said to have the most savage heart among Pokémon.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691776,
				tcgplayer: 478173
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691776,
				tcgplayer: 478173
			}
		},
	],
}

export default card
