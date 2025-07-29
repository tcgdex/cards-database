import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Lucario EX",
		fr: "Lucario EX",
		es: "Lucario EX",
		it: "Lucario EX",
		pt: "Lucario EX",
		de: "Lucario EX"
	},

	illustrator: "Eske Yoshinob",
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
				en: "Missile Jab",
				fr: "Coup Propulsé",
				es: "Puya Misil",
				it: "Missilpugno",
				pt: "Soco Míssil",
				de: "Wieselflinke Gerade"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "Il danno di questo attacco non è influenzato dalla resistenza.",
				pt: "Os danos deste ataque não são afetados por Resistência.",
				de: "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Corkscrew Smash",
				fr: "Tire-Bouchon Fracassant",
				es: "Guantazo Tirabuzón",
				it: "Colporotante",
				pt: "Batida Saca-Rolha",
				de: "Spindelschlag"
			},
			effect: {
				en: "You may draw cards until you have 6 cards in your hand.",
				fr: "Vous pouvez piocher des cartes jusqu'à ce que vous ayez 6 cartes en main.",
				es: "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
				it: "Puoi pescare fino ad avere sei carte in mano.",
				pt: "Você poderá comprar cards até ter 6 cards em sua mão.",
				de: "Du kannst so viele Karten ziehen, bis du 6 Karten auf der Hand hast."
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
				en: "Somersault Kick",
				fr: "Culbutopied",
				es: "Patada Voltereta",
				it: "Calciocapriola",
				pt: "Chute Cambalhota",
				de: "Saltokick"
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
		cardmarket: 281718
	}
}

export default card
