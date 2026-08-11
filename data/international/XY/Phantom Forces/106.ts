import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Target Whistle Team Flare Gear",
		'fr-fr': "Sifflet de Rappel Matos Team Flare",
		'es-es': "Silbato Objetivo Equipo del Team Flare",
		'it-it': "Fischio Mirato [Dotazione del Team Flare]",
		'pt-br': "Apito Alvo – Equipamento da Equipe Flare",
		'de-de': "Visierflöte Team Flare-Zubehör"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Prenez un Pokémon de base dans la pile de défausse de votre adversaire et placez-le sur son Banc.",
		'en-us': "Put a Basic Pokémon from your opponent's discard pile onto his or her Bench.",
		'es-es': "Pon 1 Pokémon Básico de la pila de descartes de tu rival en su Banca.",
		'it-it': "Prendi un Pokémon Base dalla pila degli scarti del tuo avversario e mettilo nella sua panchina.",
		'pt-br': "Coloque um Pokémon Básico da pilha de descarte do seu oponente no Banco desse oponente.",
		'de-de': "Nimm 1 Basis-Pokémon vom Ablagestapel deines Gegners und lege es auf seine Bank."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281913
	}
}

export default card
