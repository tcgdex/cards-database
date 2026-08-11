import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [934],
	set: Set,

	name: {
		'en-us': "Garganacl",
		'fr-fr': "Gigansel",
		'es-es': "Garganacl",
		'it-it': "Garganacl",
		'pt-br': "Garganacl",
		'de-de': "Saltigant"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Naclstack",
		'fr-fr': "Amassel",
		'es-es': "Naclstack",
		'it-it': "Naclstack",
		'pt-br': "Naclstack",
		'de-de': "Sedisal"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Blessed Salt",
			'fr-fr': "Sel Bienfaisant",
			'es-es': "Sal Bendita",
			'it-it': "Sale Gradito",
			'pt-br': "Sal Abençoado",
			'de-de': "Gesegnetes Salz"
		},

		effect: {
			'en-us': "During Pokémon Checkup, heal 20 damage from each of your Pokémon.",
			'fr-fr': "Pendant le Contrôle Pokémon, soignez 20 dégâts de chacun de vos Pokémon.",
			'es-es': "Durante el Chequeo Pokémon, cura 20 puntos de daño a cada uno de tus Pokémon.",
			'it-it': "Durante il controllo Pokémon, cura ciascuno dei tuoi Pokémon da 20 danni.",
			'pt-br': "Durante o Checape Pokémon, cure 20 pontos de dano de cada um dos seus Pokémon.",
			'de-de': "Heile beim Pokémon-Check 20 Schadenspunkte bei jedem deiner Pokémon."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Knocking Hammer",
			'fr-fr': "Marteau Frappeur",
			'es-es': "Martillo Impacto",
			'it-it': "Martello Battente",
			'pt-br': "Martelo Detonador",
			'de-de': "Klopfender Hammer"
		},

		effect: {
			'en-us': "Discard the top card of your opponent's deck.",
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751717,
				tcgplayer: 534923,
				cardtrader: 274363
			}
		},
	],

	illustrator: "Kouki Saitou",

	description: {
		'en-us': "Garganacl will rub its fingertips together and sprinkle injured Pokémon with salt. Even severe wounds will promptly heal afterward.",
	},

}

export default card
