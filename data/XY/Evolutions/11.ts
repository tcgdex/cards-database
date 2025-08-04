import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		es: "Charizard",
		it: "Charizard",
		pt: "Charizard",
		de: "Glurak"
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
		en: "Charmeleon",
		fr: "Reptincel",
		es: "Charmeleon",
		it: "Charmeleon",
		pt: "Charmeleon",
		de: "Glutexo"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Energy Burn",
				fr: "Dépense d'Énergie",
				es: "Quema Energía",
				it: "Bruciaenergia",
				pt: "Energia Queimada",
				de: "Energie verbrennen"
			},
			effect: {
				en: "All Energy attached to this Pokémon are Fire Energy instead of their usual type.",
				fr: "Toutes les Énergies attachées à ce Pokémon sont des Énergies Fire au lieu de leur type habituel.",
				es: "Todas las Energías unidas a este Pokémon son Energías Fire en vez de su tipo habitual.",
				it: "Tutte le Energie assegnate a questo Pokémon sono Energie Fire anziché del loro solito tipo.",
				pt: "Toda Energia ligada a este Pokémon é Energia Fire em vez do tipo usual.",
				de: "Alle Energien, die an dieses Pokémon angelegt sind, liefern Fire-Energie anstelle ihres normalen Typs."
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
				en: "Fire Spin",
				fr: "Danse Flamme",
				es: "Giro Fuego",
				it: "Turbofuoco",
				pt: "Chama Furacão",
				de: "Feuerwirbel"
			},
			effect: {
				en: "Discard 3 Energy attached to this Pokémon.",
				fr: "Défaussez 3 Énergies attachées à ce Pokémon.",
				es: "Descarta 3 Energías unidas a este Pokémon.",
				it: "Scarta tre Energie assegnate a questo Pokémon.",
				pt: "Descarte 3 Energias ligadas a este Pokémon.",
				de: "Lege 3 an dieses Pokémon angelegte Energien auf deinen Ablagestapel."
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

	thirdParty: {
		cardmarket: 293368,
		tcgplayer: 124026
	}
}

export default card
