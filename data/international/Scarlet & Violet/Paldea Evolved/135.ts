import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [248],
	set: Set,

	name: {
		'fr-fr': "Tyranocif",
		'en-us': "Tyranitar",
		'es-es': "Tyranitar",
		'it-it': "Tyranitar",
		'pt-br': "Tyranitar",
		'de-de': "Despotar"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Ymphect",
		'en-us': "Pupitar",
		'es-es': "Pupitar",
		'it-it': "Pupitar",
		'pt-br': "Pupitar",
		'de-de': "Pupitar"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Débâcle",
			'en-us': "Rout",
			'es-es': "Esparcir",
			'it-it': "Stanamento",
			'pt-br': "Efeito Cascata",
			'de-de': "Verheerung"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			'en-us': "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			'fr-fr': "Montagne Effroyable",
			'en-us': "Dread Mountain",
			'es-es': "Montaña Pavorosa",
			'it-it': "Monte della Paura",
			'pt-br': "Montanha do Pavor",
			'de-de': "Berg des Grauens"
		},

		effect: {
			'fr-fr': "Défaussez les 4 cartes du dessus de votre deck.",
			'en-us': "Discard the top 4 cards of your deck.",
			'es-es': "Descarta las 4 primeras cartas de tu baraja.",
			'it-it': "Scarta le prime quattro carte del tuo mazzo.",
			'pt-br': "Descarte as 4 cartas de cima do seu baralho.",
			'de-de': "Lege die obersten 4 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 230
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715610,
				tcgplayer: 497596,
				cardtrader: 248792
			}
		},
		{
			type: 'holo',
			stamp: ['set-logo'],
			thirdParty: {
				cardmarket: 845427
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 858716
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715610,
				tcgplayer: 497596,
				cardtrader: 248792
			}
		},
	],

	illustrator: "hncl",

	description: {
		'en-us': "Extremely strong, it can change the landscape. It is so insolent that it doesn't care about others.",
	},
}

export default card
