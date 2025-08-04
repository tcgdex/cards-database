import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
		es: "Rhyperior",
		it: "Rhyperior",
		pt: "Rhyperior",
		de: "Rihornior"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		464,
	],

	hp: 160,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Rhydon",
		fr: "Rhinoféros",
		es: "Rhydon",
		it: "Rhydon",
		pt: "Rhydon",
		de: "Rizeros"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Rock Blast",
				fr: "Boule Roc",
				es: "Pedrada",
				it: "Cadutamassi",
				pt: "Explosão de Rocha",
				de: "Felswurf"
			},
			effect: {
				en: "Flip a coin for each Fighting Energy attached to this Pokémon. This attack does 50 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque Énergie Fighting attachée à ce Pokémon. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 1 moneda por cada Energía Fighting unida a este Pokémon. Este ataque hace 50 puntos de daño por cada cara.",
				it: "Lancia una moneta per ogni Energia Fighting assegnata a questo Pokémon. Questo attacco infligge 50 danni ogni volta che esce testa.",
				pt: "Jogue uma moeda para cada Energia Fighting ligada a este Pokémon. Esse ataque causa 50 de danos vezes o número de caras.",
				de: "Wirf für jede an dieses Pokémon angelegte Fighting-Energie 1 Münze. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Wrecker",
				fr: "Roc-Boulet",
				es: "Romperrocas",
				it: "Devastomasso",
				pt: "Demolidor de Pedras",
				de: "Felswerfer"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance. This Pokémon can't attack during your next turn.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance. Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia. Este Pokémon no puede atacar durante tu próximo turno.",
				it: "Il danno di questo attacco non è influenzato dalla debolezza o dalla resistenza. Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				pt: "Os danos desse ataque não são afetados por Fraqueza ou Resistência. Este Pokémon não poderá atacar durante sua próxima vez de jogar.",
				de: "Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert. Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 281399,
		tcgplayer: 88747
	}
}

export default card
