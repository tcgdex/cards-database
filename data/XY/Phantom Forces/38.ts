import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Swalot",
		fr: "Avaltout",
		es: "Swalot",
		it: "Swalot",
		pt: "Swalot",
		de: "Schlukwech"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		317,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gulpin",
		fr: "Gloupti",
		es: "Gulpin",
		it: "Gulpin",
		pt: "Gulpin",
		de: "Schluppuck"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poison Gas",
				fr: "Gaz Toxik",
				es: "Gas Venenoso",
				it: "Velenogas",
				pt: "Gás Venenoso",
				de: "Giftwolke"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swallow Up",
				fr: "Engloutissement",
				es: "Engullir",
				it: "Inghiottire",
				pt: "Engolir por Inteiro",
				de: "Runterschlucken"
			},
			effect: {
				en: "If, before doing damage, your opponent's Active Pokémon has fewer remaining HP than this Pokémon, this attack does 50 more damage.",
				fr: "Si, avant d'infliger des dégâts, il reste moins de PV au Pokémon Actif de votre adversaire qu'à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si, antes de infligir daño, al Pokémon Activo de tu rival le quedan menos PS que a este Pokémon, este ataque hace 50 puntos de daño más.",
				it: "Se, prima di infliggere il danno, il Pokémon attivo del tuo avversario ha meno PS rimanenti di questo Pokémon, questo attacco infligge 50 danni in più.",
				pt: "Se, antes de causar danos, o Pokémon Ativo do seu oponente tiver menos PS restante que este Pokémon, esse ataque causará 50 de danos adicionais.",
				de: "Wenn, bevor du Schaden zufügst, das Aktive Pokémon deines Gegners weniger verbliebene KP hat als dieses Pokémon, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281844
	}
}

export default card
