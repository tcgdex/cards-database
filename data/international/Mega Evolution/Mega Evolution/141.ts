import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Clawitzer",
		'fr-fr': "Gamblast",
		'de-de': "Wummer",
		'it-it': "Clawitzer",
		'es-es': "Clawitzer",
		'pt-br': "Clawitzer",
		'es-mx': "Clawitzer"
	},

	illustrator: "Mori Yuu",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Clauncher",
		'fr-fr': "Flingouste",
		'de-de': "Scampisto",
		'it-it': "Clauncher",
		'es-es': "Clauncher",
		'pt-br': "Clauncher",
		'es-mx': "Clauncher"
	},
	stage: "Stage1",
	dexId: [693],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fall Back to Reload",
			'fr-fr': "Repli et Recharge",
			'de-de': "Strategisches Nachladen",
			'it-it': "Arretra e Ricarica",
			'es-es': "Replegar y Recargar",
			'pt-br': "Recarga Estratégica",
			'es-mx': "Recarga Estratégica"
		},

		effect: {
			'en-us': "Once during your turn, when this Pokémon moves from the Active Spot to your Bench, you may use this Ability. Attach up to 2 Basic {W} Energy cards from your hand to this Pokémon.",
			'fr-fr': "Une fois pendant votre tour, lorsque ce Pokémon se déplace du Poste Actif vers votre Banc, vous pouvez utiliser ce talent. Attachez jusqu'à 2 cartes Énergie {W} de base de votre main à ce Pokémon.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon von der Aktiven Position auf deine Bank wechselt, kannst du diese Fähigkeit einsetzen. Lege bis zu 2 Basis-{W}-Energiekarten aus deiner Hand an dieses Pokémon an.",
			'it-it': "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla posizione attiva nella tua panchina, puoi usare questa abilità. Assegna a questo Pokémon fino a due carte Energia base {W} dalla tua mano.",
			'es-es': "Una vez durante tu turno, cuando este Pokémon se mueve del Puesto Activo a tu Banca, puedes usar esta habilidad. Une hasta 2 cartas de Energía {W} Básica de tu mano a este Pokémon.",
			'pt-br': "Uma vez durante o seu turno, quando este Pokémon for movido do Campo Ativo para o seu Banco, você poderá usar esta Habilidade. Ligue até 2 cartas de Energia {W} Básica da sua mão a este Pokémon.",
			'es-mx': "Una vez durante tu turno, cuando este Pokémon se mueve del Puesto Activo a tu Banca, puedes usar esta Habilidad. Une hasta 2 cartas de Energía {W} Básica de tu mano a este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			'en-us': "Aqua Launcher",
			'fr-fr': "Aqua-Blaster",
			'de-de': "Aquawerfer",
			'it-it': "Lancio Idrico",
			'es-es': "Disparador Acuático",
			'pt-br': "Lançador Aquático",
			'es-mx': "Acualanzador"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon."
		},

		damage: 210
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851212,
				tcgplayer: 654480
			}
		},
	],
}

export default card
