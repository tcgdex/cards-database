import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Kangaskhan ex",
		fr: "Méga-Kangourex-ex",
		de: "Mega-Kangama-ex",
		it: "Mega Kangaskhan-ex",
		es: "Mega-Kangaskhan ex",
		pt: "Mega Kangaskhan ex",
		'es-mx': "Mega-Kangaskhan ex"
	},

	illustrator: "GOTO minori",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [115],

	abilities: [{
		type: "Ability",

		name: {
			en: "Run Errand",
			fr: "Course Fructueuse",
			de: "Besorgung machen",
			it: "Sbrigare Commissioni",
			es: "Recado",
			pt: "Faz Teu Corre",
			'es-mx': "Encargo Urgente"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may use this Ability. Draw 2 cards. You can't use more than 1 Run Errand Ability each turn.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez utiliser ce talent. Piochez 2 cartes. Vous ne pouvez utiliser qu'un talent Course Fructueuse par tour.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du diese Fähigkeit einsetzen. Ziehe 2 Karten. Du kannst die Fähigkeit Besorgung machen nur einmal pro Zug einsetzen.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi usare questa abilità. Pesca due carte. Non puoi usare più di un'abilità Sbrigare Commissioni per turno.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes usar esta habilidad. Roba 2 cartas. No puedes usar más de una habilidad Recado en cada turno.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá usar esta Habilidade. Compre 2 cartas. Você não pode usar mais de 1 Habilidade Faz Teu Corre por turno.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes usar esta Habilidad. Roba 2 cartas. No puedes usar más de 1 Habilidad Encargo Urgente en cada turno."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rapid-Fire Combo",
			fr: "Combo en Rafale",
			de: "Schnellfeuerkombo",
			it: "Combinazione a Raffica",
			es: "Combo Ráfaga",
			pt: "Combo de Disparo Rápido",
			'es-mx': "Combo Incesante"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 50 more damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 50 Schadenspunkte mehr pro Kopf zu.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 50 danni in più ogni volta che esce testa.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño más por cada cara.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 50 pontos de dano a mais para cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño más por cada cara."
		},

		damage: "200+"
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654521
	}
}

export default card