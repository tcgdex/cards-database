import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Jirachi ◇",
		'fr-fr': "Jirachi ◇",
		'es-es': "Jirachi ◇",
		'it-it': "Jirachi ◇",
		'pt-br': "Jirachi ◇",
		'de-de': "Jirachi ◇"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		385,
	],

	hp: 80,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Wish Upon a Star",
				'fr-fr': "Soupir aux Étoiles",
				'es-es': "Deseo Estrellita",
				'it-it': "Esprimi un Desiderio",
				'pt-br': "Fazer um Pedido",
				'de-de': "Sternschnuppenwunsch"
			},
			effect: {
				'en-us': "If you took this Pokémon as a face-down Prize card during your turn and your Bench isn’t full, before you put it into your hand, you may put it onto your Bench and take 1 more Prize card.",
				'fr-fr': "Si vous avez obtenu ce Pokémon en récupérant une carte Récompense face cachée lors de votre tour, et si votre banc n’est pas plein, plutôt que d’ajouter cette carte à votre main, vous pouvez la placer sur votre Banc et récupérer une carte Récompense supplémentaire.",
				'es-es': "Si has cogido este Pokémon de entre las cartas de Premio que están boca abajo durante tu turno y tu Banca no está llena, antes de ponerlo en tu mano, puedes ponerlo en tu Banca y coger 1 carta de Premio más.",
				'it-it': "Se hai preso questo Pokémon come carta Premio coperta durante il tuo turno e la tua panchina non è piena, prima di aggiungerlo alle carte che hai in mano, puoi metterlo nella tua panchina e prendere una carta Premio in più.",
				'pt-br': "Se você pegou este Pokémon de uma de suas cartas de Prêmio viradas para baixo durante a sua vez de jogar e o seu Banco não estiver cheio, antes de colocá-lo na sua mão, você poderá colocá-lo no seu Banco e pegar 1 carta de Prêmio a mais.",
				'de-de': "Wenn du dieses Pokémon während deines Zuges als verdeckte Preiskarte genommen hast und deine Bank nicht voll ist, bevor du es auf deine Hand nimmst, kannst du es auf deine Bank legen und 1 Preiskarte mehr nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Perish Dream",
				'fr-fr': "Rêve Languissant",
				'es-es': "Sueño Mortal",
				'it-it': "Ultimosogno",
				'pt-br': "Sonho Morto",
				'de-de': "Traum des Verderbens"
			},
			effect: {
				'en-us': "This Pokémon is now Asleep. At the end of your opponent’s next turn, the Defending Pokémon will be Knocked Out.",
				'fr-fr': "Ce Pokémon est maintenant Endormi. À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera K.O.",
				'es-es': "Este Pokémon pasa a estar Dormido. Al final del próximo turno de tu rival, el Pokémon Defensor quedará Fuera de Combate.",
				'it-it': "Questo Pokémon viene addormentato. Alla fine del prossimo turno del tuo avversario, il Pokémon difensore verrà messo KO.",
				'pt-br': "Este Pokémon agora está Adormecido. O Pokémon Defensor será Nocauteado no final da próxima vez de jogar do seu oponente.",
				'de-de': "Dieses Pokémon schläft jetzt. Am Ende des nächsten Zuges deines Gegners wird das Verteidigende Pokémon kampfunfähig."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is said to have the ability to grant any wish for just one week every thousand years.",
	},

	thirdParty: {
		cardmarket: 359573
	}
}

export default card
