import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [584],
	set: Set,

	name: {
		'en-us': "Vanilluxe",
		'fr-fr': "Sorbouboul",
		'de-de': "Gelatwino",
		'it-it': "Vanilluxe",
		'pt-br': "Vanilluxe",
		'es-es': "Vanilluxe",
		'es-mx': "Vanilluxe"
	},

	illustrator: "cochi8i",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Vanillish",
		'fr-fr': "Sorboul",
		'de-de': "Gelatroppo",
		'it-it': "Vanillish",
		'pt-br': "Vanillish",
		'es-es': "Vanillish",
		'es-mx': "Vanillish"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'de-de': "Ramme",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'es-es': "Apisonar",
			'es-mx': "Colisión"
		},

		damage: 60
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Double Freeze",
			'fr-fr': "Double Gelure",
			'de-de': "Doppelfroster",
			'it-it': "Doppiogelo",
			'pt-br': "Congelamento Duplo",
			'es-es': "Doble Congelación",
			'es-mx': "Doble Congelación"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 90 damage for each heads. If either of them is heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face. Si vous obtenez au moins un côté face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu. Zeigt mindestens 1 Kopf, ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 90 danni ogni volta che esce testa. Se esce almeno una volta testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 90 pontos de dano para cada cara. Se qualquer uma delas sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-es': "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara. Si sale cara en alguna de ellas, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara. Si sale alguna cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: "90×"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835960,
				tcgplayer: 642141
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835960,
				tcgplayer: 642141
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836545,
				tcgplayer: 642385
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836546,
				tcgplayer: 642313
			}
		},
	],
}

export default card
