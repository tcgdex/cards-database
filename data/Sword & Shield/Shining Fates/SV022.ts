import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [245],
	set: Set,

	name: {
		fr: "Suicune",
		en: "Suicune",
		es: "Suicune",
		it: "Suicune",
		pt: "Suicune",
		de: "Suicune"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	attacks: [{
		name: {
			fr: "Grosse Vague",
			en: "Wave Splash",
			es: "Chapoteo Ondulante",
			it: "Schizzi d'Onda",
			pt: "Onda Borrifante",
			de: "Wellenplatscher"
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			fr: "Boucle Aurore",
			en: "Aurora Loop",
			es: "Bucle Aurora",
			it: "Circuito Aurora",
			pt: "Loop da Aurora",
			de: "Auroraschleife"
		},

		effect: {
			fr: "Ajoutez à votre main 2 Énergies Water attachées à ce Pokémon.",
			en: "Put 2 Water Energy attached to this Pokémon into your hand.",
			es: "Pon 2 Energías Water unidas a este Pokémon en tu mano.",
			it: "Prendi due Energie Water assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
			pt: "Coloque 2 Energias Water ligadas a este Pokémon na sua mão.",
			de: "Nimm 2 an dieses Pokémon angelegte Water-Energien auf deine Hand."
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "Said to be the embodiment of north winds, it can instantly purify filthy, murky water."
	},

	thirdParty: {
		cardmarket: 539498
	}
}

export default card
