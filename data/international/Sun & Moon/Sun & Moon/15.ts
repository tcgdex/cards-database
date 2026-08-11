import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Lurantis GX",
		'fr-fr': "Floramantis GX",
		'es-es': "Lurantis GX",
		'it-it': "Lurantis GX",
		'pt-br': "Lurantis GX",
		'de-de': "Mantidea GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		754,
	],

	hp: 210,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Fomantis",
		'fr-fr': "Mimantis",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Flower Supply",
				'fr-fr': "Provision Florale",
				'es-es': "Suministro de Flores",
				'it-it': "Riserva Floreale",
				'pt-br': "Estoque de Flores",
				'de-de': "Blumenvorrat"
			},
			effect: {
				'en-us': "Attach 2 basic Energy cards from your discard pile to your Pokémon in any way you like.",
				'fr-fr': "Attachez 2 cartes Énergie de base de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
				'es-es': "Une 2 cartas de Energía Básica de tu pila de descartes a tus Pokémon de la manera que desees.",
				'it-it': "Assegna a piacimento ai tuoi Pokémon due carte Energia base dalla tua pila degli scarti.",
				'pt-br': "Ligue 2 cartas de Energia básica da sua pilha de descarte aos seus Pokémon como desejar.",
				'de-de': "Lege 2 Basis-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an."
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Solar Blade",
				'fr-fr': "Lame Solaire",
				'es-es': "Cuchilla Solar",
				'it-it': "Lama Solare",
				'pt-br': "Lâmina Solar",
				'de-de': "Solarklinge"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 120,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Chloroscythe GX",
				'fr-fr': "Chlorofaucille GX",
				'es-es': "Cloroguadaña GX",
				'it-it': "Clorofalce-GX",
				'pt-br': "Foice de Clorofila GX",
				'de-de': "Chlorosense GX"
			},
			effect: {
				'en-us': "This attack does 50 damage times the amount of Grass Energy attached to this Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 50 dégâts multipliés par le nombre d’Énergies Grass attachées à ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Este ataque hace 50 puntos de daño por cada Energía Grass unida a este Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Questo attacco infligge 50 danni per ogni Energia Grass assegnata a questo Pokémon. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Este ataque causa 50 pontos de dano vezes a quantidade de Energia Grass ligada a este Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten Grass-Energien zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 295322,
		tcgplayer: 126886
	}
}

export default card
