import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Galarian Sirfetch'd",
		'fr-fr': "Palarticho de Galar",
		'es-es': "Sirfetch'd de Galar",
		'it-it': "Sirfetch'd di Galar",
		'pt-br': "Sirfetch'd de Galar",
		'de-de': "Galar-Lauchzelot"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [865],
	set: Set,
	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Galarian Farfetch'd",
		'fr-fr': "Canarticho de Galar",
		'es-es': "Farfetch'd de Galar",
		'it-it': "Farfetch'd di Galar",
		'pt-br': "Farfetch'd de Galar",
		'de-de': "Galar-Porenta"
	},

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Pierce",
				'fr-fr': "Transpercement",
				'es-es': "Perforar",
				'it-it': "Perforare",
				'pt-br': "Perfurar",
				'de-de': "Durchbohren"
			},

			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Meteor Assault",
				'fr-fr': "Joute Astrale",
				'es-es': "Asalto Estelar",
				'it-it': "Sfolgorassalto",
				'pt-br': "Ofensiva Meteórica",
				'de-de': "Sternensturm"
			},
			effect: {
				'en-us': "This Pokémon can't use Meteor Assault again until it leaves the Active Spot.",
				'fr-fr': "Ce Pokémon ne peut pas réutiliser Joute Astrale tant qu'il ne quitte pas le Poste Actif.",
				'es-es': "Este Pokémon no puede usar Asalto Estelar de nuevo hasta que deje el Puesto Activo.",
				'it-it': "Questo Pokémon non può più usare Sfolgorassalto finché non lascia la posizione attiva.",
				'pt-br': "Este Pokémon não poderá usar Ofensiva Meteórica novamente até sair do Campo Ativo.",
				'de-de': "Dieses Pokémon kann Sternensturm nicht wieder einsetzen, bis es die Aktive Position verlässt."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Only Farfetch'd that have survived many battles can attain this evolution. When this Pokémon's leek withers, it will retire from combat."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483369,
				tcgplayer: 219495
			}
		},
		{
			type: 'holo',
			foil: 'cracked-ice',
			thirdParty: {
				cardmarket: 547936
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483369,
				tcgplayer: 219495
			}
		},
	],
}

export default card
