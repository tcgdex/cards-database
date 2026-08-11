import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [282],
	set: Set,

	name: {
		'en-us': "Radiant Gardevoir",
		'fr-fr': "Gardevoir Radieux",
		'es-es': "Gardevoir Radiante",
		'it-it': "Gardevoir Lucente",
		'pt-br': "Gardevoir Radiante",
		'de-de': "Strahlendes Guardevoir"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Loving Veil",
			'fr-fr': "Voile Affectueux",
			'es-es': "Velo Amoroso",
			'it-it': "Velo Affettuoso",
			'pt-br': "Véu de Afeição",
			'de-de': "Liebevoller Schleier"
		},

		effect: {
			'en-us': "All of your Pokémon take 20 less damage from attacks from your opponent's Pokémon V (after applying Weakness and Resistance).",
			'fr-fr': "Tous vos Pokémon subissent 20 dégâts de moins provenant des attaques des Pokémon-V de votre adversaire (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques de los Pokémon V de tu rival hacen 20 puntos de daño menos a todos tus Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "I tuoi Pokémon subiscono 20 danni in meno dagli attacchi dei Pokémon-V del tuo avversario, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Todos os seus Pokémon recebem 20 pontos de dano a menos de ataques dos Pokémon V do seu oponente (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Allen deinen Pokémon werden durch Attacken von Pokémon-V deines Gegners 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko",
			'es-es': "Psíquico",
			'it-it': "Psichico",
			'pt-br': "Psíquico",
			'de-de': "Psychokinese"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu."
		},

		damage: "70+"
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670813,
				tcgplayer: 283945
			}
		},
	],
}

export default card
