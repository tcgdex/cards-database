import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [169],
	set: Set,

	name: {
		'fr-fr': "Nostenfer VMAX",
		'en-us': "Crobat VMAX",
		'es-es': "Crobat VMAX",
		'it-it': "Crobat VMAX",
		'pt-br': "Crobat VMAX",
		'de-de': "Iksbat VMAX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 300,
	types: ["Darkness"],

	evolveFrom: {
		'fr-fr': "Nostenfer-V",
		'en-us': "Crobat V"
	},

	attacks: [{
		name: {
			'fr-fr': "Poison Évasif",
			'en-us': "Stealth Poison",
			'es-es': "Veneno Sigiloso",
			'it-it': "Veleno Subdolo",
			'pt-br': "Veneno Furtivo",
			'de-de': "Tarngift"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'en-us': "Your opponent's Active Pokémon is now Poisoned. Switch this Pokémon with 1 of your Benched Pokémon.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 70,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			'fr-fr': "Tranchomax",
			'en-us': "Max Cutter",
			'es-es': "Maxicorte",
			'it-it': "Dynalama",
			'pt-br': "Cortador Max",
			'de-de': "Dyna-Schnitt"
		},

		damage: 180,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539248,
				tcgplayer: 232515
			}
		},
	],
}

export default card
