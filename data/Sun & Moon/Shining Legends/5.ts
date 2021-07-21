import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Breloom",
		fr: "Chapignon",
		es: "Breloom",
		it: "Breloom",
		pt: "Breloom",
		de: "Kapilz"
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
		en: "Shroomish",
		fr: "Balignon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Hibernation Spore",
				fr: "Spore d’Hibernation",
				es: "Espora Hibernación",
				it: "Spora Ibernante",
				pt: "Esporos Hibernais",
				de: "Winterschlafsporen"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep. Your opponent flips 2 coins instead of 1 between turns. If either of them is tails, that Pokémon is still Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Votre adversaire lance 2 pièces au lieu d’une entre chaque tour. S’il obtient au moins un côté pile, le Pokémon reste Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido. Tu rival lanza 2 monedas en vez de 1 entre turnos. Si sale cruz en alguna de ellas, ese Pokémon está todavía Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato. Tra un turno e l’altro, il tuo avversario lancia due volte una moneta invece di una. Se esce almeno una volta croce, quel Pokémon resta addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido. Seu oponente joga 2 moedas ao invés de 1 entre as vezes de jogar. Se qualquer uma delas sair coroa, aquele Pokémon permanecerá Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt. Dein Gegner wirft zwischen den Zügen 2 Münzen anstelle von 1 Münze. Wenn eine oder beide Münzen Zahl zeigen, schläft jenes Pokémon weiter."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnum Punch",
				fr: "Poing Magnum",
				es: "Puño Magnum",
				it: "Superpugno",
				pt: "Soco Magnum",
				de: "Magnum-Schlag"
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



}

export default card
