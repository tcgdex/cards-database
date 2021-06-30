import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Marowak",
		fr: "Ossatueur",
		es: "Marowak",
		it: "Marowak",
		pt: "Marowak",
		de: "Knogga"
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		105,
	],
	hp: 110,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Bone Rush",
				fr: "Charge-Os",
				es: "Ataque Óseo",
				it: "Ossoraffica",
				pt: "Fúria de Ossos",
				de: "Knochenhatz"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 50 damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 50 dégâts pour chaque côté face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño por cada cara.",
				it: "Lancia una moneta finché non esce croce. Questo attacco infligge 50 danni ogni volta che esce testa.",
				pt: "Jogue 1 moeda até sair coroa. Este ataque causa 50 pontos de dano para cada cara.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
			},
			damage: "50×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Assault Boom",
				fr: "Dégât d’Assaut",
				es: "Bomba de Asalto",
				it: "Boatassalto",
				pt: "Ataque Explosivo",
				de: "Offensiv-Donner"
			},
			effect: {
				en: "If your opponent’s Active Pokémon has a Pokémon Tool card attached to it, this attack does 70 more damage.",
				fr: "Si une carte Outil Pokémon est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival tiene 1 carta de Herramienta Pokémon unida a él, este ataque hace 70 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha una carta Oggetto Pokémon assegnata, questo attacco infligge 70 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente tiver alguma carta de Ferramenta Pokémon ligada a ele, este ataque causará 70 pontos de dano a mais.",
				de: "Wenn an das Aktive Pokémon deines Gegners eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "70+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
