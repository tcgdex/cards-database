import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [76],
	set: Set,

	name: {
		'fr-fr': "Grolem-ex",
		'en-us': "Golem ex",
		'es-es': "Golem ex",
		'it-it': "Golem-ex",
		'pt-br': "Golem ex",
		'de-de': "Geowaz-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Gravalanch",
		'en-us': "Graveler",
		'es-es': "Graveler",
		'it-it': "Graveler",
		'pt-br': "Graveler",
		'de-de': "Georok"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Roulé Dynamique",
			'en-us': "Dynamic Roll",
			'es-es': "Giro Dinámico",
			'it-it': "Rotolamento Dinamico",
			'pt-br': "Rolagem Dinâmica",
			'de-de': "Dynamische Rolle"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, les attaques utilisées par ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'en-us': "During your next turn, attacks used by this Pokémon do 120 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'es-es': "Durante tu próximo turno, los ataques usados por este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il tuo prossimo turno, gli attacchi usati da questo Pokémon infliggono 120 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o seu próximo turno, os ataques usados por este Pokémon causarão 120 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Während deines nächsten Zuges fügen die von diesem Pokémon eingesetzten Attacken dem Aktiven Pokémon deines Gegners 120 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 50
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Explose-Rochers",
			'en-us': "Rock Blaster",
			'es-es': "Explosión Roca",
			'it-it': "Esplodiroccia",
			'pt-br': "Detonador de Pedra",
			'de-de': "Gesteinsblaster"
		},

		effect: {
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'en-us': "This attack's damage isn't affected by Resistance.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'pt-br': "O dano deste ataque não é afetado por Resistência.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733784,
				tcgplayer: 517021,
				cardtrader: 261282
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Igarashi",

	
}

export default card
