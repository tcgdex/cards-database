import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Aegislash",
		fr: "Exagide",
		es: "Aegislash",
		it: "Aegislash",
		pt: "Aegislash",
		de: "Durengard"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		681,
	],

	hp: 140,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès",
		es: "Doublade",
		it: "Doublade",
		pt: "Doublade",
		de: "Duokles"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Miracle Guard",
				fr: "Garde Miracle",
				es: "Defensa Milagrosa",
				it: "Guardia Miracolosa",
				pt: "Guarda Milagroso",
				de: "Wunderschutz"
			},
			effect: {
				en: "Each of your Pokémon has no Weakness.",
				fr: "Aucun de vos Pokémon n'a de Faiblesse.",
				es: "Ninguno de tus Pokémon tiene Debilidad.",
				it: "Nessuno dei tuoi Pokémon ha debolezza.",
				pt: "Seus Pokémon não têm Fraqueza.",
				de: "Keins deiner Pokémon hat eine Schwäche."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Protect Charge",
				fr: "Recharge Protectrice",
				es: "Carga Protectora",
				it: "Carica Protettiva",
				pt: "Carga Protetora",
				de: "Schützender Sturmangriff"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, cualquier daño infligido a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 80,

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

	retreat: 3,

	thirdParty: {
		cardmarket: 273631
	}
}

export default card
