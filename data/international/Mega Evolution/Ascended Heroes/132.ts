import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Galarian Obstagoon",
		'fr-fr': "Ixon de Galar",
		'es-es': "Obstagoon de Galar",
		'es-mx': "Obstagoon de Galar",
		'de-de': "Galar-Barrikadax",
		'it-it': "Obstagoon di Galar",
		'pt-br': "Obstagoon de Galar"
	},

	evolveFrom: {
		'en-us': "Galarian Linoone",
		'fr-fr': "Linéon de Galar",
		'es-es': "Linoone de Galar",
		'es-mx': "Linoone de Galar",
		'de-de': "Galar-Geradaks",
		'it-it': "Linoone di Galar",
		'pt-br': "Linoone de Galar",
	},

	illustrator: "Dsuke",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [862],
	hp: 170,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Scarring Shout",
			'fr-fr': "Cri Meurtrissant",
			'es-es': "Grito Cicatriz",
			'es-mx': "Grito Desgarrador",
			'de-de': "Marternder Schrei",
			'it-it': "Urlosfregio",
			'pt-br': "Grito Grosseirão"
		},

		effect: {
			'en-us': "This attack does 70 damage for each damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 70 dégâts pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 70 puntos de daño por cada contador de daño en el Pokémon Activo de tu rival.",
			'es-mx': "Este ataque hace 70 puntos de daño por cada contador de daño en el Pokémon Activo de tu rival.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 70 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 70 danni per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 70 pontos de dano para cada contador de dano no Pokémon Ativo do seu oponente."
		},

		damage: "70×"
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Punk Smash",
			'fr-fr': "Broiement Punk",
			'es-es': "Golpe Punki",
			'es-mx': "Golpazo Punk",
			'de-de': "Punk Smash",
			'it-it': "Colpo Punk",
			'pt-br': "Esmagada Punk"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "Its voice is staggering in volume. Obstagoon has a tendency to take on a threatening posture and shout—this move is known as Obstruct.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869743,
			tcgplayer: 675944
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870346,
			tcgplayer: 676957
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870345,
			tcgplayer: 677097
		}
	},
],
}

export default card
