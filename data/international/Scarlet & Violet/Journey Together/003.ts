import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [12],
	set: Set,

	name: {
		'en-us': "Butterfree",
		'fr-fr': "Papilusion",
		'es-es': "Butterfree",
		'de-de': "Smettbo",
		'it-it': "Butterfree",
		'pt-br': "Butterfree",
		'es-mx': "Butterfree"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier",
		'es-es': "Metapod",
		'de-de': "Safcon",
		'it-it': "Metapod",
		'pt-br': "Metapod",
		'es-mx': "Metapod"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Scale Hurricane",
			'fr-fr': "Ouragan Écaille",
			'es-es': "Huracán Escama",
			'de-de': "Flügelstaubsturm",
			'it-it': "Tifone di Scaglie",
			'pt-br': "Furacão de Escamas",
			'es-mx': "Huracán de Escamas"
		},

		effect: {
			'en-us': "Flip 4 coins. This attack does 60 damage for each heads. If at least 2 of them are heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez 4 pièces. Cette attaque inflige 60 dégâts pour chaque côté face. Si vous obtenez au moins 2 côtés face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 4 monedas. Este ataque hace 60 puntos de daño por cada cara. Si sale cara en por lo menos 2 de ellas, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'de-de': "Wirf 4 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu. Zeigen mindestens 2 Münzen Kopf, ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa. Se esce almeno due volte testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 60 pontos de dano para cada cara. Se pelo menos 2 delas saírem cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-mx': "Lanza 4 monedas. Este ataque hace 60 puntos de daño por cada cara. Si salen al menos 2 caras, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: "60×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "satoma",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817155,
				tcgplayer: 623430
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817155,
				tcgplayer: 623430
			}
		},
	],
}

export default card
