import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Tapu Koko",
		fr: "Tokorico",
		es: "Tapu Koko",
		it: "Tapu Koko",
		pt: "Tapu Koko",
		de: "Kapu-Riki"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		785,
	],
	hp: 120,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strafe",
				fr: "Bombarder",
				es: "Pasada de Ataque",
				it: "Mitragliare",
				pt: "Bombardear",
				de: "Beharken"
			},
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
				es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
				pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Flashing Bolt",
				fr: "Éclair Aveuglant",
				es: "Rayo Destellante",
				it: "Bolide Abbagliante",
				pt: "Raio Piscante",
				de: "Leuchtblitz"
			},
			effect: {
				en: "This Pokémon can’t use Flashing Bolt during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Éclair Aveuglant pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Rayo Destellante durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Bolide Abbagliante.",
				pt: "Este Pokémon não poderá usar Raio Piscante durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Leuchtblitz während deines nächsten Zuges nicht einsetzen."
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
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
