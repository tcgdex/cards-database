import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [472],
	set: Set,

	name: {
		'en-us': "Gliscor",
		'fr-fr': "Scorvol",
		'es-es': "Gliscor",
		'it-it': "Gliscor",
		'pt-br': "Gliscor",
		'de-de': "Skorgro"
	},

	illustrator: "Shiburingaru",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
		'es-es': "Gligar",
		'it-it': "Gligar",
		'pt-br': "Gligar",
		'de-de': "Skorgla"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Hurricane Shock",
			'fr-fr': "Choc Ouragan",
			'es-es': "Sacudida Huracán",
			'it-it': "Tifone Shock",
			'pt-br': "Choque Furacão",
			'de-de': "Orkanschock"
		},

		effect: {
			'en-us': "Flip 4 coins. This attack does 50 damage for each heads. If at least 2 of them are heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez 4 pièces. Cette attaque inflige 50 dégâts pour chaque côté face. Si vous obtenez au moins 2 côtés face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara. Si sale cara en por lo menos 2 de ellas, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa. Se esce almeno due volte testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 50 pontos de dano para cada cara. Se pelo menos 2 delas saírem cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'de-de': "Wirf 4 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu. Wenn mindestens 2 Münzen Kopf zeigen, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: "50×"
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674108,
				tcgplayer: 283985
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674108,
				tcgplayer: 283985
			}
		},
	],
}

export default card
