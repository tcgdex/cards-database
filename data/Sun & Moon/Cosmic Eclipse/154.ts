import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Slurpuff",
		fr: "Cupcanaille",
		es: "Slurpuff",
		it: "Slurpuff",
		pt: "Slurpuff",
		de: "Sabbaione"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		685,
	],
	hp: 110,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Swirlix",
		fr: "Sucroquin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Olfactory Enchantment",
				fr: "Enchantement Olfactif",
				es: "Hechizo Olfativo",
				it: "Incanto Olfattivo",
				pt: "Encantamento Olfativo",
				de: "Zauberduft"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Sweet Panic",
				fr: "Douce Panique",
				es: "Dulce Pánico",
				it: "Dolce Panico",
				pt: "Doce Desespero",
				de: "Süße Panik"
			},
			effect: {
				en: "If your opponent’s Active Pokémon isn’t Confused, this attack does nothing.",
				fr: "Si le Pokémon Actif de votre adversaire n’est pas Confus, cette attaque ne fait rien.",
				es: "Si el Pokémon Activo de tu rival no está Confundido, este ataque no hace nada.",
				it: "Se il Pokémon attivo del tuo avversario non è confuso, questo attacco non ha effetto.",
				pt: "Se o Pokémon Ativo do seu oponente não estiver Confuso, este ataque não fará nada.",
				de: "Wenn das Aktive Pokémon deines Gegners nicht verwirrt ist, hat diese Attacke keine Auswirkungen."
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
