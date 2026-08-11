import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gumshoos",
		'fr-fr': "Argouste",
		'de-de': "Manguspektor",
		'it-it': "Gumshoos",
		'es-es': "Gumshoos",
		'pt-br': "Gumshoos",
		'es-mx': "Gumshoos"
	},

	illustrator: "Mina Nakai",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Yungoos",
		'fr-fr': "Manglouton",
		'de-de': "Mangunior",
		'it-it': "Yungoos",
		'es-es': "Yungoos",
		'pt-br': "Yungoos",
		'es-mx': "Yungoos"
	},
	stage: "Stage1",
	dexId: [735],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Evidence Gathering",
			'fr-fr': "Rassemblement de Preuves",
			'de-de': "Beweisaufnahme",
			'it-it': "Raccolta di Indizi",
			'es-es': "Recogida de Pruebas",
			'pt-br': "Reunir Provas",
			'es-mx': "Recopilación de Evidencia"
		},

		effect: {
			'en-us': "Once during your turn, you may use this Ability. Switch a card from your hand with the top card of your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez utiliser ce talent. Échangez une carte de votre main contre la carte du dessus de votre deck.",
			'de-de': "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Tausche 1 Karte aus deiner Hand gegen die oberste Karte deines Decks aus.",
			'it-it': "Una sola volta durante il tuo turno, puoi usare questa abilità. Scambia una carta che hai in mano con la prima carta del tuo mazzo.",
			'es-es': "Una vez durante tu turno, puedes usar esta habilidad. Cambia 1 carta de tu mano por la primera carta de tu baraja.",
			'pt-br': "Uma vez durante o seu turno, você poderá usar esta Habilidade. Troque uma carta da sua mão pela carta de cima do seu baralho.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Cambia 1 carta de tu mano por la primera carta de tu mazo."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'de-de': "Biss",
			'it-it': "Morso",
			'es-es': "Mordisco",
			'pt-br': "Mordida",
			'es-mx': "Mordida"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851224,
				tcgplayer: 654492
			}
		},
	],
}

export default card
