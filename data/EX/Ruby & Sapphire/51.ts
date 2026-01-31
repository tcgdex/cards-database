import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Carvanha",
		fr: "Carvanha",
		de: "Kanivanha"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		318,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rough Skin",
				fr: "Peau dure",
				de: "Rauhaut"
			},
			effect: {
				en: "If Carvanha is your Active Pokémon and is damaged by an opponent's attack (even if Carvanha is Knocked Out), put 1 damage counter on the Attacking Pokémon.",
				fr: "Si Carvanha est votre Pokémon Actif et que l'attaque de votre adversaire lui inflige des dégâts (même si Carvanha est mis K.O), placez un marqueur de dégât sur le Pokémon Attaquant.",
				de: "Wenn Kanivanha dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn Kanivanha dadurch kampfunfähig wird), legst du 1 Schadensmarke auf das Angreifende Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Big Bite",
				fr: "Grosse morsure",
				de: "Mächtiger Biss"
			},
			effect: {
				en: "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite tant que le prochain tour de votre adversaire n'est pas terminé.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 275699,
		tcgplayer: 84111
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
