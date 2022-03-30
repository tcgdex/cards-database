import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Regirock EX",
		fr: "Regirock EX",
		es: "Regirock EX",
		it: "Regirock EX",
		pt: "Regirock EX",
		de: "Regirock EX"
	},

	illustrator: "PLANETA",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		377,
	],

	hp: 180,

	types: [
		"Fighting",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Regi Power",
				fr: "Regi-Pouvoir",
				es: "Regi Poder",
				it: "Potere Regi",
				pt: "Poder Regi",
				de: "Regi-Power"
			},
			effect: {
				en: "The attacks of your Fighting Pokémon (excluding Regirock-EX) do 10 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				fr: "Les attaques de vos Pokémon Fighting (excepté Regirock-EX) infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Los ataques de tus Pokémon Fighting (excluido Regirock-EX) hacen 10 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Gli attacchi dei tuoi Pokémon Fighting (escluso Regirock-EX) infliggono 10 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Os ataques dos seus Pokémon Fighting (exceto Regirock-EX) causam 10 de danos adicionais ao Pokémon Ativo do seu oponente (antes da aplicação de Fraqueza e Resistência).",
				de: "Die Angriffe deiner Fighting-Pokémon (außer Regirock-EX) fügen dem Aktiven Pokémon deines Gegners 10 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Bedrock Press",
				fr: "Charge Substrat",
				es: "Presión Roca Firme",
				it: "Rocciopressa",
				pt: "Levantamento de Rocha",
				de: "Grundgesteinsdruck"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, cualquier daño infligido a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic"
}

export default card
