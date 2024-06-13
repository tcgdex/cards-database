import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [861],
	set: Set,

	name: {
		fr: "Angoliath V",
		en: "Grimmsnarl V",
		es: "Grimmsnarl V",
		it: "Grimmsnarl V",
		pt: "Grimmsnarl V",
		de: "Olangaar V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	attacks: [{
		name: {
			fr: "Morsure",
			en: "Bite",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 40,
		cost: ["Darkness"]
	}, {
		name: {
			fr: "Poing Piquant",
			en: "Spiky Knuckle",
			es: "Nudillo Puntiagudo",
			it: "Noccaspina",
			pt: "Punho Espinhoso",
			de: "Stachelfaust"
		},

		effect: {
			fr: "Ajoutez à votre main 2 Énergies Darkness attachées à ce Pokémon.",
			en: "Put 2 Darkness Energy attached to this Pokémon into your hand.",
			es: "Pon 2 Energías Darkness unidas a este Pokémon en tu mano.",
			it: "Prendi due Energie Darkness assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
			pt: "Coloque 2 Energias Darkness ligadas a este Pokémon na sua mão.",
			de: "Nimm 2 an dieses Pokémon angelegte Darkness-Energien auf deine Hand."
		},

		damage: 200,
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",
	suffix: "V"
}

export default card
