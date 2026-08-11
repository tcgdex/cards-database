import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [778],
	set: Set,
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		'en-us': "Mimikyu",
		'fr-fr': "Mimiqui",
		'de-de': "Mimigma",
		'es-es': "Mimikyu",
		'pt-br': "Mimikyu",
		'it-it': "Mimikyu"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Maraudage",
			'de-de': "Mopsen",
			'es-es': "Birlar",
			'pt-br': "Furtar",
			'it-it': "Furtarello",
			'en-us': "Filch"
		},

		effect: {
			'fr-fr': "Piochez 2 cartes.",
			'de-de': "Ziehe 2 Karten.",
			'es-es': "Roba 2 cartas.",
			'pt-br': "Compre 2 cartas.",
			'it-it': "Pesca due carte.",
			'en-us': "Draw 2 cards."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'fr-fr': "Griffe Trempée",
			'de-de': "Nasse Klaue",
			'es-es': "Garra Húmeda",
			'pt-br': "Garra Molhada",
			'it-it': "Artiglio Bagnato",
			'en-us': "Wet Claw"
		},

		effect: {
			'fr-fr': "Ajoutez à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
			'de-de': "Gib deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand.",
			'es-es': "Pon 1 Energía unida al Pokémon Activo de tu rival en su mano.",
			'pt-br': "Coloque 1 Energia ligada ao Pokémon Ativo do seu oponente na mão dele(a).",
			'it-it': "Prendi un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungila alle carte che ha in mano.",
			'en-us': "Put an Energy attached to your opponent's Active Pokémon into their hand."
		},

		damage: 40
	}],

	retreat: 1,

	thirdParty: {
		cardmarket: 576735
	}
}

export default card
