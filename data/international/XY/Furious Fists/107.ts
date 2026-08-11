import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Lucario EX",
		'fr-fr': "Lucario EX",
		'es-es': "Lucario EX",
		'it-it': "Lucario EX",
		'pt-br': "Lucario EX",
		'de-de': "Lucario EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 180,

	types: [
		"Fighting",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Missile Jab",
				'fr-fr': "Coup Propulsé",
				'es-es': "Puya Misil",
				'it-it': "Missilpugno",
				'pt-br': "Soco Míssil",
				'de-de': "Wieselflinke Gerade"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "Il danno di questo attacco non è influenzato dalla resistenza.",
				'pt-br': "Os danos deste ataque não são afetados por Resistência.",
				'de-de': "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Corkscrew Smash",
				'fr-fr': "Tire-Bouchon Fracassant",
				'es-es': "Guantazo Tirabuzón",
				'it-it': "Colporotante",
				'pt-br': "Batida Saca-Rolha",
				'de-de': "Spindelschlag"
			},
			effect: {
				'en-us': "You may draw cards until you have 6 cards in your hand.",
				'fr-fr': "Vous pouvez piocher des cartes jusqu'à ce que vous ayez 6 cartes en main.",
				'es-es': "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
				'it-it': "Puoi pescare fino ad avere sei carte in mano.",
				'pt-br': "Você poderá comprar cards até ter 6 cards em sua mão.",
				'de-de': "Du kannst so viele Karten ziehen, bis du 6 Karten auf der Hand hast."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Somersault Kick",
				'fr-fr': "Culbutopied",
				'es-es': "Patada Voltereta",
				'it-it': "Calciocapriola",
				'pt-br': "Chute Cambalhota",
				'de-de': "Saltokick"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 281718,
		tcgplayer: 92290
	}
}

export default card
