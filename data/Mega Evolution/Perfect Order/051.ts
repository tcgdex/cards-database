import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Skorupi",
		fr: "Rapion",
		es: "Skorupi",
		de: "Pionskora",
		it: "Skorupi",
		pt: "Skorupi"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		451
	],
	hp: 80,
	types: [
		"Darkness"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness"
			],
			name: {
				en: "Poison Jab",
				fr: "Direct Toxik",
				es: "Puya Nociva",
				de: "Gifthieb",
				it: "Velenpuntura",
				pt: "Golpe Envenenado"
			},
			damage: "20",
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado."
			}
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "Aya Kusube",
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684432,
		cardmarket: 877467
	}
}

export default card
