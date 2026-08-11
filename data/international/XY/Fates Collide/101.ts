import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Fossil Excavation Kit",
		'fr-fr': "Kit d'Excavation de Fossiles",
		'es-es': "Kit para Búsqueda de Fósiles",
		'it-it': "Kit Scavafossili",
		'pt-br': "Kit de Escavação de Fósseis",
		'de-de': "Fossilausgrabungsset"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Ajoutez de votre pile de défausse à votre main une combinaison de 2 cartes choisies parmi Fossile Nautile Amonita, Fossile Dôme Kabuto et Vieil Ambre Ptéra.",
		'en-us': "Put 2 in any combination of Helix Fossil Omanyte, Dome Fossil Kabuto, or Old Amber Aerodactyl cards from your discard pile into your hand.",
		'es-es': "Pon 2 cartas de Fósil Hélix Omanyte, Fósil Domo Kabuto o Ámbar Viejo Aerodactyl, en cualquier combinación, de tu pila de descartes en tu mano.",
		'it-it': "Prendi due carte Helixfossile di Omanyte, Domofossile di Kabuto o Ambra Antica di Aerodactyl, in qualsiasi combinazione, dalla tua pila degli scarti e aggiungile a quelle che hai in mano.",
		'pt-br': "Coloque 2 cards de Fóssil Espiral de Omanyte, Fóssil Cúpula de Kabuto ou Âmbar Velho de Aerodactyl da sua pilha de descarte em sua mão.",
		'de-de': "Nimm eine beliebige Kombination aus 2 der folgenden Karten von deinem Ablagestapel auf deine Hand: Helixfossil Amonitas, Domfossil Kabuto oder Altbernstein Aerodactyl."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 289921,
		tcgplayer: 117873
	}
}

export default card
