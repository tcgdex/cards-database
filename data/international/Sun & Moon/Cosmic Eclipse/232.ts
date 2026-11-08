import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "N’s Resolve",
		'fr-fr': "Résolution de N",
		'es-es': "Decisión de N",
		'it-it': "Grinta di N",
		'pt-br': "Resolução do N",
		'de-de': "Ns Entschluss"
	},
	illustrator: "Mana Ibe",
	rarity: "Ultra Rare",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Défaussez les 6 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie de base, attachez-les à l’un de vos Pokémon Dragon de Banc.",
		'en-us': "Discard the top 6 cards of your deck. If any of those cards are basic Energy cards, attach them to 1 of your Benched Dragon Pokémon.",
		'es-es': "Descarta las 6 primeras cartas de tu baraja. Si entre esas cartas hay cartas de Energía Básica, únelas a 1 de tus Pokémon Dragon en Banca.",
		'it-it': "Scarta le prime sei carte del tuo mazzo. Se fra queste ci sono delle carte Energia base, assegnale a uno dei tuoi Pokémon Dragon in panchina.",
		'pt-br': "Descarte as 6 primeiras cartas do seu baralho. Se houver cartas de Energia básica entre elas, ligue-as a 1 dos seus Pokémon Dragon no Banco.",
		'de-de': "Lege die obersten 6 Karten deines Decks auf deinen Ablagestapel. Wenn unter jenen Karten Basis-Energiekarten sind, lege sie an 1 Dragon-Pokémon auf deiner Bank an."
	},
	trainerType: "Supporter",

}

export default card
