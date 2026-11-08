import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Galarian Sirfetch'd V",
		'fr-fr': "Palarticho de Galar V",
		'es-es': "Sirfetch'd de Galar V",
		'it-it': "Sirfetch'd di Galar V",
		'pt-br': "Sirfetch'd de Galar V",
		'de-de': "Galar-Lauchzelot V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Promo",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Resolute Spear",
			'fr-fr': "Lance Inébranlable",
			'es-es': "Lanza Resuelta",
			'it-it': "Lancia Risoluta",
			'pt-br': "Lança Resoluta",
			'de-de': "Zielsicherer Speer"
		},

		effect: {
			'en-us': "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may move any amount of {F} Energy from your other Pokémon to it.",
			'fr-fr': "Une fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc vers le Poste Actif, vous pouvez déplacer autant d'Énergies {F} que vous le voulez de vos autres Pokémon vers celui-ci.",
			'es-es': "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca al Puesto Activo, puedes mover cualquier cantidad de Energías {F} de tus otros Pokémon a este Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla tua panchina in posizione attiva, puoi spostare un numero qualsiasi di Energie {F} dai tuoi altri Pokémon su questo Pokémon.",
			'pt-br': "Uma vez durante o seu turno, quando este Pokémon for movido do seu Banco para o Campo Ativo, você poderá mover qualquer quantidade de Energia {F} dos seus outros Pokémon para este Pokémon.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon von deiner Bank in die Aktive Position wechselt, kannst du beliebig viele {F}-Energien von deinen anderen Pokémon auf dieses Pokémon verschieben."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Meteor Smash",
			'fr-fr': "Impact Astral",
			'es-es': "Golpe Meteoro",
			'it-it': "Meteorschiacciata",
			'pt-br': "Impacto Meteórico",
			'de-de': "Meteoreinschlag"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 200,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	stage: "Basic",
	dexId: [865],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 505860
	}
}

export default card
