import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
		es: "Araquanid",
		it: "Araquanid",
		pt: "Araquanid",
		de: "Aranestro"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		752,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Dewpider",
		fr: "Araqua",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headstrike",
				fr: "Coup de Tête",
				es: "Testarada",
				it: "Testata",
				pt: "Golpe de Cabeça",
				de: "Kopftreffer"
			},

			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Liquidation",
				fr: "Aqua-Brèche",
				es: "Hidroariete",
				it: "Idrobreccia",
				pt: "Aquaríete",
				de: "Aquadurchstoß"
			},
			effect: {
				en: "During your next turn, the Defending Pokémon takes 60 more damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, le Pokémon Défenseur subit 60 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, los ataques hacen 60 puntos de daño más al Pokémon Defensor (después de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, il Pokémon difensore subisce 60 danni in più dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a sua próxima vez de jogar, o Pokémon Defensor receberá 60 pontos de dano a mais de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges werden dem Verteidigenden Pokémon durch Attacken 60 Schadenspunkte mehr zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 407974
	}
}

export default card
