import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [419],
	set: Set,

	name: {
		'fr-fr': "Mustéflott",
		'en-us': "Floatzel",
		'es-es': "Floatzel",
		'it-it': "Floatzel",
		'pt-br': "Floatzel",
		'de-de': "Bojelin"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Mustébouée",
		'en-us': "Buizel",
		'es-es': "Buizel",
		'it-it': "Buizel",
		'pt-br': "Buizel",
		'de-de': "Bamelin"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Queue Tourbillon",
			'en-us': "Swirling Tail",
			'es-es': "Cola en Espiral",
			'it-it': "Vorticoda",
			'pt-br': "Cauda Espiral",
			'de-de': "Wirbelnder Schweif"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, placez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées dans la main de votre adversaire.",
			'en-us': "Flip a coin. If heads, put your opponent's Active Pokémon and all attached cards into your opponent's hand.",
			'es-es': "Lanza 1 moneda. Si sale cara, pon el Pokémon Activo de tu rival y todas las cartas unidas a él en la mano de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, prendi il Pokémon attivo del tuo avversario e tutte le carte a esso assegnate e aggiungili alle carte che ha in mano.",
			'pt-br': "Jogue uma moeda. Se sair cara, coloque o Pokémon Ativo do seu oponente e todas as cartas ligadas a ele na mão do seu oponente.",
			'de-de': "Wirf 1 Münze. Gib bei Kopf deinem Gegner sein Aktives Pokémon und alle angelegten Karten auf seine Hand."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'fr-fr': "Cascade",
			'en-us': "Waterfall",
			'es-es': "Cascada",
			'it-it': "Cascata",
			'pt-br': "Cachoeira",
			'de-de': "Kaskade"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "With its flotation sac inflated, it can carry people on its back. It deflates the sac before it dives.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725129,
				tcgplayer: 509774,
				cardtrader: 255609
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725129,
				tcgplayer: 509774,
				cardtrader: 255609
			}
		},
	],

	illustrator: "Kouki Saitou",

	
}

export default card
