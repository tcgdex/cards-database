import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Enamorus V",
		fr: "Amovénus V",
		es: "Enamorus V",
		it: "Enamorus V",
		pt: "Enamorus V",
		de: "Cupidos V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Guardian of Love",
			fr: "Garde de l'Amour",
			es: "Guardián del Amor",
			it: "Guardiano dell'Amore",
			pt: "Guardião do Amor",
			de: "Hüter der Liebe"
		},

		effect: {
			en: "Prevent all effects of your opponent's Pokémon's Abilities done to each of your Pokémon that has any Psychic Energy attached, except any Enamorus V.",
			fr: "Évitez tous les effets des talents des Pokémon de votre adversaire infligés à chacun de vos Pokémon auquel au moins une Énergie Psychic est attachée, à l'exception d'un Amovénus-V.",
			es: "Evita todos los efectos de las habilidades de los Pokémon de tu rival infligidos a cada uno de tus Pokémon que tenga alguna Energía Psychic unida a él, excepto a los Enamorus V.",
			it: "Previeni tutti gli effetti delle abilità dei Pokémon del tuo avversario inflitti ai tuoi Pokémon che hanno delle Energie Psychic assegnate, a eccezione di qualsiasi Enamorus-V.",
			pt: "Previna todos os efeitos das Habilidades dos Pokémon do seu oponente causados a cada um dos seus Pokémon que tiver alguma Energia Psychic ligada a ele, exceto por quaisquer Enamorus V.",
			de: "Verhindere alle Effekte von Fähigkeiten der Pokémon deines Gegners, die jedem deiner Pokémon, an das mindestens 1 Psychic-Energie angelegt ist, außer Cupidos-V, zugefügt werden."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Blossom Tail",
			fr: "Queue Fleurie",
			es: "Cola Floración",
			it: "Fioricoda",
			pt: "Cauda Florida",
			de: "Blütenschweif"
		},

		effect: {
			en: "Attach up to 2 basic Energy cards from your discard pile to your Benched Pokémon in any way you like.",
			fr: "Attachez jusqu'à 2 cartes Énergie de base de votre pile de défausse à vos Pokémon de Banc comme il vous plaît.",
			es: "Une hasta 2 cartas de Energía Básica de tu pila de descartes a tus Pokémon en Banca de la manera que desees.",
			it: "Assegna ai tuoi Pokémon in panchina fino a due carte Energia base dalla tua pila degli scarti nel modo che preferisci.",
			pt: "Ligue até 2 cartas de Energia básica da sua pilha de descarte aos seus Pokémon no Banco como desejar.",
			de: "Lege bis zu 2 Basis-Energiekarten aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an."
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 674095,
		tcgplayer: 283964
	}
}

export default card
