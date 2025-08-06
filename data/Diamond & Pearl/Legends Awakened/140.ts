import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Azelf",
		fr: "Créfadet",
		de: "Tobutz"
	},

	illustrator: "Shizurow",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		482,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Psychic Aura",
				fr: "Aura psy",
				de: "Psycho-Aura"
			},
			effect: {
				en: "Each of your Psychic Pokémon has no Weakness.",
				fr: "Chacun de vos Pokémon Psychic ne possède pas de Faiblesse.",
				de: "Jedes deiner -Pokémon hat keine Schwäche mehr."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Deep Balance",
				fr: "Bon équilibre",
				de: "Tiefenausgleich"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. Put 1 damage counter on that Pokémon for each Energy attached to all of your opponent's Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Placez 1 marqueur de dégât sur ce Pokémon pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
				de: "Wähle 1 Pokémon deines Gegners. Lege für jede Energie, die an allen Pokémon deines Gegners angelegt ist, 1 Schadensmarke auf das gewählte Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278168,
		tcgplayer: 83677
	}
}

export default card
