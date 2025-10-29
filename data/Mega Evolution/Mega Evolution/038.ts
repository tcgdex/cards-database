import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Clawitzer",
		fr: "Gamblast",
		de: "Wummer",
		it: "Clawitzer",
		es: "Clawitzer",
		pt: "Clawitzer",
		'es-mx': "Clawitzer"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Stage1",
	dexId: [693],

	abilities: [{
		type: "Ability",

		name: {
			en: "Fall Back to Reload",
			fr: "Repli et Recharge",
			de: "Strategisches Nachladen",
			it: "Arretra e Ricarica",
			es: "Replegar y Recargar",
			pt: "Recarga Estratégica",
			'es-mx': "Recarga Estratégica"
		},

		effect: {
			en: "Once during your turn, when this Pokémon moves from the Active Spot to your Bench, you may use this Ability. Attach up to 2 Basic {W} Energy cards from your hand to this Pokémon.",
			fr: "Une fois pendant votre tour, lorsque ce Pokémon se déplace du Poste Actif vers votre Banc, vous pouvez utiliser ce talent. Attachez jusqu'à 2 cartes Énergie {W} de base de votre main à ce Pokémon.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon von der Aktiven Position auf deine Bank wechselt, kannst du diese Fähigkeit einsetzen. Lege bis zu 2 Basis-{W}-Energiekarten aus deiner Hand an dieses Pokémon an.",
			it: "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla posizione attiva nella tua panchina, puoi usare questa abilità. Assegna a questo Pokémon fino a due carte Energia base {W} dalla tua mano.",
			es: "Una vez durante tu turno, cuando este Pokémon se mueve del Puesto Activo a tu Banca, puedes usar esta habilidad. Une hasta 2 cartas de Energía {W} Básica de tu mano a este Pokémon.",
			pt: "Uma vez durante o seu turno, quando este Pokémon for movido do Campo Ativo para o seu Banco, você poderá usar esta Habilidade. Ligue até 2 cartas de Energia {W} Básica da sua mão a este Pokémon.",
			'es-mx': "Una vez durante tu turno, cuando este Pokémon se mueve del Puesto Activo a tu Banca, puedes usar esta Habilidad. Une hasta 2 cartas de Energía {W} Básica de tu mano a este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			en: "Aqua Launcher",
			fr: "Aqua-Blaster",
			de: "Aquawerfer",
			it: "Lancio Idrico",
			es: "Disparador Acuático",
			pt: "Lançador Aquático",
			'es-mx': "Acualanzador"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon."
		},

		damage: 210
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654377,
		cardmarket: 851109
	}
}

export default card