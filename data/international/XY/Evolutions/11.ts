import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Charizard",
		'fr-fr': "Dracaufeu",
		'es-es': "Charizard",
		'it-it': "Charizard",
		'pt-br': "Charizard",
		'de-de': "Glurak"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 150,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'es-es': "Charmeleon",
		'it-it': "Charmeleon",
		'pt-br': "Charmeleon",
		'de-de': "Glutexo"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Energy Burn",
				'fr-fr': "Dépense d'Énergie",
				'es-es': "Quema Energía",
				'it-it': "Bruciaenergia",
				'pt-br': "Energia Queimada",
				'de-de': "Energie verbrennen"
			},
			effect: {
				'en-us': "All Energy attached to this Pokémon are Fire Energy instead of their usual type.",
				'fr-fr': "Toutes les Énergies attachées à ce Pokémon sont des Énergies Fire au lieu de leur type habituel.",
				'es-es': "Todas las Energías unidas a este Pokémon son Energías Fire en vez de su tipo habitual.",
				'it-it': "Tutte le Energie assegnate a questo Pokémon sono Energie Fire anziché del loro solito tipo.",
				'pt-br': "Toda Energia ligada a este Pokémon é Energia Fire em vez do tipo usual.",
				'de-de': "Alle Energien, die an dieses Pokémon angelegt sind, liefern Fire-Energie anstelle ihres normalen Typs."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Fire Spin",
				'fr-fr': "Danse Flamme",
				'es-es': "Giro Fuego",
				'it-it': "Turbofuoco",
				'pt-br': "Chama Furacão",
				'de-de': "Feuerwirbel"
			},
			effect: {
				'en-us': "Discard 3 Energy attached to this Pokémon.",
				'fr-fr': "Défaussez 3 Énergies attachées à ce Pokémon.",
				'es-es': "Descarta 3 Energías unidas a este Pokémon.",
				'it-it': "Scarta tre Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 3 Energias ligadas a este Pokémon.",
				'de-de': "Lege 3 an dieses Pokémon angelegte Energien auf deinen Ablagestapel."
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its wings can carry this Pokémon close to an altitude of 4,600 feet. It blows out fire at very high temperatures.",
	},

	thirdParty: {
		cardmarket: 293368,
		tcgplayer: 124026
	}
}

export default card
