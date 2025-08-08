import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [282],
	set: Set,

	name: {
		en: "Radiant Gardevoir",
		fr: "Gardevoir Radieux",
		es: "Gardevoir Radiante",
		it: "Gardevoir Lucente",
		pt: "Gardevoir Radiante",
		de: "Strahlendes Guardevoir"
	},

	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Loving Veil",
			fr: "Voile Affectueux",
			es: "Velo Amoroso",
			it: "Velo Affettuoso",
			pt: "Véu de Afeição",
			de: "Liebevoller Schleier"
		},

		effect: {
			en: "All of your Pokémon take 20 less damage from attacks from your opponent's Pokémon V (after applying Weakness and Resistance).",
			fr: "Tous vos Pokémon subissent 20 dégâts de moins provenant des attaques des Pokémon-V de votre adversaire (après application de la Faiblesse et de la Résistance).",
			es: "Los ataques de los Pokémon V de tu rival hacen 20 puntos de daño menos a todos tus Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "I tuoi Pokémon subiscono 20 danni in meno dagli attacchi dei Pokémon-V del tuo avversario, dopo aver applicato debolezza e resistenza.",
			pt: "Todos os seus Pokémon recebem 20 pontos de dano a menos de ataques dos Pokémon V do seu oponente (depois de aplicar Fraqueza e Resistência).",
			de: "Allen deinen Pokémon werden durch Attacken von Pokémon-V deines Gegners 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Psychic",
			fr: "Psyko",
			es: "Psíquico",
			it: "Psichico",
			pt: "Psíquico",
			de: "Psychokinese"
		},

		effect: {
			en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu."
		},

		damage: "70+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	}
}

export default card
