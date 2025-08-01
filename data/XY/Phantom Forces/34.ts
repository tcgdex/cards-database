import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Gengar EX",
		fr: "Ectoplasma EX",
		es: "Gengar EX",
		it: "Gengar EX",
		pt: "Gengar EX",
		de: "Gengar EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 170,

	types: [
		"Psychic",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Night Attack",
				fr: "Attaque Nocturne",
				es: "Asalto Nocturno",
				it: "Attacco Notturno",
				pt: "Ataque Noturno",
				de: "Nachtangriff"
			},
			effect: {
				en: "Put 3 damage counters on 1 of your opponent's Pokémon.",
				fr: "Placez 3 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
				es: "Pon 3 contadores de daño en 1 de los Pokémon de tu rival.",
				it: "Metti tre segnalini danno su uno dei Pokémon del tuo avversario.",
				pt: "Coloque 3 contadores de danos em 1 dos Pokémon do seu oponente.",
				de: "Lege 3 Schadensmarken auf 1 Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Corridor",
				fr: "Couloir Ténébreux",
				es: "Corredor Oscuro",
				it: "Corridoio Oscuro",
				pt: "Corredor Escuro",
				de: "Dunkler Gang"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato. Scambia questo Pokémon con uno della tua panchina.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 281840
	}
}

export default card
