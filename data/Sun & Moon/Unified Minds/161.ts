import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Lickitung",
		fr: "Excelangue",
		es: "Lickitung",
		it: "Lickitung",
		pt: "Lickitung",
		de: "Schlurp"
	},
	illustrator: "tetsuya koizumi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		108,
	],
	hp: 100,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Heavy Draw",
				fr: "Pioche Massive",
				es: "Robo Pesado",
				it: "Pesca Grossa",
				pt: "Compra Pesada",
				de: "Gewichtiger Zug"
			},
			effect: {
				en: "Draw a card for each of your Pokémon in play that has a Retreat Cost of exactly 4.",
				fr: "Piochez une carte pour chacun de vos Pokémon en jeu qui a un Coût de Retraite de 4.",
				es: "Roba 1 carta por cada uno de tus Pokémon en juego que tenga un Coste de Retirada de exactamente 4.",
				it: "Pesca una carta per ogni tuo Pokémon in gioco che abbia un costo di ritirata esattamente pari a quattro.",
				pt: "Compre 1 carta para cada um dos seus Pokémon em jogo que tiver um custo de Recuo de exatamente 4.",
				de: "Ziehe 1 Karte für jedes deiner Pokémon im Spiel, das Rückzugskosten von genau 4 hat."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tongue Slap",
				fr: "Gros Coup de Langue",
				es: "Bofetón Lengua",
				it: "Linguasberla",
				pt: "Tapa de Língua",
				de: "Zungenschelle"
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
