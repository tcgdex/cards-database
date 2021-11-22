import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Honchkrow",
		fr: "Corboss"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		430,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Murkrow",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dark Genes",
				fr: "Gènes obscurs"
			},
			effect: {
				en: "As long as Honchkrow has the Energy necessary to use its attack, each of your Murkrow can use Honchkrow's attack as its own without the necessary Energy to use that attack.",
				fr: "Tant que Corboss possède l'Énergie nécessaire pour utiliser cette attaque, chacun de vos Cornèbres peut utiliser l'attaque de Corboss comme si c'était la sienne sans l'Énergie nécessaire pour utiliser cette attaque."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Wing Flaps",
				fr: "Battements d'ailes obscurs"
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
				fr: "Choisissez sans regarder 1 carte de la main de votre adversaire. Regardez-la et demandez à votre adversaire de la mélanger à son deck."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		fr: ": Ce Pokémon nocturne évolue en grandes volées escortées par des Cornèbre."
	}
}

export default card
