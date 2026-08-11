import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Seismitoad EX",
		'fr-fr': "Crapustule EX",
		'es-es': "Seismitoad EX",
		'it-it': "Seismitoad EX",
		'pt-br': "Seismitoad EX",
		'de-de': "Branawarz EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		537,
	],

	hp: 180,

	types: [
		"Water",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quaking Punch",
				'fr-fr': "Poing Chevrotant",
				'es-es': "Puñetazo Estremecedor",
				'it-it': "Pugno Tellurico",
				'pt-br': "Soco Estremecedor",
				'de-de': "Vibro-Wumme"
			},
			effect: {
				'en-us': "Your opponent can't play any Item cards from his or her hand during his or her next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de cartes Objet de sa main pendant son prochain tour.",
				'es-es': "Tu rival no puede jugar ninguna carta de Objeto de su mano durante su próximo turno.",
				'it-it': "Il tuo avversario non può giocare carte Strumento dalla sua mano durante il suo prossimo turno.",
				'pt-br': "Seu oponente não poderá jogar nenhum card de Item da mão dele ou dela durante a próxima vez de jogar desse oponente.",
				'de-de': "Dein Gegner kann während seines nächsten Zuges keine Itemkarten von seiner Hand spielen."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Grenade Hammer",
				'fr-fr': "Explo-Maillet",
				'es-es': "Martillazo Explosivo",
				'it-it': "Martelgranata",
				'pt-br': "Martelo Granada",
				'de-de': "Granatenhammer"
			},
			effect: {
				'en-us': "This attack does 30 damage to 2 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à 2 de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 2 de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a due dei tuoi Pokémon in panchina. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Esse ataque causa 30 de danos a 2 dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 2 Pokémon auf deiner Bank 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic",

	thirdParty: {
		cardmarket: 281684,
		tcgplayer: 92195
	}
}

export default card
