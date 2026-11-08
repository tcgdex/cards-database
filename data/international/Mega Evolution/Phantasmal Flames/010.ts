import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lokix",
		'fr-fr': "Gambex",
		'es-es': "Lokix",
		'es-mx': "Lokix",
		'de-de': "Lextremo",
		'it-it': "Lokix",
		'pt-br': "Lokix"
	},

	evolveFrom: {
		'en-us': "Nymble",
		'fr-fr': "Lilliterelle",
		'es-es': "Nymble",
		'es-mx': "Nymble",
		'de-de': "Micrick",
		'it-it': "Nymble",
		'pt-br': "Nymble",
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [920],
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Low Kick",
			'fr-fr': "Balayage",
			'es-es': "Patada Baja",
			'es-mx': "Patada Baja",
			'de-de': "Fußkick",
			'it-it': "Colpo Basso",
			'pt-br': "Rasteira"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Jumping Shot",
			'fr-fr': "Tir Bondissant",
			'es-es': "Disparo Saltarín",
			'es-mx': "Disparo con Salto",
			'de-de': "Springender Schuss",
			'it-it': "Saltocolpo",
			'pt-br': "Salto com Disparo"
		},

		effect: {
			'en-us': "Shuffle this Pokémon and all attached cards into your deck.",
			'fr-fr': "Mélangez avec votre deck ce Pokémon et toutes les cartes qui lui sont attachées.",
			'es-es': "Pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			'es-mx': "Baraja este Pokémon y todas las cartas unidas a él en tu mazo.",
			'de-de': "Mische dieses Pokémon und alle angelegten Karten in dein Deck.",
			'it-it': "Rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			'pt-br': "Embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "When it decides to fight all out, it stands on its previously folded legs to enter Showdown Mode. It neutralizes its enemies in short order.",
	},

	illustrator: "Taiga Kasai",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857585,
				tcgplayer: 662176,
				cardtrader: 356794
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857585,
				tcgplayer: 662176,
				cardtrader: 356794
			}
		},
	],
}

export default card
