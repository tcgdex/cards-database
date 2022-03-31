import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Probopass",
		fr: "Tarinorme",
		es: "Probopass",
		it: "Probopass",
		pt: "Probopass",
		de: "Voluminas"
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		476,
	],
	hp: 110,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Nosepass",
		fr: "Tarinor",
		es: "Nosepass",
		it: "Nosepass",
		pt: "Nosepass",
		de: "Nasgnet"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Triple Smash",
				fr: "Triple Éclate",
				es: "Golpe Triple",
				it: "Tripla Schiacciata",
				pt: "Pancada Tripla",
				de: "Dreifachschmetterer"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Esse ataque causa 30 de danos vezes o número de caras.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Reinforced Nose",
				fr: "Nez Renforcé",
				es: "Nariz Reforzada",
				it: "Fortenaso",
				pt: "Nariz Reforçado",
				de: "Verstärkte Nase"
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 50 more damage.",
				fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si este Pokémon tiene 1 carta de Herramienta Pokémon unida a él, este ataque hace 50 puntos de daño más.",
				it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 50 danni in più.",
				pt: "Se este Pokémon possuir um card de Ferramenta Pokémon ligado a ele, este ataque causará 50 de danos adicionais.",
				de: "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: "50+",

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
