import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "The Masked Royal",
		'fr-fr': "Royal Mask",
		'es-es': "Royale, el Enmascarado",
		'it-it': "Mister Royale",
		'pt-br': "Real Mascarado",
		'de-de': "Mask Royale"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Attachez une carte Énergie de base de votre main à l’un de vos Pokémon Grass, Fire ou Water de Niveau 2.",
		'en-us': "Attach a basic Energy card from your hand to one of your Stage 2 Grass, Fire, or Water Pokémon.",
		'es-es': "Une 1 carta de Energía Básica de tu mano a 1 de tus Pokémon Grass, Fire o Water de Fase 2.",
		'it-it': "Assegna a uno dei tuoi Pokémon Grass, Fire o Water di Fase 2 una carta Energia base dalla tua mano.",
		'pt-br': "Ligue 1 carta de Energia básica da sua mão a 1 dos seus Pokémon Grass, Fire, ou Water Estágio 2.",
		'de-de': "Lege 1 Basis-Energiekarte aus deiner Hand an 1 deiner Grass-, Fire- oder Water-Phase-2-Pokémon an."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 361377,
		tcgplayer: 171000
	}
}

export default card
