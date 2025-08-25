import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Persian",
		fr: "Persian",
		es: "Persian",
		it: "Persian",
		pt: "Persian",
		de: "Snobilikat"
	},

	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		53,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Meowth",
		fr: "Miaouss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Screech",
				fr: "Grincement",
				es: "Chirrido",
				it: "Stridio",
				pt: "Agudo",
				de: "Kreideschrei"
			},
			effect: {
				en: "During your next turn, the Defending Pokémon takes 60 more damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, le Pokémon Défenseur subit 60 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, los ataques hacen 60 puntos de daño más al Pokémon Defensor (después de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, il Pokémon difensore subisce 60 danni in più dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a sua próxima vez de jogar, o Pokémon Defensor receberá 60 pontos de dano a mais de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges werden dem Verteidigenden Pokémon durch Attacken 60 Schadenspunkte mehr zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 299503,
		tcgplayer: 138598
	}
}

export default card
