import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Pumpkaboo",
		fr: "Pitrouille",
		es: "Pumpkaboo",
		it: "Pumpkaboo",
		pt: "Pumpkaboo",
		de: "Irrbis"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Yuka Morii",

	abilities: [{
		type: "Ability",

		name: {
			en: "Pumpkin Pit",
			fr: "Citrouille Trouée",
			es: "Calabaza Orificio",
			it: "Zucca Cava",
			pt: "Pumpkin Pit",
			de: "Kürbisloch"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Stadium in play.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser un Stade en jeu.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes descartar un Estadio en juego.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scartare una carta Stadio in gioco.",
			pt: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Stadium in play.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Stadionkarte im Spiel auf den Ablagestapel legen."
		}
	}],

	attacks: [{
		name: {
			en: "Stampede",
			fr: "Ruée",
			es: "Estampida",
			it: "Fuggi Fuggi",
			pt: "Stampede",
			de: "Zertrampeln"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,

	description: {
		en: "The light that streams out from the holes in the pumpkin can hypnotize and control the people and Pokémon that see it."
	},

	dexId: [710],
	regulationMark: "E"
}

export default card