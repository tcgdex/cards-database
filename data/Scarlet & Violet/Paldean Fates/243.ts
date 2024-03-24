import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Miraidon ex",
		fr: "Miraidon-ex",
		es: "Miraidon ex",
		it: "Miraidon-ex",
		de: "Miraidon-ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 220,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Tandem Unit",
			fr: "Unité Tandem",
			es: "Unidad Tándem",
			it: "Unità Duplice",
			de: "Tandem-Aggregat"
		},

		effect: {
			en: "Once during your turn, you may search your deck for up to 2 Basic Lightning Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 Pokémon Lightning de base, puis les placer sur votre Banc. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja hasta 2 Pokémon Lightning Básicos y ponerlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a due Pokémon Base Lightning e metterli nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			de: "Einmal während deines Zuges kannst du dein Deck nach bis zu 2 Basis-Lightning-Pokémon durchsuchen und sie auf deine Bank legen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Photon Blaster",
			fr: "Réacteur à Photons",
			es: "Cohete Fotónico",
			it: "Esplosione Fotonica",
			de: "Photonenblaster"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 220
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card