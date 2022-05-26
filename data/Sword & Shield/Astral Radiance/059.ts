import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Mismagius",
		fr: "Magirêve",
		es: "Mismagius",
		it: "Mismagius",
		pt: "Mismagius",
		de: "Traunmagil"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Misdreavus",
		fr: "Feuforêve",
		es: "Misdreavus",
		it: "Misdreavus",
		pt: "Misdreavus",
		de: "Traunfugil"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Ominous Prose",
			fr: "Prose Inquiétante",
			es: "Prosa Siniestra",
			it: "Prosa Funesta",
			pt: "Prosa Tenebrosa",
			de: "Ominöse Worte"
		},

		effect: {
			en: "Your opponent reveals their hand. If they have 4 or more cards in their hand, choose all but 3, and your opponent shuffles the chosen cards into their deck.",
			fr: "Votre adversaire montre sa main. S'il a 4 cartes ou plus dans sa main, choisissez-les toutes sauf 3. Votre adversaire mélange ensuite les cartes choisies avec son deck.",
			es: "Tu rival enseña las cartas de su mano. Si tiene 4 cartas o más en su mano, tú eliges todas excepto 3, y tu rival pone las cartas elegidas en su baraja y las baraja todas.",
			it: "Il tuo avversario mostra le carte che ha in mano. Se ha quattro o più carte in mano, sceglile tutte tranne tre, e il tuo avversario rimischia le carte scelte nel suo mazzo.",
			pt: "Seu oponente revela a própria mão. Se ele(a) tiver 4 ou mais cartas na própria mão, escolha todas menos 3 cartas e o seu oponente embaralhará as cartas escolhidas no próprio baralho.",
			de: "Dein Gegner zeigt dir seine Handkarten. Wenn er 4 oder mehr Karten auf seiner Hand hat, wähle alle bis auf 3, und dein Gegner mischt die gewählten Karten in sein Deck."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Psybeam",
			fr: "Rafale Psy",
			es: "Psicorrayo",
			it: "Psicoraggio",
			pt: "Feixe Psíquico",
			de: "Psystrahl"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card