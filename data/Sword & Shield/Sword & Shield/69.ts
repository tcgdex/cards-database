import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
		es: "Lanturn",
		it: "Lanturn",
		pt: "Lanturn",
		de: "Lanturn"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
		es: "Chinchou",
		it: "Chinchou",
		pt: "Chinchou",
		de: "Lampi"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strobe Shock",
				fr: "Strobochoc",
				es: "Sacudida Estroboscópica",
				it: "Stroboshock",
				pt: "Choque Estroboscópico",
				de: "Blitzschock"
			},
			effect: {
				en: "Your opponent reveals their hand. If you find any Energy cards there, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Votre adversaire dévoile sa main. Si vous y trouvez au moins une carte Énergie, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Tu rival enseña las cartas de su mano. Si encuentras alguna carta de Energía entre ellas, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Il tuo avversario mostra le carte che ha in mano. Se ci trovi delle carte Energia, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Seu oponente revela a própria mão. Se você encontrar alguma carta de Energia lá, o Pokémon Ativo do seu oponente ficará Paralisado.",
				de: "Dein Gegner zeigt dir seine Handkarten. Wenn du dort mindestens 1 Energiekarte findest, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "This Pokémon flashes a bright light that blinds its prey. This creates an opening for it to deliver an electrical attack."
	}
}

export default card
