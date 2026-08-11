import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [561],
	set: Set,

	name: {
		'en-us': "Sigilyph",
		'fr-fr': "Cryptéro",
		'es-es': "Sigilyph",
		'it-it': "Sigilyph",
		'pt-br': "Sigilyph",
		'de-de': "Symvolara"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Tri Recharge",
			'fr-fr': "Triple Recharge",
			'es-es': "Triple Recarga",
			'it-it': "Ricarica Tripla",
			'pt-br': "Trirrecarga",
			'de-de': "Dreifache Aufladung"
		},

		effect: {
			'en-us': "Flip 3 coins. Attach a number of basic Energy cards up to the number of heads from your discard pile to your Benched Pokémon in any way you like.",
			'fr-fr': "Lancez 3 pièces. Attachez comme il vous plaît de votre pile de défausse à vos Pokémon de Banc un nombre de cartes Énergie de base inférieur ou égal au nombre de côtés face obtenus.",
			'es-es': "Lanza 3 monedas. Une una cantidad de cartas de Energía Básica, igual o inferior al número de caras que te hayan salido, de tu pila de descartes a tus Pokémon en Banca de la manera que desees.",
			'it-it': "Lancia tre volte una moneta. Assegna ai tuoi Pokémon in panchina un numero di carte Energia base dalla tua pila degli scarti uguale o inferiore al numero di volte in cui è uscito testa nel modo che preferisci.",
			'pt-br': "Jogue 3 moedas. Ligue um número de cartas de Energia básica da sua pilha de descarte até o número de caras aos seus Pokémon no Banco como desejar.",
			'de-de': "Wirf 3 Münzen. Lege bis zu so viele Basis-Energiekarten, wie du Kopf geworfen hast, aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko",
			'es-es': "Psíquico",
			'it-it': "Psichico",
			'pt-br': "Psíquico",
			'de-de': "Psychokinese"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Psychic power allows these Pokémon to fly. Some say they were the guardians of an ancient city. Others say they were the guardians' emissaries.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608516,
				tcgplayer: 263782
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608516,
				tcgplayer: 263782
			}
		},
	],
}

export default card
