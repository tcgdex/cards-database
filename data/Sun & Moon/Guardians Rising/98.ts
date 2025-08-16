import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Jangmo-o",
		fr: "Bébécaille",
		es: "Jangmo-o",
		it: "Jangmo-o",
		pt: "Jangmo-o",
		de: "Miniras"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		782,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bulletproof",
				fr: "Pare-Balles",
				es: "Antibalas",
				it: "Antiproiettile",
				pt: "Blindado",
				de: "Kugelsicher"
			},
			effect: {
				en: "This Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 10 dégâts de moins provenant des attaques(après application de la Faiblesse et de la Résistance).",
				es: "Los ataques hacen 10 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Questo Pokémon subisce 10 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Este Pokémon recebe 10 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Diesem Pokémon werden durch Attacken 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Lightning",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
				es: "Garra Dragón",
				it: "Dragartigli",
				pt: "Garra de Dragão",
				de: "Drachenklaue"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 297552,
		tcgplayer: 131014
	}
}

export default card
