import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Rotom",
		fr: "Motisma",
		es: "Rotom",
		'es-mx': "Rotom",
		de: "Rotom",
		it: "Rotom",
		pt: "Rotom"
	},

	illustrator: "mingo",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Roto Call",
			fr: "Moti-Appel",
			es: "Llamada Rotom",
			'es-mx': "Llamada Rotom",
			de: "Roto-Ruf",
			it: "Rotochiamata",
			pt: "Chamada Rotom"
		},

		effect: {
			en: "You may search your deck for any number of Pokémon that have \"Rotom\" in their name and put them onto your Bench. Then, shuffle your deck.",
			fr: "Vous pouvez chercher dans votre deck le nombre voulu de Pokémon ayant \" Motisma \" dans leur nom, puis les placer sur votre Banc. Mélangez ensuite votre deck.",
			es: "Puedes buscar en tu baraja cualquier cantidad de Pokémon que tengan \"Rotom\" en su nombre y ponerlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'es-mx': "Puedes buscar en tu mazo cualquier cantidad de Pokémon que tengan \"Rotom\" en su nombre y ponerlos en tu Banca. Después, baraja tu mazo.",
			de: "Du kannst dein Deck nach beliebig vielen Pokémon durchsuchen, bei denen \"Rotom\" zum Namen gehört, und sie auf deine Bank legen. Mische anschließend dein Deck.",
			it: "Puoi cercare nel tuo mazzo un numero qualsiasi di Pokémon che hanno \"Rotom\" nel nome e metterli nella tua panchina. Poi rimischia il tuo mazzo.",
			pt: "Você pode procurar por qualquer número de Pokémon no seu baralho que têm \"Rotom\" em seu nome e colocá-los no seu Banco. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gadget Show",
			fr: "Démonstration de Gadgets",
			es: "Espectáculo de Utensilios",
			'es-mx': "Show de Artefactos",
			de: "Gadget-Show",
			it: "Mostra di Gadget",
			pt: "Show de Bugigangas"
		},

		effect: {
			en: "This attack does 30 damage for each Pokémon Tool attached to all of your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque Outil Pokémon attaché à tous vos Pokémon.",
			es: "Este ataque hace 30 puntos de daño por cada Herramienta Pokémon unida a cada uno de tus Pokémon.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada Herramienta Pokémon unida a cada uno de tus Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Pokémon-Ausrüstung 30 Schadenspunkte zu.",
			it: "Questo attacco infligge 30 danni per ogni carta Oggetto Pokémon assegnata ai tuoi Pokémon.",
			pt: "Este ataque causa 30 pontos de dano para cada Ferramenta Pokémon ligada a todos os seus Pokémon."
		},

		damage: "30×"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675904,
		cardmarket: 869703
	}
}

export default card