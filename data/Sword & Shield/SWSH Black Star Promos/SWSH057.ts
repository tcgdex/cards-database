import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Grimmsnarl V",
		fr: "Angoliath V",
		es: "Grimmsnarl V",
		it: "Grimmsnarl V",
		pt: "Grimmsnarl V",
		de: "Olangaar V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Bite",
			de: "Biss"
		},

		damage: 40,
		cost: ["Darkness"]
	}, {
		name: {
			en: "Spiky Knuckle",
			fr: "Poing Piquant",
			es: "Nudillo Puntiagudo",
			it: "Noccaspina",
			pt: "Spiky Knuckle",
			de: "Stachelfaust"
		},

		effect: {
			en: "Put 2 Darkness Energy attached to this Pokémon into your hand.",
			fr: "Ajoutez à votre main 2 Énergies Darkness attachées à ce Pokémon.",
			es: "Pon 2 Energías Darkness unidas a este Pokémon en tu mano.",
			it: "Prendi due Energie Darkness assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
			pt: "Put 2 Darkness Energy attached to this Pokémon into your hand.",
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
	stage: "Basic",
	dexId: [861],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V"
}

export default card
