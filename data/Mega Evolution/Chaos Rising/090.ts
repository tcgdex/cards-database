import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Ampharos",
		fr: "Pharamp",
		es: "Ampharos",
		'es-mx': "Ampharos",
		de: "Ampharos",
		it: "Ampharos",
		pt: "Ampharos"
	},

	illustrator: "saino misaki",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [181],
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		en: "Flaaffy"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Synchro Pulse",
			fr: "Pulsation Synchronisée",
			es: "Pulso Sincronizado",
			'es-mx': "Sincropulso",
			de: "Synchropuls",
			it: "Impulso Sincronizzato",
			pt: "Pulso Sincronizado"
		},

		effect: {
			en: "If you have the same number of cards in your hand as your opponent, attacks used by this Pokémon do 80 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, les attaques utilisées par ce Pokémon infligent 80 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Si tienes la misma cantidad de cartas en tu mano que tu rival, los ataques usados por este Pokémon hacen 80 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Si tienes la misma cantidad de cartas en tu mano que tu rival, los ataques usados por este Pokémon hacen 80 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			de: "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügen die von diesem Pokémon eingesetzten Attacken dem Aktiven Pokémon deines Gegners 80 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Se hai lo stesso numero di carte in mano del tuo avversario, gli attacchi usati da questo Pokémon infliggono 80 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Se você tiver o mesmo número de cartas na sua mão que seu oponente, os ataques usados por este Pokémon causarão 80 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência)."
		}
	}],

	attacks: [{
		name: {
			en: "Flashing Bolt",
			fr: "Éclair Aveuglant",
			es: "Rayo Destellante",
			'es-mx': "Rayo Destellante",
			de: "Leuchtblitz",
			it: "Bolide Abbagliante",
			pt: "Raio Piscante"
		},

		cost: ["Lightning", "Colorless"],
		damage: 140,

		effect: {
			en: "During your next turn, this Pokémon can't use Flashing Bolt.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Éclair Aveuglant.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Rayo Destellante.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Rayo Destellante.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Leuchtblitz nicht einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Bolide Abbagliante.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Raio Piscante."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693446,
		cardmarket: 886482
	}
}

export default card
