import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Entei",
		'fr-fr': "Entei",
		'es-es': "Entei",
		'it-it': "Entei",
		'pt-br': "Entei",
		'de-de': "Entei"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		244,
	],

	hp: 120,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Burning Roar",
				'fr-fr': "Rugissement Brûlant",
				'es-es': "Rugido Ardiente",
				'it-it': "Bruciaboato",
				'pt-br': "Rugido Queimador",
				'de-de': "Feuriger Brüller"
			},
			effect: {
				'en-us': "Discard the top 4 cards of your deck. If any of those cards are Fire Energy cards, attach them to your Pokémon in any way you like.",
				'fr-fr': "Défaussez les 4 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie Fire, attachez-les à vos Pokémon, de la manière que vous voulez.",
				'es-es': "Descarta las 4 primeras cartas de tu baraja. Si entre esas cartas hay cartas de Energía Fire, únelas a tus Pokémon de la manera que desees.",
				'it-it': "Scarta le prime quattro carte del tuo mazzo. Se fra queste ci sono delle carte Energia Fire, assegnale a piacimento ai tuoi Pokémon.",
				'pt-br': "Descarte os 4 cards de cima do seu baralho. Escolha quaisquer destes cards de Energia Fire e ligue-os aos seus Pokémon do jeito que desejar.",
				'de-de': "Lege die obersten 4 Karten deines Decks auf deinen Ablagestapel. Wenn darunter Fire-Energiekarten sind, lege sie beliebig an deine Pokémon an."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Combat Blaze",
				'fr-fr': "Brasier de Combat",
				'es-es': "Combate Explosivo",
				'it-it': "Scontrardente",
				'pt-br': "Fulgor de Combate",
				'de-de': "Gefechtsbrand"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon nella panchina del tuo avversario.",
				'pt-br': "Este ataque causa 20 de danos adicionais a cada Pokémon no Banco do seu oponente.",
				'de-de': "Dieser Angriff fügt 20 weitere Schadenspunkte für jedes Pokémon auf der Bank deines Gegners zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is said that when it roars, a volcano erupts somewhere around the globe.",
	},

	thirdParty: {
		cardmarket: 284195,
		tcgplayer: 100620
	}
}

export default card
