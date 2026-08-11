import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Energy Reset",
		'fr-fr': "Réinitialisation d'Énergie",
		'es-es': "Reinicio de Energía",
		'it-it': "Ripresa Energetica",
		'pt-br': "Energia Redefinida",
		'de-de': "Energierückstellung"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Placez dans votre main autant d'Énergies attachées à votre Pokémon que vous voulez.",
		'en-us': "Put as many Energy attached to your Pokémon as you like into your hand.",
		'es-es': "Pon tantas Energías unidas a tus Pokémon como quieras en tu mano.",
		'it-it': "Prendi tutte le Energie assegnate ai tuoi Pokémon che vuoi e aggiungile alle carte che hai in mano.",
		'pt-br': "Coloque tantas Energias ligadas aos seus Pokémon quanto desejar em sua mão.",
		'de-de': "Nimm beliebig viele an deine Pokémon angelegten Energien auf deine Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 289918,
		tcgplayer: 117870
	}
}

export default card
