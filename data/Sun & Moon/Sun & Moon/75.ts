import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Palossand",
		fr: "Trépassable",
		es: "Palossand",
		it: "Palossand",
		pt: "Palossand",
		de: "Colossand"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		770,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Sandygast",
		fr: "Bacabouh",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wall of Sand",
				fr: "Muraille de Sable",
				es: "Muro de Arena",
				it: "Murosabbia",
				pt: "Muralha de Areia",
				de: "Sandfeste"
			},
			effect: {
				en: "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Este Pokémon recebe 20 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Diesem Pokémon werden durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Absorb Vitality",
				fr: "Absorb Vitalité",
				es: "Absorber Vitalidad",
				it: "Vitassorbimento",
				pt: "Absorção de Vitalidade",
				de: "Vitalitätsabsorber"
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent’s Active Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				es: "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				it: "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
				pt: "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
				de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
			},
			damage: 50,

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
		cardmarket: 295386
	}
}

export default card
