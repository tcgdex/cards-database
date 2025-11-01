import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [137],
	set: Set,

	name: {
		en: "Team Rocket's Porygon",
		fr: "Porygon de la Team Rocket",
		de: "Team Rockets Porygon",
		it: "Porygon del Team Rocket",
		es: "Porygon del Team Rocket",
		pt: "Porygon da Equipe Rocket",
		'es-mx': "Porygon del Equipo Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Hacking",
			fr: "Piratage de Données",
			de: "Hacking",
			it: "Hacking",
			es: "Hackear",
			pt: "Hackeamento",
			'es-mx': "Hackeo"
		},

		effect: {
			en: "Discard a card from your hand. If you do, your opponent discards a card from their hand.",
			fr: "Défaussez une carte de votre main. Dans ce cas, votre adversaire défausse une carte de sa main.",
			de: "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, legt dein Gegner 1 Karte aus seiner Hand auf seinen Ablagestapel.",
			it: "Scarta una carta che hai in mano. Se lo fai, il tuo avversario scarta una carta che ha in mano.",
			es: "Descarta 1 carta de tu mano. Si lo haces, tu rival descarta 1 carta de su mano.",
			pt: "Descarte uma carta da sua mão. Se fizer isto, seu oponente descartará uma carta da mão dele.",
			'es-mx': "Descarta 1 carta de tu mano. Si lo haces, tu rival descarta 1 carta de su mano."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 826027
	}
}

export default card
