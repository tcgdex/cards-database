import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Technical Machine: Turbo Energize",
		'fr-fr': "Capsule Technique : Énergisant Spontané",
		'es-es': "Máquina Técnica: Turboenergía",
		'it-it': "Macchinario Tecnico: Turboenergia",
		'pt-br': "Máquina Técnica: Turboenergização",
		'de-de': "Technische Maschine: Schubenergie"
	},

	rarity: "Uncommon",
	category: "Trainer",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Turbo Energize",
			'fr-fr': "Énergisant Spontané",
			'es-es': "Turboenergía",
			'it-it': "Turboenergia",
			'pt-br': "Turboenergização",
			'de-de': "Schubenergie"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base e assegnale ai tuoi Pokémon in panchina nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia Básica no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck."
		}
	}],

	effect: {
		'en-us': "The Pokémon this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.) If this card is attached to 1 of your Pokémon, discard it at the end of your turn.",
		'fr-fr': "Le Pokémon auquel cette carte est attachée peut utiliser l'attaque sur cette carte. (Vous avez toujours besoin des Énergies nécessaires pour utiliser cette attaque.) Si cette carte est attachée à l'un de vos Pokémon, défaussez-la à la fin de votre tour.",
		'es-es': "El Pokémon al que esté unida esta carta puede usar el ataque de esta carta. (Sigues necesitando las Energías necesarias para usar este ataque). Si esta carta está unida a uno de tus Pokémon, descártala al final de tu turno.",
		'it-it': "Il Pokémon a cui è assegnata questa carta può usare l'attacco di questa carta. Devi comunque avere l'Energia necessaria per usare questo attacco. Se questa carta è assegnata a uno dei tuoi Pokémon, scartala alla fine del tuo turno.",
		'pt-br': "O Pokémon ao qual esta carta está ligada pode usar o ataque desta carta. (Você ainda precisa da Energia necessária para usar este ataque.) Se esta carta estiver ligada a 1 dos seus Pokémon, descarte-a no final do seu turno.",
		'de-de': "Das Pokémon, an das diese Karte angelegt ist, kann die Attacke auf dieser Karte einsetzen. (Du benötigst jedoch die für diese Attacke notwendige Energie.) Wenn diese Karte an 1 deiner Pokémon angelegt ist, lege sie am Ende deines Zuges auf deinen Ablagestapel."
	},

	trainerType: "Tool",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740722,
				tcgplayer: 523860,
				cardtrader: 265547
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740722,
				tcgplayer: 523860,
				cardtrader: 265547
			}
		},
	],

	illustrator: "Studio Bora Inc.",

	
}

export default card
