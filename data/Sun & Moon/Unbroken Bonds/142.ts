import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Aromatisse",
		fr: "Cocotine",
		es: "Aromatisse",
		it: "Aromatisse",
		pt: "Aromatisse",
		de: "Parfinesse"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		683,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Spritzee",
		fr: "Fluvetin",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Pungent Aroma",
				fr: "Arôme Âcre",
				es: "Aroma Acre",
				it: "Aroma Pungente",
				pt: "Aroma Pungente",
				de: "Stechender Geruch"
			},
			effect: {
				en: "Flip 2 coins. If either of them is heads, your opponent reveals their hand. For each heads, choose a card you find there. Your opponent shuffles those cards into their deck.",
				fr: "Lancez 2 pièces. Si vous obtenez au moins un côté face, votre adversaire dévoile sa main. Pour chaque côté face, choisissez une carte que vous y trouvez. Votre adversaire mélange ces cartes avec son deck.",
				es: "Lanza 2 monedas. Si sale cara en alguna de ellas, tu rival enseña las cartas de su mano. Por cada cara, elige 1 carta que encuentres entre ellas. Tu rival pone esas cartas en su baraja y las baraja todas.",
				it: "Lancia due volte una moneta. Se esce almeno una volta testa, il tuo avversario mostra le carte che ha in mano. Ogni volta che esce testa, scegline una. Il tuo avversario rimischia quelle carte nel suo mazzo.",
				pt: "Jogue 2 moedas. Se qualquer uma delas sair cara, seu oponente revelará a própria mão. Para cada cara, escolha 1 carta que encontrar lá. Seu oponente embaralha aquelas cartas no próprio baralho.",
				de: "Wirf 2 Münzen. Wenn eine oder beide Münzen Kopf zeigen, zeigt dein Gegner dir seine Handkarten. Wähle pro Kopf 1 Karte, die du dort findest. Dein Gegner mischt jene Karten in sein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Miraculous Cologne",
				fr: "Parfum Miraculeux",
				es: "Colonia Milagrosa",
				it: "Profumo Miracoloso",
				pt: "Colônia Milagrosa",
				de: "Wunderbares Duftwasser"
			},
			effect: {
				en: "Flip a coin. If heads, choose a Special Condition. Your opponent’s Active Pokémon is now affected by that Special Condition.",
				fr: "Lancez une pièce. Si c’est face, choisissez un État Spécial. Le Pokémon Actif de votre adversaire est maintenant affecté par cet État Spécial.",
				es: "Lanza 1 moneda. Si sale cara, elige 1 Condición Especial. El Pokémon Activo de tu rival pasa a estar afectado por esa Condición Especial.",
				it: "Lancia una moneta. Se esce testa, scegli una condizione speciale. Il Pokémon attivo del tuo avversario è influenzato da quella condizione speciale.",
				pt: "Jogue 1 moeda. Se sair cara, escolha uma Condição Especial. O Pokémon Ativo do seu oponente agora está afetado por aquela Condição Especial.",
				de: "Wirf 1 Münze. Wähle bei Kopf einen Speziellen Zustand. Das Aktive Pokémon deines Gegners ist jetzt von jenem Speziellen Zustand betroffen."
			},
			damage: 30,

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

	retreat: 1,

	thirdParty: {
		cardmarket: 372428
	}
}

export default card
