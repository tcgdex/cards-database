import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Gengar GL",
		fr: "Ectoplasma  Niv. 65",
		de: "Gengar GL"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		94,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
				de: "Konfustrahl"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Attack and Hide",
				fr: "Attaquer et se cacher",
				de: "Angreifen und Verstecken"
			},
			effect: {
				en: "Put 3 damage counters on 1 of your opponent's Pokémon. You may shuffle Gengar and all cards attached to it back into your deck.",
				fr: "Placez 3 marqueurs de dégât sur 1 des Pokémon de votre adversaire. Vous pouvez mélanger Ectoplasma  ainsi que toutes les cartes qui lui sont attachées avec votre deck.",
				de: "Lege 3 Schadensmarken auf 1 Pokémon deines Gegners. Du kannst Gengar GL und alle Karten, die an es angelegt sind, in dein Deck mischen."
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
