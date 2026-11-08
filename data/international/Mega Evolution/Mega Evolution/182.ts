import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Kangaskhan ex",
		'fr-fr': "Méga-Kangourex-ex",
		'de-de': "Mega-Kangama-ex",
		'it-it': "Mega Kangaskhan-ex",
		'es-es': "Mega-Kangaskhan ex",
		'pt-br': "Mega Kangaskhan ex",
		'es-mx': "Mega-Kangaskhan ex"
	},

	suffix: "ex",
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
			'en-us': "Run Errand",
			'fr-fr': "Course Fructueuse",
			'de-de': "Besorgung machen",
			'it-it': "Sbrigare Commissioni",
			'es-es': "Recado",
			'pt-br': "Faz Teu Corre",
			'es-mx': "Encargo Urgente"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may use this Ability. Draw 2 cards. You can't use more than 1 Run Errand Ability each turn.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez utiliser ce talent. Piochez 2 cartes. Vous ne pouvez utiliser qu'un talent Course Fructueuse par tour.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du diese Fähigkeit einsetzen. Ziehe 2 Karten. Du kannst die Fähigkeit Besorgung machen nur einmal pro Zug einsetzen.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi usare questa abilità. Pesca due carte. Non puoi usare più di un'abilità Sbrigare Commissioni per turno.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes usar esta habilidad. Roba 2 cartas. No puedes usar más de una habilidad Recado en cada turno.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá usar esta Habilidade. Compre 2 cartas. Você não pode usar mais de 1 Habilidade Faz Teu Corre por turno.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes usar esta Habilidad. Roba 2 cartas. No puedes usar más de 1 Habilidad Encargo Urgente en cada turno."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Rapid-Fire Combo",
			'fr-fr': "Combo en Rafale",
			'de-de': "Schnellfeuerkombo",
			'it-it': "Combinazione a Raffica",
			'es-es': "Combo Ráfaga",
			'pt-br': "Combo de Disparo Rápido",
			'es-mx': "Combo Incesante"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 50 more damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 50 Schadenspunkte mehr pro Kopf zu.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 50 danni in più ogni volta che esce testa.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño más por cada cara.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 50 pontos de dano a mais para cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño más por cada cara."
		},

		damage: "200+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851253,
				tcgplayer: 654521
			}
		},
	],
}

export default card
