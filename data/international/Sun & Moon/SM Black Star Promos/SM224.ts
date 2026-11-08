import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [251],
	set: Set,

	name: {
		'en-us': "Celebi",
		'fr-fr': "Celebi",
		'es-es': "Celebi",
		'it-it': "Celebi",
		'pt-br': "Celebi",
		'de-de': "Celebi"
	},

	illustrator: "Mizue",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Call for Greatness",
			'fr-fr': "Appel à l’Excellence",
			'es-es': "Llamada Magna",
			'it-it': "Cerca Grandezza",
			'pt-br': "Chamar a Grandeza",
			'de-de': "Größenruf"
		},

		effect: {
			'en-us': "Search your deck for up to 3 Pokémon-GX with different names, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez jusqu’à 3 Pokémon-GX avec différents noms dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 Pokémon-GX con nombres diferentes, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre Pokémon-GX con nomi differenti, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 Pokémon-GX com nomes diferentes no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Pokémon-GX mit unterschiedlichen Namen, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Psy Bolt",
			'fr-fr': "Choc Mental",
			'es-es': "Rayo Psi",
			'it-it': "Psico",
			'pt-br': "Raio Psíquico",
			'de-de': "Mentale Blockade"
		},

		damage: 40,

		effect: {
			'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "This Pokémon wanders across time. Grass and trees flourish in the forests in which it has appeared.",
	},
}

export default card
