import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rotom",
		'fr-fr': "Motisma",
		'es-es': "Rotom",
		'es-mx': "Rotom",
		'de-de': "Rotom",
		'it-it': "Rotom",
		'pt-br': "Rotom"
	},

	illustrator: "mingo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [479],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Roto Call",
			'fr-fr': "Moti-Appel",
			'es-es': "Llamada Rotom",
			'es-mx': "Llamada Rotom",
			'de-de': "Roto-Ruf",
			'it-it': "Rotochiamata",
			'pt-br': "Chamada Rotom"
		},

		effect: {
			'en-us': "You may search your deck for any number of Pokémon that have \"Rotom\" in their name and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Vous pouvez chercher dans votre deck le nombre voulu de Pokémon ayant \" Motisma \" dans leur nom, puis les placer sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Puedes buscar en tu baraja cualquier cantidad de Pokémon que tengan \"Rotom\" en su nombre y ponerlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'es-mx': "Puedes buscar en tu mazo cualquier cantidad de Pokémon que tengan \"Rotom\" en su nombre y ponerlos en tu Banca. Después, baraja tu mazo.",
			'de-de': "Du kannst dein Deck nach beliebig vielen Pokémon durchsuchen, bei denen \"Rotom\" zum Namen gehört, und sie auf deine Bank legen. Mische anschließend dein Deck.",
			'it-it': "Puoi cercare nel tuo mazzo un numero qualsiasi di Pokémon che hanno \"Rotom\" nel nome e metterli nella tua panchina. Poi rimischia il tuo mazzo.",
			'pt-br': "Você pode procurar por qualquer número de Pokémon no seu baralho que têm \"Rotom\" em seu nome e colocá-los no seu Banco. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gadget Show",
			'fr-fr': "Démonstration de Gadgets",
			'es-es': "Espectáculo de Utensilios",
			'es-mx': "Show de Artefactos",
			'de-de': "Gadget-Show",
			'it-it': "Mostra di Gadget",
			'pt-br': "Show de Bugigangas"
		},

		effect: {
			'en-us': "This attack does 30 damage for each Pokémon Tool attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Outil Pokémon attaché à tous vos Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño por cada Herramienta Pokémon unida a cada uno de tus Pokémon.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada Herramienta Pokémon unida a cada uno de tus Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte Pokémon-Ausrüstung 30 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 30 danni per ogni carta Oggetto Pokémon assegnata ai tuoi Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Ferramenta Pokémon ligada a todos os seus Pokémon."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "Research continues on this Pokémon, which could be the power source of a unique motor.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869703,
			tcgplayer: 675904
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870280,
			tcgplayer: 676924
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870279,
			tcgplayer: 677064
		}
	},
],
}

export default card
