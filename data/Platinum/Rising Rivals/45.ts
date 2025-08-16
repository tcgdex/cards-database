import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Leafeon",
		fr: "Phyllali Niv. 49",
		de: "Folipurba"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		470,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Energy Refresh",
				fr: "Regain d'énergie",
				de: "Energie-Heilung"
			},
			effect: {
				en: "As long as Leafeon is your Active Pokémon, whenever you attach an Energy card from your hand to 1 of your Pokémon, remove 2 damage counters from that Pokémon.",
				fr: "Tant que Phyllali est votre Pokémon Actif, lorsque vous attachez une carte Énergie de votre main à 1 de vos Pokémon, retirez à ce Pokémon 2 marqueurs de dégât.",
				de: "Solange Folipurba dein Aktives Pokémon ist, entferne jedes Mal, wenn du 1 Energiekarte von deiner Hand an 1 deiner Pokémon anlegst, 2 Schadensmarken von diesem Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Plus Energy",
				fr: "Énergie plus",
				de: "Bonusenergie"
			},
			effect: {
				en: "Attach a basic Energy card from your hand to 1 of your Pokémon.",
				fr: "Attachez une carte Énergie de base de votre main à 1 de vos Pokémon.",
				de: "Lege 1 Basis-Energiekarte von deiner Hand an 1 deiner Pokémon an."
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Soothing Scent",
				fr: "Senteur apaisante",
				de: "Beruhigender Duft"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278619,
		tcgplayer: 86679
	}
}

export default card
