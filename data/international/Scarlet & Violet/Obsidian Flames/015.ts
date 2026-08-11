import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [724],
	set: Set,

	name: {
		'fr-fr': "Archéduc-ex",
		'en-us': "Decidueye ex",
		'es-es': "Decidueye ex",
		'it-it': "Decidueye-ex",
		'pt-br': "Decidueye ex",
		'de-de': "Silvarro-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Efflèche",
		'en-us': "Dartrix",
		'es-es': "Dartrix",
		'it-it': "Dartrix",
		'pt-br': "Dartrix",
		'de-de': "Arboretoss"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Liberté Totale",
			'en-us': "Total Freedom",
			'es-es': "Libertad Total",
			'it-it': "Libertà Assoluta",
			'pt-br': "Liberdade Total",
			'de-de': "Absolute Freiheit"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez utiliser ce talent. Si ce Pokémon est sur le Banc, échangez-le contre votre Pokémon Actif. Ou, si ce Pokémon est sur le Poste Actif, échangez-le contre l'un de vos Pokémon de Banc.",
			'en-us': "Once during your turn, you may use this Ability. If this Pokémon is on the Bench, switch it with your Active Pokémon. Or, if this Pokémon is in the Active Spot, switch it with 1 of your Benched Pokémon.",
			'es-es': "Una vez durante tu turno, puedes usar esta habilidad. Si este Pokémon está en la Banca, cámbialo por tu Pokémon Activo. O, si este Pokémon está en el Puesto Activo, cámbialo por uno de tus Pokémon en Banca.",
			'it-it': "Una sola volta durante il tuo turno, puoi usare questa abilità. Se questo Pokémon è in panchina, scambialo con il tuo Pokémon attivo. Oppure, se questo Pokémon è in posizione attiva, scambialo con uno della tua panchina.",
			'pt-br': "Uma vez durante o seu turno, você poderá usar esta Habilidade. Se este Pokémon estiver no Banco, troque-o pelo seu Pokémon Ativo. Ou, se este Pokémon estiver no Campo Ativo, troque-o por 1 dos seus Pokémon no Banco.",
			'de-de': "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Wenn sich dieses Pokémon auf deiner Bank befindet, tausche es gegen dein Aktives Pokémon aus. Oder, wenn dieses Pokémon in der Aktiven Position ist, tausche es gegen 1 Pokémon auf deiner Bank aus."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'fr-fr': "Flèche de Chasse",
			'en-us': "Hunting Arrow",
			'es-es': "Flecha de Caza",
			'it-it': "Freccia Implacabile",
			'pt-br': "Flecha de Caça",
			'de-de': "Jagdpfeil"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 789506,
				tcgplayer: 509719,
				cardtrader: 255575
			}
		},
		{
			type: 'holo',
			size: 'jumbo',
			thirdParty: {
				cardmarket: 725095
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Mochizuki",

	
}

export default card
