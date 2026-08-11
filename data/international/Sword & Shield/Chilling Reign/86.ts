import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [744],
	set: Set,

	name: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
		'es-es': "Rockruff",
		'it-it': "Rockruff",
		'pt-br': "Rockruff",
		'de-de': "Wuffels"
	},

	illustrator: "Yuu Nishida",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Crunch",
			'fr-fr': "Mâchouille",
			'es-es': "Triturar",
			'it-it': "Sgranocchio",
			'pt-br': "Mastigada",
			'de-de': "Knirscher"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 30,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "When it rubs the rocks on its neck against you, that's proof of its love for you. However, the rocks are sharp, so the gesture is quite painful!"
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567194,
				tcgplayer: 241753
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567194,
				tcgplayer: 241753
			}
		},
	],
}

export default card
