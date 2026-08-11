import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [110],
	set: Set,

	name: {
		'en-us': "Weezing",
		'fr-fr': "Smogogo",
		'es-es': "Weezing",
		'it-it': "Weezing",
		'pt-br': "Weezing",
		'de-de': "Smogmog"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Koffing",
		'fr-fr': "Smogo",
		'es-es': "Koffing",
		'it-it': "Koffing",
		'pt-br': "Koffing",
		'de-de': "Smogon"
	},

	attacks: [{
		name: {
			'en-us': "Mixin' Toxin",
			'fr-fr': "Cocktail de Toxines",
			'es-es': "Mezclatoxinas",
			'it-it': "Mischiatossine",
			'pt-br': "Mistureba de Toxinas",
			'de-de': "Giftgemisch"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused. Attach a Darkness Energy card from your discard pile to this Pokémon.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus. Attachez une carte Énergie Darkness de votre pile de défausse à ce Pokémon.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido. Une 1 carta de Energía Darkness de tu pila de descartes a este Pokémon.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso. Assegna a questo Pokémon una carta Energia Darkness dalla tua pila degli scarti.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso. Ligue 1 carta de Energia Darkness da sua pilha de descarte a este Pokémon.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Lege 1 Darkness-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		},

		cost: ["Darkness"]
	}, {
		name: {
			'en-us': "Smog Burst",
			'fr-fr': "Dégazage Polluant",
			'es-es': "Estallido de Polución",
			'it-it': "Scoppiosmog",
			'pt-br': "Nevoeiro de Fumaça Explosiva",
			'de-de': "Smogausbruch"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each Darkness Energy attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Darkness attachée à tous vos Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía Darkness unida a todos tus Pokémon.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia Darkness assegnata ai tuoi Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia Darkness ligada a todos os seus Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte Darkness-Energie 20 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Very rarely, a sudden mutation can result in two small Koffing twins becoming conjoined as a Weezing."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567203,
				tcgplayer: 241764
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567203,
				tcgplayer: 241764
			}
		},
	],
}

export default card
