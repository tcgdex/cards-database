import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Palossand",
		'fr-fr': "Trépassable",
		'es-es': "Palossand",
		'it-it': "Palossand",
		'pt-br': "Palossand",
		'de-de': "Colossand"
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
		'en-us': "Sandygast",
		'fr-fr': "Bacabouh",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Wall of Sand",
				'fr-fr': "Muraille de Sable",
				'es-es': "Muro de Arena",
				'it-it': "Murosabbia",
				'pt-br': "Muralha de Areia",
				'de-de': "Sandfeste"
			},
			effect: {
				'en-us': "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Este Pokémon recebe 20 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Diesem Pokémon werden durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				'en-us': "Absorb Vitality",
				'fr-fr': "Absorb Vitalité",
				'es-es': "Absorber Vitalidad",
				'it-it': "Vitassorbimento",
				'pt-br': "Absorção de Vitalidade",
				'de-de': "Vitalitätsabsorber"
			},
			effect: {
				'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent’s Active Pokémon.",
				'fr-fr': "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				'es-es': "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
				'pt-br': "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
				'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
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

	description: {
		'en-us': "Buried beneath the castle are masses of dried-up bones from those whose vitality it has drained.",
	},

	thirdParty: {
		cardmarket: 295386,
		tcgplayer: 126947
	}
}

export default card
