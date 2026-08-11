import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [284],
	set: Set,

	name: {
		'en-us': "Masquerain",
		'fr-fr': "Maskadra",
		'es-es': "Masquerain",
		'it-it': "Masquerain",
		'pt-br': "Masquerain",
		'de-de': "Maskeregen"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Surskit",
		'fr-fr': "Arakdo",
		'es-es': "Surskit",
		'it-it': "Surskit",
		'pt-br': "Surskit",
		'de-de': "Gehweiher"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Daunting Eyes",
			'fr-fr': "Regard Intimidant",
			'es-es': "Ojos Intimidantes",
			'it-it': "Occhi Minacciosi",
			'pt-br': "Olhos Aterrorizantes",
			'de-de': "Einschüchternde Augen"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. For each heads, shuffle an Energy attached to your opponent's Active Pokémon into their deck.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, mélangez une Énergie attachée au Pokémon Actif de votre adversaire avec son deck.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Por cada cara, pon 1 Energía unida al Pokémon Activo de tu rival en su baraja y barájala.",
			'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, rimischia un'Energia assegnata al Pokémon attivo del tuo avversario nel suo mazzo.",
			'pt-br': "Jogue uma moeda até sair coroa. Para cada cara, embaralhe uma Energia ligada ao Pokémon Ativo do seu oponente no baralho dele.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Mische pro Kopf 1 an das Aktive Pokémon deines Gegners angelegte Energie in sein Deck."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Cutting Wind",
			'fr-fr': "Vent Glacial",
			'es-es': "Viento Helado",
			'it-it': "Vento Tagliente",
			'pt-br': "Vento Dilacerante",
			'de-de': "Schneidender Wind"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "The antennae have distinctive patterns that look like eyes. When it rains, they grow heavy, making flight impossible.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740478,
				tcgplayer: 523585,
				cardtrader: 265008
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740478,
				tcgplayer: 523585,
				cardtrader: 265008
			}
		},
	],

	illustrator: "kantaro",

	
}

export default card
