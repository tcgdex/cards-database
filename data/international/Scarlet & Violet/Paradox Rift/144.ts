import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [474],
	set: Set,

	name: {
		'en-us': "Porygon-Z",
		'fr-fr': "Porygon-Z",
		'es-es': "Porygon-Z",
		'it-it': "Porygon-Z",
		'pt-br': "Porygon-Z",
		'de-de': "Porygon-Z"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
		'es-es': "Porygon2",
		'it-it': "Porygon2",
		'pt-br': "Porygon2",
		'de-de': "Porygon2"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Buggy Turbo",
			'fr-fr': "Turbo Bogué",
			'es-es': "Turbo Defectuoso",
			'it-it': "Turbo Malfunzionante",
			'pt-br': "Turbo Bugado",
			'de-de': "Verbuggter Turbo"
		},

		effect: {
			'en-us': "Once during your turn, you may flip a coin. If heads, attach up to 4 Basic Energy cards from your discard pile to this Pokémon. If tails, discard an Energy from this Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c'est face, attachez jusqu'à 4 cartes Énergie de base de votre pile de défausse à ce Pokémon. Si c'est pile, défaussez une Énergie de ce Pokémon.",
			'es-es': "Una vez durante tu turno, puedes lanzar 1 moneda. Si sale cara, une hasta 4 cartas de Energía Básica de tu pila de descartes a este Pokémon. Si sale cruz, descarta 1 Energía de este Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, puoi lanciare una moneta. Se esce testa, assegna a questo Pokémon fino a quattro carte Energia base dalla tua pila degli scarti. Se esce croce, scarta un'Energia da questo Pokémon.",
			'pt-br': "Uma vez durante o seu turno, você poderá jogar uma moeda. Se sair cara, ligue até 4 cartas de Energia Básica da sua pilha de descarte a este Pokémon. Se sair coroa, descarte uma Energia deste Pokémon.",
			'de-de': "Einmal während deines Zuges kannst du 1 Münze werfen. Lege bei Kopf bis zu 4 Basis-Energiekarten aus deinem Ablagestapel an dieses Pokémon an. Lege bei Zahl 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Energized Attack",
			'fr-fr': "Attaque Énergisée",
			'es-es': "Ataque Energético",
			'it-it': "Attacco Energizzato",
			'pt-br': "Ataque Energético",
			'de-de': "Energiegeladener Angriff"
		},

		effect: {
			'en-us': "This attack does 40 damage for each Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts pour chaque Énergie attachée à ce Pokémon.",
			'es-es': "Este ataque hace 40 puntos de daño por cada Energía unida a este Pokémon.",
			'it-it': "Questo attacco infligge 40 danni per ogni Energia assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 40 pontos de dano para cada Energia ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 40 Schadenspunkte zu."
		},

		damage: "40×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Some say an additional program made this Pokémon evolve, but even academics can't agree on whether Porygon-Z is really an evolution.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740682,
				tcgplayer: 523825,
				cardtrader: 265212
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 786605
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740682,
				tcgplayer: 523825,
				cardtrader: 265212
			}
		},
	],

	illustrator: "hatachu",

	
}

export default card
