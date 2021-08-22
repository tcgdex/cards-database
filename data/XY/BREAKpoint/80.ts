import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Ferrothorn",
		fr: "Noacier",
		es: "Ferrothorn",
		it: "Ferrothorn",
		pt: "Ferrothorn",
		de: "Tentantel"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		598,
	],
	hp: 100,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Ferroseed",
		fr: "Grindur",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Claw",
				fr: "Griffe Acier",
				es: "Garra Metal",
				it: "Ferrartigli",
				pt: "Garra de Metal",
				de: "Metallklaue"
			},

			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spike Lash",
				fr: "Coup d’Fouet à Clous",
				es: "Azote Púas",
				it: "Frustapunte",
				pt: "Chicote Espinhoso",
				de: "Stachelhieb"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent’s Pokémon for each Colorless in that Pokémon’s Retreat Cost. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire pour chaque Colorless dans son Coût de Retraite. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 10 puntos de daño a cada uno de los Pokémon de tu rival por cada Colorless en su Coste de Retirada. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 10 danni a ciascuno dei Pokémon del tuo avversario per ogni Colorless nel suo costo di ritirata. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 10 de danos a todos os Pokémon do seu oponente para cada Colorless no Custo para Recuar daquele Pokémon. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
				de: "Dieser Angriff fügt jedem Pokémon deines Gegners 10 Schadenspunkte für jedes Colorless-Symbol in den Rückzugskosten des jeweiligen Pokémon zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

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
