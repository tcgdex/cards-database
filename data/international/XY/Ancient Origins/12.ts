import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Virizion",
		'fr-fr': "Viridium",
		'es-es': "Virizion",
		'it-it': "Virizion",
		'pt-br': "Virizion",
		'de-de': "Viridium"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		640,
	],

	hp: 110,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Bail Out",
				'fr-fr': "Renflouage",
				'es-es': "Sacar de Apuros",
				'it-it': "Soccorso",
				'pt-br': "Resgate",
				'de-de': "Freilassen"
			},
			effect: {
				'en-us': "Put 2 Pokémon from your discard pile into your hand.",
				'fr-fr': "Ajoutez 2 Pokémon de votre pile de défausse à votre main.",
				'es-es': "Pon 2 Pokémon de tu pila de descartes en tu mano.",
				'it-it': "Prendi due Pokémon dalla tua pila degli scarti e aggiungili alle carte che hai in mano.",
				'pt-br': "Coloque 2 Pokémon da sua pilha de descarte em sua mão.",
				'de-de': "Nimm 2 Pokémon von deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Prize Count",
				'fr-fr': "Compteur de Récompense",
				'es-es': "Cuenta de Premios",
				'it-it': "Contapremi",
				'pt-br': "Contagem de Prêmios",
				'de-de': "Preiszähler"
			},
			effect: {
				'en-us': "If you have more Prize cards left than your opponent, this attack does 80 more damage.",
				'fr-fr': "S'il vous reste plus de cartes Récompense que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si te quedan más cartas de Premio que a tu rival, este ataque hace 80 puntos de daño más.",
				'it-it': "Se il numero di carte Premio che ti restano è superiore a quello del tuo avversario, questo attacco infligge 80 danni in più.",
				'pt-br': "Se sobrarem a você mais cards de Prêmios do que ao seu oponente, este ataque causará 80 de danos adicionais.",
				'de-de': "Wenn du mehr Preiskarten übrig hast als dein Gegner, fügt dieser Angriff 80 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Legends say this Pokémon confounded opponents with its swift movements.",
	},

	thirdParty: {
		cardmarket: 284193,
		tcgplayer: 100619
	}
}

export default card
