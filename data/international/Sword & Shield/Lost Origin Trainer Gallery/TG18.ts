import { Card } from "models/database/card"
import Set from "../Lost Origin Trainer Gallery"

const card: Card = {
	dexId: [905],
	set: Set,

	name: {
		'en-us': "Enamorus V",
		'fr-fr': "Amovénus V",
		'es-es': "Enamorus V",
		'it-it': "Enamorus V",
		'pt-br': "Enamorus V",
		'de-de': "Cupidos V"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Guardian of Love",
			'fr-fr': "Garde de l'Amour",
			'es-es': "Guardián del Amor",
			'it-it': "Guardiano dell'Amore",
			'pt-br': "Guardião do Amor",
			'de-de': "Hüter der Liebe"
		},

		effect: {
			'en-us': "Prevent all effects of your opponent's Pokémon's Abilities done to each of your Pokémon that has any Psychic Energy attached, except any Enamorus V.",
			'fr-fr': "Évitez tous les effets des talents des Pokémon de votre adversaire infligés à chacun de vos Pokémon auquel au moins une Énergie Psychic est attachée, à l'exception d'un Amovénus-V.",
			'es-es': "Evita todos los efectos de las habilidades de los Pokémon de tu rival infligidos a cada uno de tus Pokémon que tenga alguna Energía Psychic unida a él, excepto a los Enamorus V.",
			'it-it': "Previeni tutti gli effetti delle abilità dei Pokémon del tuo avversario inflitti ai tuoi Pokémon che hanno delle Energie Psychic assegnate, a eccezione di qualsiasi Enamorus-V.",
			'pt-br': "Previna todos os efeitos das Habilidades dos Pokémon do seu oponente causados a cada um dos seus Pokémon que tiver alguma Energia Psychic ligada a ele, exceto por quaisquer Enamorus V.",
			'de-de': "Verhindere alle Effekte von Fähigkeiten der Pokémon deines Gegners, die jedem deiner Pokémon, an das mindestens 1 Psychic-Energie angelegt ist, außer Cupidos-V, zugefügt werden."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Blossom Tail",
			'fr-fr': "Queue Fleurie",
			'es-es': "Cola Floración",
			'it-it': "Fioricoda",
			'pt-br': "Cauda Florida",
			'de-de': "Blütenschweif"
		},

		effect: {
			'en-us': "Attach up to 2 basic Energy cards from your discard pile to your Benched Pokémon in any way you like.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie de base de votre pile de défausse à vos Pokémon de Banc comme il vous plaît.",
			'es-es': "Une hasta 2 cartas de Energía Básica de tu pila de descartes a tus Pokémon en Banca de la manera que desees.",
			'it-it': "Assegna ai tuoi Pokémon in panchina fino a due carte Energia base dalla tua pila degli scarti nel modo che preferisci.",
			'pt-br': "Ligue até 2 cartas de Energia básica da sua pilha de descarte aos seus Pokémon no Banco como desejar.",
			'de-de': "Lege bis zu 2 Basis-Energiekarten aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an."
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674236,
				tcgplayer: 284284
			}
		},
	],
}

export default card
