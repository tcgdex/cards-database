import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [822],
	set: Set,

	name: {
		'fr-fr': "Bleuseille",
		'en-us': "Corvisquire",
		'es-es': "Corvisquire",
		'it-it': "Corvisquire",
		'pt-br': "Corvisquire",
		'de-de': "Kranoviz"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		'fr-fr': "Minisange",
		'en-us': "Rookidee"
	},

	attacks: [{
		name: {
			'fr-fr': "Picore",
			'en-us': "Pluck",
			'es-es': "Picoteo",
			'it-it': "Spennata",
			'pt-br': "Colher",
			'de-de': "Pflücker"
		},

		effect: {
			'fr-fr': "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			'en-us': "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			'es-es': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			'it-it': "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			'pt-br': "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Bec Vrille",
			'en-us': "Drill Peck",
			'es-es': "Pico Taladro",
			'it-it': "Perforbecco",
			'pt-br': "Bico Broca",
			'de-de': "Bohrschnabel"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "Smart enough to use tools in battle, these Pokémon have been seen picking up rocks and flinging them or using ropes to wrap up enemies."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539898,
				tcgplayer: 232491
			}
		},
	],
}

export default card
