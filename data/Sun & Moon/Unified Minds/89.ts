import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Musharna",
		fr: "Mushana",
		es: "Musharna",
		it: "Musharna",
		pt: "Musharna",
		de: "Somnivora"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		518,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Munna",
		fr: "Munna",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rest Well",
				fr: "Siesta",
				es: "A Descansar",
				it: "Buon Riposo",
				pt: "Descanse Bem",
				de: "Erholungsschlaf"
			},
			effect: {
				en: "Both Active Pokémon are now Asleep. During your next turn, this Pokémon’s attacks do 100 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				fr: "Les deux Pokémon Actifs sont maintenant Endormis. Pendant votre prochain tour, les attaques de ce Pokémon infligent 100 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Ambos Pokémon Activos pasan a estar Dormidos. Durante tu próximo turno, los ataques de este Pokémon hacen 100 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Entrambi i Pokémon attivi vengono addormentati. Durante il tuo prossimo turno, gli attacchi di questo Pokémon infliggono 100 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Ambos os Pokémon Ativos agora estão Adormecidos. Durante a sua próxima vez de jogar, os ataques deste Pokémon causarão 100 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				de: "Beide Aktiven Pokémon schlafen jetzt. Während deines nächsten Zuges fügen die Attacken dieses Pokémon dem Aktiven Pokémon deines Gegners 100 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Zen Headbutt",
				fr: "Psykoud’Boul",
				es: "Cabezazo Zen",
				it: "Cozzata Zen",
				pt: "Cabeçada Zen",
				de: "Zen-Kopfstoß"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 388252
	}
}

export default card
