import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Rampardos ex",
		fr: "Charkos-ex",
		es: "Rampardos ex",
		'es-mx': "Rampardos ex",
		de: "Rameidon-ex",
		it: "Rampardos-ex",
		pt: "Rampardos ex"
	},

	illustrator: "hncl",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [409],
	hp: 330,
	types: ["Fighting"],

	evolveFrom: {
		en: "Cranidos"
	},

	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Destructive Headbutting",
			fr: "Coup d'Boule Destructeur",
			es: "Cabezazo Aniquilador",
			'es-mx': "Cabezazo Destructivo",
			de: "Kollateraler Kopfstoß",
			it: "Cranio Distruttivo",
			pt: "Cabeçada Destrutiva"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may use this Ability. Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez utiliser ce talent. Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes usar esta habilidad. Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes usar esta Habilidad. Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du diese Fähigkeit einsetzen. Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi usare questa abilità. Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá usar esta Habilidade. Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente."
		}
	}],

	attacks: [{
		name: {
			en: "Rowdy Hammer",
			fr: "Marteau Tumultueux",
			es: "Martillo Alborotador",
			'es-mx': "Martillo Brusco",
			de: "Krawallhammer",
			it: "Martello Furioso",
			pt: "Martelo Desordeiro"
		},

		cost: ["Fighting", "Fighting"],

		damage: 150,

		effect: {
			en: "During your next turn, attacks used by this Pokémon do 150 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, les attaques utilisées par ce Pokémon infligent 150 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Durante tu próximo turno, los ataques usados por este Pokémon hacen 150 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante tu próximo turno, los ataques usados por este Pokémon hacen 150 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			de: "Während deines nächsten Zuges fügen die von diesem Pokémon eingesetzten Attacken dem Aktiven Pokémon deines Gegners 150 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Durante il tuo prossimo turno, gli attacchi usati da questo Pokémon infliggono 150 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o seu próximo turno, os ataques usados por este Pokémon causarão 150 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência)."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895831,
				tcgplayer: 704802
			}
		},
	],
}

export default card
