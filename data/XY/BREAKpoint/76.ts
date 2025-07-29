import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Scizor EX",
		fr: "Cizayox EX",
		es: "Scizor EX",
		it: "Scizor EX",
		pt: "Scizor EX",
		de: "Scherox EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 170,

	types: [
		"Metal",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Steel Wing",
				fr: "Aile d'Acier",
				es: "Ala de Acero",
				it: "Alacciaio",
				pt: "Asa de Aço",
				de: "Stahlflügel"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, cualquier daño infligido a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				en: "Gale Thrust",
				fr: "Coup d'Bourrasque",
				es: "Impulso Vendaval",
				it: "Raffica di Stoccate",
				pt: "Propulsão de Tempestade",
				de: "Orkanstoß"
			},
			effect: {
				en: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 60 more damage.",
				fr: "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si este Pokémon estaba en la Banca y se ha convertido en tu Pokémon Activo en este turno, este ataque hace 60 puntos de daño más.",
				it: "Se questo Pokémon era in panchina ed è diventato il tuo Pokémon attivo in questo turno, questo attacco infligge 60 danni in più.",
				pt: "Se este Pokémon estava no Banco e tornou-se o seu Pokémon Ativo nesta rodada, este ataque causará 60 de danos adicionais.",
				de: "Wenn dieses Pokémon auf der Bank war und während dieses Zuges zu deinem Aktiven Pokémon wurde, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "50+",

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
	stage: "Basic",

	thirdParty: {
		cardmarket: 288251
	}
}

export default card
