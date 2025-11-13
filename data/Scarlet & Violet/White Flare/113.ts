import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [584],
	set: Set,

	name: {
		en: "Vanilluxe",
		fr: "Sorbouboul",
		de: "Gelatwino",
		it: "Vanilluxe",
		pt: "Vanilluxe",
		es: "Vanilluxe",
		'es-mx': "Vanilluxe"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	evolveFrom: {
		en: "Vanillish",
		fr: "Sorboul",
		de: "Gelatroppo",
		it: "Vanillish",
		pt: "Vanillish",
		es: "Vanillish",
		'es-mx': "Vanillish"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme",
			it: "Carica",
			pt: "Aríete",
			es: "Apisonar",
			'es-mx': "Colisión"
		},

		damage: 60
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Double Freeze",
			fr: "Double Gelure",
			de: "Doppelfroster",
			it: "Doppiogelo",
			pt: "Congelamento Duplo",
			es: "Doble Congelación",
			'es-mx': "Doble Congelación"
		},

		effect: {
			en: "Flip 2 coins. This attack does 90 damage for each heads. If either of them is heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face. Si vous obtenez au moins un côté face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu. Zeigt mindestens 1 Kopf, ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Lancia due volte una moneta. Questo attacco infligge 90 danni ogni volta che esce testa. Se esce almeno una volta testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue 2 moedas. Este ataque causa 90 pontos de dano para cada cara. Se qualquer uma delas sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			es: "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara. Si sale cara en alguna de ellas, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara. Si sale alguna cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: "90×"
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836120
	}
}

export default card