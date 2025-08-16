import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Cobalion",
		fr: "Cobaltium",
		es: "Cobalion",
		it: "Cobalion",
		pt: "Cobalion",
		de: "Kobalium"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		638,
	],

	hp: 120,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Guard Press",
				fr: "Pression de Garde",
				es: "Presión de Guardia",
				it: "Pressadifesa",
				pt: "Aperto Protetor",
				de: "Schutzdruck"
			},
			effect: {
				en: "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Arms",
				fr: "Bras Métalliques",
				es: "Extremidades Metálicas",
				it: "Arti Metallici",
				pt: "Braços Metálicos",
				de: "Metallarme"
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 40 more damage.",
				fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Si este Pokémon tiene 1 carta de Herramienta Pokémon unida a él, este ataque hace 40 puntos de daño más.",
				it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 40 danni in più.",
				pt: "Se este Pokémon tiver uma carta de Ferramenta Pokémon ligada a ele, este ataque causará 40 pontos de dano a mais.",
				de: "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 40 Schadenspunkte mehr zu."
			},
			damage: "80+",

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

	retreat: 2,

	thirdParty: {
		cardmarket: 365766,
		tcgplayer: 178944
	}
}

export default card
