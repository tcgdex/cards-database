import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Gumshoos",
		fr: "Argouste",
		de: "Manguspektor",
		it: "Gumshoos",
		es: "Gumshoos",
		pt: "Gumshoos",
		'es-mx': "Gumshoos"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",
	dexId: [735],

	abilities: [{
		type: "Ability",

		name: {
			en: "Evidence Gathering",
			fr: "Rassemblement de Preuves",
			de: "Beweisaufnahme",
			it: "Raccolta di Indizi",
			es: "Recogida de Pruebas",
			pt: "Reunir Provas",
			'es-mx': "Recopilación de Evidencia"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Switch a card from your hand with the top card of your deck.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Échangez une carte de votre main contre la carte du dessus de votre deck.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Tausche 1 Karte aus deiner Hand gegen die oberste Karte deines Decks aus.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Scambia una carta che hai in mano con la prima carta del tuo mazzo.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Cambia 1 carta de tu mano por la primera carta de tu baraja.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Troque uma carta da sua mão pela carta de cima do seu baralho.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Cambia 1 carta de tu mano por la primera carta de tu mazo."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			de: "Biss",
			it: "Morso",
			es: "Mordisco",
			pt: "Mordida",
			'es-mx': "Mordida"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654449
	}
}

export default card