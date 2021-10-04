import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Copperajah VMAX",
		fr: "Pachyradjah VMAX",
		es: "Copperajah VMAX",
		it: "Copperajah VMAX",
		pt: "Copperajah VMAX",
		de: "Patinaraja VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Copperajah V",
		fr: "Pachyradjah-V",
		es: "Copperajah V",
		it: "Copperajah-V",
		pt: "Copperajah V",
		de: "Patinaraja-V"
	},

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Dangerous Nose",
				fr: "Nez Dangereux",
				es: "Trompa Peligrosa",
				it: "Naso Pericoloso",
				pt: "Tromba Perigosa",
				de: "Gefährliche Nase"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Basic Pokémon, this attack does 100 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, cette attaque inflige 100 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Básico, este ataque hace 100 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon Base, questo attacco infligge 100 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, este ataque causará 100 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, fügt diese Attacke 100 Schadenspunkte mehr zu."
			},
			damage: "100+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "G-Max Hammer",
				fr: "Marteau G-Max",
				es: "Gigamazazo",
				it: "Gigamaglio",
				pt: "Martelo G-Max",
				de: "Giga-Schlaghammer"
			},

			damage: 240,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 4,
	hp: 340,
	types: ["Metal"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX"
}

export default card
