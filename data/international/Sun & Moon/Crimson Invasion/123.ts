import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Warp Energy",
		'fr-fr': "Énergie de Distorsion",
		'es-es': "Energía Curvatura",
		'it-it': "Energia Curvatura",
		'pt-br': "Energia de Dobra",
		'de-de': "Verkrümmungs-Energie"
	},

	illustrator: undefined,
	rarity: "Secret Rare",
	category: "Energy",
	set: Set,

	effect: {
		'fr-fr': "Cette carte fournit de l’Énergie Colorless. \n\nLorsque vous attachez cette carte de votre main à votre Pokémon Actif, échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		'en-us': "This card provides Colorless Energy. \n\nWhen you attach this card from your hand to your Active Pokémon, switch that Pokémon with 1 of your Benched Pokémon.",
		'es-es': "Esta carta proporciona 1 Energía Colorless.\n\nCuando unas esta carta de tu mano a tu Pokémon Activo, cambia ese Pokémon por 1 de tus Pokémon en Banca.",
		'it-it': "Questa carta fornisce Energia Colorless. \n\nQuando assegni questa carta dalla tua mano al tuo Pokémon attivo, scambia quel Pokémon con uno della tua panchina.",
		'pt-br': "Esta carta fornece Energia Colorless. \n\nQuando você liga esta carta da sua mão ao seu Pokémon Ativo, troque aquele Pokémon por 1 dos seus Pokémon no Banco.",
		'de-de': "Diese Karte liefert Colorless-Energie.\n\nWenn du diese Karte aus deiner Hand an dein Aktives Pokémon anlegst, tausche jenes Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 311970,
		tcgplayer: 149148
	}
}

export default card
