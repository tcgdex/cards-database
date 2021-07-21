import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
		es: "Araquanid",
		it: "Araquanid",
		pt: "Araquanid",
		de: "Aranestro"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		752,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Dewpider",
		fr: "Araqua",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Water Bubble",
				fr: "Aquabulle",
				es: "Pompa",
				it: "Bolladacqua",
				pt: "Bolha de Água",
				de: "Wasserblase"
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent’s Fire Pokémon.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Fire de votre adversaire.",
				es: "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon Fire de tu rival.",
				it: "Previeni tutti i danni da attacchi inflitti a questo Pokémon dai Pokémon Fire del tuo avversario.",
				pt: "Previne todo o dano causado a este Pokémon por ataques dos Pokémon Fire do seu oponente.",
				de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Fire-Pokémon deines Gegners zugefügt wird."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Edge",
				fr: "Aqua-Dague",
				es: "Filo Agua",
				it: "Acquataglio",
				pt: "Aqua Gume",
				de: "Aquaschneide"
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
