import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [775],
	set: Set,

	name: {
		'en-us': "Komala",
		'fr-fr': "Dodoala",
		'es-es': "Komala",
		'de-de': "Koalelu",
		'it-it': "Komala",
		'pt-br': "Komala",
		'es-mx': "Komala"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Slumbering Smack",
			'fr-fr': "Claque Sommeil",
			'es-es': "Bofetón Durmiente",
			'de-de': "Schlummerhieb",
			'it-it': "Schiaffo Sonnecchioso",
			'pt-br': "Tabefe dos Sonhos",
			'es-mx': "Cachetazo Durmiente"
		},

		effect: {
			'en-us': "Both Active Pokémon are now Asleep. During your next turn, attacks used by this Pokémon do 100 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Les deux Pokémon Actifs sont maintenant Endormis. Pendant votre prochain tour, les attaques utilisées par ce Pokémon infligent 100 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Ambos Pokémon Activos pasan a estar Dormidos. Durante tu próximo turno, los ataques usados por este Pokémon hacen 100 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'de-de': "Beide Aktiven Pokémon schlafen jetzt. Während deines nächsten Zuges fügen die von diesem Pokémon eingesetzten Attacken dem Aktiven Pokémon deines Gegners 100 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			'it-it': "Entrambi i Pokémon attivi vengono addormentati. Durante il tuo prossimo turno, gli attacchi usati da questo Pokémon infliggono 100 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Ambos os Pokémon Ativos agora estão Adormecidos. Durante o seu próximo turno, os ataques usados por este Pokémon causarão 100 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'es-mx': "Ambos Pokémon Activos ahora están Dormidos. Durante tu próximo turno, los ataques usados por este Pokémon hacen 100 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia)."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "Natsumi Yoshida",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817281,
				tcgplayer: 623556
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817281,
				tcgplayer: 623556
			}
		},
	],
}

export default card
