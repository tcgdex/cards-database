import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Darkrai ◇",
		fr: "Darkrai ◇",
		es: "Darkrai ◇",
		it: "Darkrai ◇",
		pt: "Darkrai ◇",
		de: "Darkrai ◇"
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		491,
	],
	hp: 160,
	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Nightmare Star",
				fr: "Étoile Cauchemar",
				es: "Estrella Pesadilla",
				it: "Stella degli Incubi",
				pt: "Estrela Pesadelo",
				de: "Albtraumstern"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may attach 2 Darkness Energy cards from your hand to it.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez lui attacher 2 cartes Énergie Darkness de votre main.",
				es: "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes unirle 2 cartas de Energía Darkness de tu mano.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi assegnargli due carte Energia Darkness dalla tua mano.",
				pt: "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode ligar 2 cartas de Energia Darkness da sua mão a ele.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 2 Darkness-Energiekarten aus deiner Hand an es anlegen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Abyssal Sleep",
				fr: "Sommeil Abyssal",
				es: "Sueño Abismal",
				it: "Sonnoabissale",
				pt: "Sono Abissal",
				de: "Tiefschlaf"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep. Your opponent flips 2 coins instead of 1 between turns. If either of them is tails, that Pokémon is still Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Votre adversaire lance 2 pièces au lieu d’une entre chaque tour. S’il obtient au moins un côté pile, le Pokémon reste Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido. Tu rival lanza 2 monedas en vez de 1 entre turnos. Si sale cruz en alguna de ellas, ese Pokémon está todavía Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato. Tra un turno e l’altro, il tuo avversario lancia due volte una moneta invece di una. Se esce almeno una volta croce, quel Pokémon resta addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido. Seu oponente joga 2 moedas ao invés de 1 entre as vezes de jogar. Se qualquer uma delas sair coroa, aquele Pokémon permanecerá Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt. Dein Gegner wirft zwischen den Zügen 2 Münzen anstelle von 1 Münze. Wenn eine oder beide Münzen Zahl zeigen, schläft jenes Pokémon weiter."
			},
			damage: 120,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				fr: "Sommeil Abyssal",
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Votre adversaire lance 2 pièces au lieu d’une entre chaque tour. S’il obtient au moins un côté pile, le Pokémon reste Endormi.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
