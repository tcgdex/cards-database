import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Trevenant",
		fr: "Desséliande",
		es: "Trevenant",
		it: "Trevenant",
		pt: "Trevenant",
		de: "Trombork"
	},
	illustrator: "Hiroyuki Yamamoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		709,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Phantump",
		fr: "Brocélôme",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poltergeist",
				fr: "Poltergeist",
				es: "Poltergeist",
				it: "Poltergeist",
				pt: "Poltergeist",
				de: "Poltergeist"
			},
			effect: {
				en: "Your opponent reveals their hand. This attack does 30 damage for each Trainer card you find there.",
				fr: "Votre adversaire dévoile sa main. Cette attaque inflige 30 dégâts pour chaque carte Dresseur que vous y trouvez.",
				es: "Tu rival enseña las cartas de su mano. Este ataque hace 30 puntos de daño por cada carta de Entrenador que encuentres entre ellas.",
				it: "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 30 danni per ogni carta Allenatore presente tra quelle carte.",
				pt: "Seu oponente revela a própria mão. Este ataque causa 30 pontos de dano para cada carta de Treinador que encontrar lá.",
				de: "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der Trainerkarten zu, die du dort findest."
			},
			damage: "30×",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Horn Leech",
				fr: "Encornebois",
				es: "Asta Drenaje",
				it: "Legnicorno",
				pt: "Chifre Sugador",
				de: "Holzgeweih"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 90,

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
