import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [1008],
	set: Set,

	name: {
		en: "Miraidon ex",
		fr: "Miraidon-ex",
		es: "Miraidon ex",
		it: "Miraidon-ex",
		pt: "Miraidon ex",
		de: "Miraidon-ex"
	},

	rarity: "Special illustration rare",
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
			pt: "Unidade Tandem",
			de: "Tandem-Aggregat"
		},

		effect: {
			en: "Once during your turn, you may search your deck for up to 2 Basic {L} Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 Pokémon {L} de base, puis les placer sur votre Banc. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja hasta 2 Pokémon {L} Básicos y ponerlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a due Pokémon Base {L} e metterli nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá procurar por até 2 Pokémon {L} Básicos no seu baralho e colocá-los no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Einmal während deines Zuges kannst du dein Deck nach bis zu 2 Basis-{L}-Pokémon durchsuchen und sie auf deine Bank legen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Photon Blaster",
			fr: "Réacteur à Photons",
			es: "Cohete Fotónico",
			it: "Esplosione Fotonica",
			pt: "Detonador de Fótons",
			de: "Photonenblaster"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 220
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "kantaro",

	thirdParty: {
        cardmarket: 689766,
        tcgplayer: 485259
    }
}

export default card