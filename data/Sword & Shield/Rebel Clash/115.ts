import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Skuntank",
		fr: "Moufflair",
		es: "Skuntank",
		it: "Skuntank",
		pt: "Skuntank",
		de: "Skuntank"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Stunky",
		fr: "Moufouette"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
			},

			damage: 50,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Ring",
				fr: "Anneau de Poison",
				es: "Anillo Venenoso",
				it: "Velenanello",
				pt: "Anel de Veneno",
				de: "Giftring"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned. During your opponent’s next turn, the Defending Pokémon can’t retreat.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 120,
	types: ["Darkness"],
	regulationMark: "D"
}

export default card
