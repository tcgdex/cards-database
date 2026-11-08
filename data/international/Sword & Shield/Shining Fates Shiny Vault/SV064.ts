import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [865],
	set: Set,

	name: {
		'fr-fr': "Palarticho de Galar",
		'en-us': "Galarian Sirfetch'd",
		'es-es': "Sirfetch'd de Galar",
		'it-it': "Sirfetch'd di Galar",
		'pt-br': "Sirfetch'd de Galar",
		'de-de': "Galar-Lauchzelot"
	},

	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		'fr-fr': "Canarticho de Galar",
		'en-us': "Galarian Farfetch'd"
	},

	attacks: [{
		name: {
			'fr-fr': "Transpercement",
			'en-us': "Pierce",
			'es-es': "Perforar",
			'it-it': "Perforare",
			'pt-br': "Perfurar",
			'de-de': "Durchbohren"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			'fr-fr': "Joute Astrale",
			'en-us': "Meteor Assault",
			'es-es': "Asalto Estelar",
			'it-it': "Sfolgorassalto",
			'pt-br': "Ofensiva Meteórica",
			'de-de': "Sternensturm"
		},

		effect: {
			'fr-fr': "Ce Pokémon ne peut pas réutiliser Joute Astrale tant qu'il ne quitte pas le Poste Actif.",
			'en-us': "This Pokémon can't use Meteor Assault again until it leaves the Active Spot.",
			'es-es': "Este Pokémon no puede usar Asalto Estelar de nuevo hasta que deje el Puesto Activo.",
			'it-it': "Questo Pokémon non può più usare Sfolgorassalto finché non lascia la posizione attiva.",
			'pt-br': "Este Pokémon não poderá usar Ofensiva Meteórica novamente até sair do Campo Ativo.",
			'de-de': "Dieses Pokémon kann Sternensturm erst wieder einsetzen, wenn es die Aktive Position verlässt."
		},

		damage: 180,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "Only Farfetch'd that have survived many battles can attain this evolution. When this Pokémon's leek withers, it will retire from combat."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539708,
				tcgplayer: 232432
			}
		},
	],
}

export default card
