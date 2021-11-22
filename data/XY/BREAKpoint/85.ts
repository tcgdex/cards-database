import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Aromatisse",
		fr: "Cocotine",
		es: "Aromatisse",
		it: "Aromatisse",
		pt: "Aromatisse",
		de: "Parfinesse"
	},
	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		683,
	],
	hp: 90,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Spritzee",
		fr: "Fluvetin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dizzying Cologne",
				fr: "Arôme Enivrant",
				es: "Colonia Mareante",
				it: "Profumo Stordente",
				pt: "Colônia Estonteante",
				de: "Schwindelerregendes Parfüm"
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 40 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon-EX, este ataque hace 40 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon-EX, questo attacco infligge 40 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon-EX, este ataque causará 40 de danos adicionais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-EX ist, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Fairy Wind",
				fr: "Vent Féérique",
				es: "Viento Feérico",
				it: "Vento di Fata",
				pt: "Vento de Fada",
				de: "Feenbrise"
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
