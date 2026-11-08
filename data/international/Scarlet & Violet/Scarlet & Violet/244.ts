import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [1008],
	set: Set,

	name: {
		'en-us': "Miraidon ex",
		'fr-fr': "Miraidon-ex",
		'es-es': "Miraidon ex",
		'it-it': "Miraidon-ex",
		'pt-br': "Miraidon ex",
		'de-de': "Miraidon-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 220,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Tandem Unit",
			'fr-fr': "Unité Tandem",
			'es-es': "Unidad Tándem",
			'it-it': "Unità Duplice",
			'pt-br': "Unidade Tandem",
			'de-de': "Tandem-Aggregat"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for up to 2 Basic {L} Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 Pokémon {L} de base, puis les placer sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja hasta 2 Pokémon {L} Básicos y ponerlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a due Pokémon Base {L} e metterli nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por até 2 Pokémon {L} Básicos no seu baralho e colocá-los no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach bis zu 2 Basis-{L}-Pokémon durchsuchen und sie auf deine Bank legen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Photon Blaster",
			'fr-fr': "Réacteur à Photons",
			'es-es': "Cohete Fotónico",
			'it-it': "Esplosione Fotonica",
			'pt-br': "Detonador de Fótons",
			'de-de': "Photonenblaster"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	suffix: "ex",
	illustrator: "kantaro",

	thirdParty: {
        cardmarket: 702540,
        tcgplayer: 485259
    }
}

export default card