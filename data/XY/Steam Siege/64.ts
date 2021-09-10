import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Bisharp",
		fr: "Scalproie",
		es: "Bisharp",
		it: "Bisharp",
		pt: "Bisharp",
		de: "Caesurio"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		625,
	],
	hp: 100,
	types: [
		"Darkness",
		"Metal",
	],
	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Retaliate",
				fr: "Vengeance",
				es: "Represalia",
				it: "Nemesi",
				pt: "Retaliação",
				de: "Heimzahlung"
			},
			effect: {
				en: "If any of your Pokémon were Knocked Out by damage from an opponent’s attack during his or her last turn, this attack does 60 more damage.",
				fr: "Si l’un de vos Pokémon a été mis K.O. par les dégâts d’une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque de tu rival durante su último turno, este ataque hace 60 puntos de daño más.",
				it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco del tuo avversario durante il suo ultimo turno, questo attacco infligge 60 danni in più.",
				pt: "Se qualquer um dos seus Pokémon tiver sido Nocauteado por danos causados pelo ataque de um oponente durante a última vez de jogar desse oponente, este ataque causará 60 de danos adicionais.",
				de: "Falls eins deiner Pokémon während des letzten Zuges deines Gegners durch Schaden eines gegnerischen Angriffs kampfunfähig gemacht wurde, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Mach Claw",
				fr: "Instagriffe",
				es: "Garra Mach",
				it: "Artiglio Mach",
				pt: "Garra Supersônica",
				de: "Tempoklaue"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "Os danos deste ataque não são afetados por Resistência.",
				de: "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
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



}

export default card
