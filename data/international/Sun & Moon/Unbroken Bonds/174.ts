import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Giovanni’s Exile",
		'fr-fr': "Exil de Giovanni",
		'es-es': "Exilio de Giovanni",
		'it-it': "Esilio di Giovanni",
		'pt-br': "Exílio do Giovanni",
		'de-de': "Giovannis Exil"
	},
	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Défaussez jusqu’à 2 de vos Pokémon de Banc qui n’ont pas de marqueurs de dégâts, ainsi que toutes les cartes qui leur sont attachées.",
		'en-us': "Discard up to 2 of your Benched Pokémon that have no damage counters on them and all cards attached to them.",
		'es-es': "Descarta hasta 2 de tus Pokémon en Banca que no tengan contadores de daño sobre ellos y todas las cartas unidas a ellos.",
		'it-it': "Scarta fino a due dei tuoi Pokémon in panchina che non hanno segnalini danno insieme a tutte le carte a essi assegnate.",
		'pt-br': "Descarte até 2 dos seus Pokémon no Banco que não tenham contadores de dano neles e todas as cartas ligadas a eles.",
		'de-de': "Lege bis zu 2 Pokémon auf deiner Bank, auf denen keine Schadensmarken liegen, und alle an sie angelegten Karten auf deinen Ablagestapel."
	},
	trainerType: "Supporter",

}

export default card
