import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Gourgeist",
		fr: "Banshitrouye",
		es: "Gourgeist",
		it: "Gourgeist",
		pt: "Gourgeist",
		de: "Pumpdjinn"
	},
	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		711,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Pumpkaboo",
		fr: "Pitrouille",
		es: "Pumpkaboo",
		it: "Pumpkaboo",
		pt: "Pumpkaboo",
		de: "Irrbis"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Gourgantic",
				fr: "Gigantrouye",
				es: "Gourgante",
				it: "Beffa di Gourgeist",
				pt: "Gourgântico",
				de: "Pu?mperlgesund"
			},
			effect: {
				en: "If this Pokémon has any Grass Energy attached to it, its maximum HP is 200.",
				fr: "Si de l'Énergie Grass est attachée à ce Pokémon, ses PV maximum sont de 200.",
				es: "Si este Pokémon tiene alguna Energía Grass unida a él, sus PS máximos son 200.",
				it: "Se questo Pokémon ha delle Energie Grass assegnate, i suoi PS massimi diventano 200.",
				pt: "Se este Pokémon possuir alguma Energia Grass ligada a ele, seu PS máximo será 200.",
				de: "Wenn an dieses Pokémon bereits Grass-Energie angelegt ist, verfügt es über 200 Grund-KP."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horror Note",
				fr: "Note Angoissante",
				es: "Nota Horripilante",
				it: "Nota di Paura",
				pt: "Nota de Horror",
				de: "Schaurige Note"
			},
			effect: {
				en: "This attack does 10 damage times the number of cards in your hand.",
				fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de cartes dans votre main.",
				es: "Este ataque hace 10 puntos de daño por cada carta de tu mano.",
				it: "Questo attacco infligge 10 danni per ogni carta che hai in mano.",
				pt: "Esse ataque causa 10 de danos vezes o número de cards em sua mão.",
				de: "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl der Karten auf deiner Hand zu."
			},
			damage: "10×",

		}
	],
	weaknesses: [
		{
			type: "Darkness",
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



}

export default card
