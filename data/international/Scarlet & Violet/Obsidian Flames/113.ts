import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [660],
	set: Set,

	name: {
		'fr-fr': "Excavarenne",
		'en-us': "Diggersby",
		'es-es': "Diggersby",
		'it-it': "Diggersby",
		'pt-br': "Diggersby",
		'de-de': "Grebbit"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Sapereau",
		'en-us': "Bunnelby",
		'es-es': "Bunnelby",
		'it-it': "Bunnelby",
		'pt-br': "Bunnelby",
		'de-de': "Scoppel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Coud'Boue",
			'en-us': "Mud-Slap",
			'es-es': "Bofetón Lodo",
			'it-it': "Fangosberla",
			'pt-br': "Tapa de Lama",
			'de-de': "Lehmschelle"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'fr-fr': "Marteau Frappeur",
			'en-us': "Knocking Hammer",
			'es-es': "Martillo Impacto",
			'it-it': "Martello Battente",
			'pt-br': "Martelo Detonador",
			'de-de': "Klopfender Hammer"
		},

		effect: {
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'en-us': "Discard the top card of your opponent's deck.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	description: {
		'en-us': "The fur on its belly retains heat exceptionally well. People used to make heavy winter clothing from fur shed by this Pokémon.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725193,
				tcgplayer: 509836,
				cardtrader: 255798
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725193,
				tcgplayer: 509836,
				cardtrader: 255798
			}
		},
	],

	illustrator: "SATOSHI NAKAI",

	
}

export default card
