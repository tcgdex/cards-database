import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Jirachi ◇",
		fr: "Jirachi ◇",
		es: "Jirachi ◇",
		it: "Jirachi ◇",
		pt: "Jirachi ◇",
		de: "Jirachi ◇"
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
				en: "Wish Upon a Star",
				fr: "Soupir aux Étoiles",
				es: "Deseo Estrellita",
				it: "Esprimi un Desiderio",
				pt: "Fazer um Pedido",
				de: "Sternschnuppenwunsch"
			},
			effect: {
				en: "If you took this Pokémon as a face-down Prize card during your turn and your Bench isn’t full, before you put it into your hand, you may put it onto your Bench and take 1 more Prize card.",
				fr: "Si vous avez obtenu ce Pokémon en récupérant une carte Récompense face cachée lors de votre tour, et si votre banc n’est pas plein, plutôt que d’ajouter cette carte à votre main, vous pouvez la placer sur votre Banc et récupérer une carte Récompense supplémentaire.",
				es: "Si has cogido este Pokémon de entre las cartas de Premio que están boca abajo durante tu turno y tu Banca no está llena, antes de ponerlo en tu mano, puedes ponerlo en tu Banca y coger 1 carta de Premio más.",
				it: "Se hai preso questo Pokémon come carta Premio coperta durante il tuo turno e la tua panchina non è piena, prima di aggiungerlo alle carte che hai in mano, puoi metterlo nella tua panchina e prendere una carta Premio in più.",
				pt: "Se você pegou este Pokémon de uma de suas cartas de Prêmio viradas para baixo durante a sua vez de jogar e o seu Banco não estiver cheio, antes de colocá-lo na sua mão, você poderá colocá-lo no seu Banco e pegar 1 carta de Prêmio a mais.",
				de: "Wenn du dieses Pokémon während deines Zuges als verdeckte Preiskarte genommen hast und deine Bank nicht voll ist, bevor du es auf deine Hand nimmst, kannst du es auf deine Bank legen und 1 Preiskarte mehr nehmen."
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
				en: "Perish Dream",
				fr: "Rêve Languissant",
				es: "Sueño Mortal",
				it: "Ultimosogno",
				pt: "Sonho Morto",
				de: "Traum des Verderbens"
			},
			effect: {
				en: "This Pokémon is now Asleep. At the end of your opponent’s next turn, the Defending Pokémon will be Knocked Out.",
				fr: "Ce Pokémon est maintenant Endormi. À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera K.O.",
				es: "Este Pokémon pasa a estar Dormido. Al final del próximo turno de tu rival, el Pokémon Defensor quedará Fuera de Combate.",
				it: "Questo Pokémon viene addormentato. Alla fine del prossimo turno del tuo avversario, il Pokémon difensore verrà messo KO.",
				pt: "Este Pokémon agora está Adormecido. O Pokémon Defensor será Nocauteado no final da próxima vez de jogar do seu oponente.",
				de: "Dieses Pokémon schläft jetzt. Am Ende des nächsten Zuges deines Gegners wird das Verteidigende Pokémon kampfunfähig."
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



}

export default card
