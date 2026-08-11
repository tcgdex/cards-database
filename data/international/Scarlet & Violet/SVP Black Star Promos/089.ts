import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [160],
	set: Set,

	name: {
		'en-us': "Feraligatr",
		'fr-fr': "Aligatueur",
		'es-es': "Feraligatr",
		'it-it': "Feraligatr",
		'pt-br': "Feraligatr",
		'de-de': "Impergator"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Croconaw",
		'fr-fr': "Crocrodil",
		'es-es': "Croconaw",
		'it-it': "Croconaw",
		'pt-br': "Croconaw",
		'de-de': "Tyracroc"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Torrential Heart",
			'fr-fr': "Cœur Torrentiel",
			'es-es': "Corazón Torrencial",
			'it-it': "Cuore Torrenziale",
			'pt-br': "Âmago Torrencial",
			'de-de': "Reißendes Herz"
		},

		effect: {
			'en-us': "Once during your turn, you may put 5 damage counters on this Pokémon. If you do, during this turn, attacks used by this Pokémon do 120 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Une fois pendant votre tour, vous pouvez placer 5 marqueurs de dégâts sur ce Pokémon. Dans ce cas, pendant ce tour, les attaques utilisées par ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Una vez durante tu turno, puedes poner 5 contadores de daño en este Pokémon. Si lo haces, durante este turno, los ataques usados por este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Una sola volta durante il tuo turno, puoi mettere cinque segnalini danno su questo Pokémon. Se lo fai, durante questo turno, gli attacchi usati da questo Pokémon infliggono 120 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Uma vez durante o seu turno, você poderá colocar 5 contadores de dano neste Pokémon. Se fizer isto, durante este turno, os ataques usados por este Pokémon causarão 120 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Einmal während deines Zuges kannst du 5 Schadensmarken auf dieses Pokémon legen. Wenn du das machst, fügen die von diesem Pokémon eingesetzten Attacken dem Aktiven Pokémon deines Gegners während dieses Zuges 120 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Giant Wave",
			'fr-fr': "Vague Géante",
			'es-es': "Ola Gigante",
			'it-it': "Onda Anomala",
			'pt-br': "Onda Gigante",
			'de-de': "Riesenwelle"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Giant Wave.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Vague Géante.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Ola Gigante.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Onda Anomala.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Onda Gigante.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Riesenwelle nicht einsetzen."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",
	illustrator: "Kurata So",
	description: {
		'en-us': "It usually moves slowly, but it goes at blinding speed when it attacks and bites prey.",
	},
	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 760231,
				tcgplayer: 543950
			},
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"],
			thirdParty: {
				cardmarket: 761135,
				tcgplayer: 548310
			},
		}
	],
}

export default card
