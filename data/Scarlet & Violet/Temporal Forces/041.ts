import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [160],
	set: Set,

	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
		es: "Feraligatr",
		it: "Feraligatr",
		pt: "Feraligatr",
		de: "Impergator"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Torrential Heart",
			fr: "Cœur Torrentiel",
			es: "Corazón Torrencial",
			it: "Cuore Torrenziale",
			pt: "Âmago Torrencial",
			de: "Reißendes Herz"
		},

		effect: {
			en: "Once during your turn, you may put 5 damage counters on this Pokémon. If you do, during this turn, attacks used by this Pokémon do 120 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Une fois pendant votre tour, vous pouvez placer 5 marqueurs de dégâts sur ce Pokémon. Dans ce cas, pendant ce tour, les attaques utilisées par ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Una vez durante tu turno, puedes poner 5 contadores de daño en este Pokémon. Si lo haces, durante este turno, los ataques usados por este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			it: "Una sola volta durante il tuo turno, puoi mettere cinque segnalini danno su questo Pokémon. Se lo fai, durante questo turno, gli attacchi usati da questo Pokémon infliggono 120 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Uma vez durante o seu turno, você poderá colocar 5 contadores de dano neste Pokémon. Se fizer isto, durante este turno, os ataques usados por este Pokémon causarão 120 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			de: "Einmal während deines Zuges kannst du 5 Schadensmarken auf dieses Pokémon legen. Wenn du das machst, fügen die von diesem Pokémon eingesetzten Attacken dem Aktiven Pokémon deines Gegners während dieses Zuges 120 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Giant Wave",
			fr: "Vague Géante",
			es: "Ola Gigante",
			it: "Onda Anomala",
			pt: "Onda Gigante",
			de: "Riesenwelle"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Giant Wave.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Vague Géante.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Ola Gigante.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Onda Anomala.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Onda Gigante.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Riesenwelle nicht einsetzen."
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false
	},

	evolveFrom: {
		en: "Croconaw",
		fr: "Crocrodil",
		es: "Croconaw",
		it: "Croconaw",
		pt: "Croconaw",
		de: "Tyracroc"
	}
}

export default card
