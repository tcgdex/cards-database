import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Breloom",
		'fr-fr': "Chapignon",
		'es-es': "Breloom",
		'it-it': "Breloom",
		'pt-br': "Breloom",
		'de-de': "Kapilz"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		286,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Hibernation Spore",
				'fr-fr': "Spore d’Hibernation",
				'es-es': "Espora Hibernación",
				'it-it': "Spora Ibernante",
				'pt-br': "Esporos Hibernais",
				'de-de': "Winterschlafsporen"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep. Your opponent flips 2 coins instead of 1 between turns. If either of them is tails, that Pokémon is still Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi. Votre adversaire lance 2 pièces au lieu d’une entre chaque tour. S’il obtient au moins un côté pile, le Pokémon reste Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido. Tu rival lanza 2 monedas en vez de 1 entre turnos. Si sale cruz en alguna de ellas, ese Pokémon está todavía Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato. Tra un turno e l’altro, il tuo avversario lancia due volte una moneta invece di una. Se esce almeno una volta croce, quel Pokémon resta addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido. Seu oponente joga 2 moedas ao invés de 1 entre as vezes de jogar. Se qualquer uma delas sair coroa, aquele Pokémon permanecerá Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt. Dein Gegner wirft zwischen den Zügen 2 Münzen anstelle von 1 Münze. Wenn eine oder beide Münzen Zahl zeigen, schläft jenes Pokémon weiter."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magnum Punch",
				'fr-fr': "Poing Magnum",
				'es-es': "Puño Magnum",
				'it-it': "Superpugno",
				'pt-br': "Soco Magnum",
				'de-de': "Magnum-Schlag"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its short arms stretch when it throws punches. Its technique is equal to that of pro boxers.",
	},

	thirdParty: {
		cardmarket: 302143,
		tcgplayer: 146657
	}
}

export default card
