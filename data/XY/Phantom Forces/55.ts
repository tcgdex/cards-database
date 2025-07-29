import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
		es: "Spiritomb",
		it: "Spiritomb",
		pt: "Spiritomb",
		de: "Kryppuk"
	},

	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		442,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "B Cancel",
				fr: "Interruption B",
				es: "B Cancelar",
				it: "(B) Annulla",
				pt: "Cancelamento B",
				de: "B"
			},
			effect: {
				en: "Your opponent can't play any Pokémon from his or her hand to evolve the Defending Pokémon during his or her next turn.",
				fr: "Votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer le Pokémon Défenseur pendant son prochain tour.",
				es: "Tu rival no puede jugar ningún Pokémon de su mano para hacer evolucionar al Pokémon Defensor durante su próximo turno.",
				it: "Il tuo avversario non può giocare Pokémon dalla sua mano per far evolvere il Pokémon difensore durante il suo prossimo turno.",
				pt: "Seu oponente não poderá jogar nenhum Pokémon da própria mão para evoluir o Pokémon Defensor durante a próxima vez de jogar desse oponente.",
				de: "Dein Gegner kann während seines nächsten Zuges keine Pokémon von seiner Hand spielen, um das Verteidigende Pokémon zu entwickeln."
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde Folie",
				es: "Rayo Confuso",
				it: "Stordiraggio",
				pt: "Raio da Confusão",
				de: "Konfustrahl"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Confuso.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt verwirrt."
			},
			damage: 30,

		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281861
	}
}

export default card
