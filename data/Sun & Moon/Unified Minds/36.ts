import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Lapras",
		fr: "Lokhlass",
		es: "Lapras",
		it: "Lapras",
		pt: "Lapras",
		de: "Lapras"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 110,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mermaid’s Call",
				fr: "Appel de la Sirène",
				es: "Llamada de la Sirena",
				it: "Richiamo della Sirena",
				pt: "Chamado da Sereia",
				de: "Ruf der Meerjungfrau"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put a Misty’s Favor card from your discard pile into your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer une carte Faveur d’Ondine de votre pile de défausse dans votre main.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes poner 1 carta de Favor de Misty de tu pila de descartes en tu mano.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi prendere una carta Cortesia di Misty dalla tua pila degli scarti e aggiungerla alle carte che hai in mano.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode colocar 1 carta Favor da Misty da sua pilha de descarte na sua mão.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Mistys Gunst-Karte aus deinem Ablagestapel auf deine Hand nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				es: "Surf",
				it: "Surf",
				pt: "Surfar",
				de: "Surfer"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 388007,
		tcgplayer: 194957
	}
}

export default card
