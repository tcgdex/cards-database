import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [604],
	set: Set,

	name: {
		'en-us': "Eelektross",
		'fr-fr': "Ohmassacre",
		'es-es': "Eelektross",
		'it-it': "Eelektross",
		'pt-br': "Eelektross",
		'de-de': "Zapplarang"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Eelektrik",
		'fr-fr': "Lampéroie",
		'es-es': "Eelektrik",
		'it-it': "Eelektrik",
		'pt-br': "Eelektrik",
		'de-de': "Zapplalek"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Coil",
			'fr-fr': "Enroulement",
			'es-es': "Enrosque",
			'it-it': "Arrotola",
			'pt-br': "Enroscar",
			'de-de': "Einrollen"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon's attacks do 120 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Pendant votre prochain tour, les attaques de ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante tu próximo turno, los ataques de este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il tuo prossimo turno, gli attacchi di questo Pokémon infliggono 120 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o seu próximo turno, os ataques deste Pokémon causarão 120 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Während deines nächsten Zuges fügen die Attacken dieses Pokémon dem Aktiven Pokémon deines Gegners 120 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Extreme Current",
			'fr-fr': "Courant Extrême",
			'es-es': "Corriente Extrema",
			'it-it': "Correntestrema",
			'pt-br': "Corrente Extrema",
			'de-de': "Extreme Strömung"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674070,
				tcgplayer: 283935
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674070,
				tcgplayer: 283935
			}
		},
	],
}

export default card
