import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Lokhlass V",
		en: "Lapras V",
		es: "Lapras V",
		it: "Lapras V",
		pt: "Lapras V",
		de: "Lapras V"
	},

	illustrator: "5ban Graphics",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	attacks: [{
		name: {
			fr: "Body Surf",
			en: "Body Surf",
			es: "Surfeo Corporal",
			it: "Surf Libero",
			pt: "Pegar Jacaré",
			de: "Bodysurfen"
		},

		effect: {
			fr: "Attachez une carte Énergie Water de votre main à ce Pokémon. Dans ce cas, échangez-le contre l'un de vos Pokémon de Banc.",
			en: "Attach a Water Energy card from your hand to this Pokémon. If you do, switch it with 1 of your Benched Pokémon.",
			es: "Une 1 carta de Energía Water de tu mano a este Pokémon. Si lo haces, cámbialo por 1 de tus Pokémon en Banca.",
			it: "Assegna a questo Pokémon una carta Energia Water dalla tua mano. Se lo fai, scambialo con uno della tua panchina.",
			pt: "Ligue 1 carta de Energia Water da sua mão a este Pokémon. Se fizer isto, troque-o por 1 dos seus Pokémon no Banco.",
			de: "Lege 1 Water-Energiekarte aus deiner Hand an dieses Pokémon an. Wenn du das machst, tausche es gegen 1 Pokémon auf deiner Bank aus."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Boucle Océanique",
			en: "Ocean Loop",
			es: "Bucle Oceánico",
			it: "Circuito Oceanico",
			pt: "Loop Oceânico",
			de: "Meereskreislauf"
		},

		effect: {
			fr: "Ajoutez à votre main 2 Énergies Water attachées à ce Pokémon.",
			en: "Put 2 Water Energy attached to this Pokémon into your hand.",
			es: "Pon 2 Energías Water unidas a este Pokémon en tu mano.",
			it: "Prendi due Energie Water assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
			pt: "Coloque 2 cartas de Energia Water ligadas a este Pokémon na sua mão.",
			de: "Nimm 2 an dieses Pokémon angelegte Water-Energien auf deine Hand."
		},

		damage: 210,
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",
	suffix: "V"
}

export default card
