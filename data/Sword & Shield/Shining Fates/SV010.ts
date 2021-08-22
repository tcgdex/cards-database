import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Tournicoton",
		en: "Gossifleur",
		es: "Gossifleur",
		it: "Gossifleur",
		pt: "Gossifleur",
		de: "Cottini"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Appel à la Famille",
			en: "Call for Family",
			es: "Llamar a la Familia",
			it: "Cerca Famiglia",
			pt: "Chamar a Família",
			de: "Familienruf"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu’à 3 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			en: "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 3 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 3 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Tranch’Herbe",
			en: "Razor Leaf",
			es: "Hoja Afilada",
			it: "Foglielama",
			pt: "Folha Navalha",
			de: "Rasierblatt"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "It whirls around in the wind while singing a joyous song. This delightful display has charmed many into raising this Pokémon."
	}
}

export default card