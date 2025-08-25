import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [700],
	set: Set,

	name: {
		en: "Dark Sylveon V",
		fr: "Nymphali obscur V",
		de: "Dunkles Feelinara V",
		es: "Sylveon Oscuro V",
		pt: "Sylveon Sombrio V",
		it: "Dark Sylveon V"
	},

	illustrator: "Ryuta Fuse",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Disarming Voice",
			fr: "Voix Enjôleuse",
			de: "Säuselstimme",
			es: "Voz Cautivadora",
			pt: "Voz Desarmante",
			it: "Incantavoce"
		},

		damage: 30,

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			it: "Il Pokémon attivo del tuo avversario viene confuso."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Tricky Ribbon",
			fr: "Ruban Rusé",
			de: "Listiges Band",
			es: "Cinta Engañosa",
			pt: "Laço de Travessura",
			it: "Fiocco Ingannevole"
		},

		damage: 100,

		effect: {
			en: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
			fr: "Choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la mélange avec son deck.",
			de: "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck.",
			es: "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
			pt: "Escolha 1 carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no próprio baralho.",
			it: "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo."
		}
	}],

	regulationMark: "E",
	suffix: "V",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	hp: 180,
	types: ["Psychic"],
	retreat: 1,

	thirdParty: {
		cardmarket: 576733
	}
}

export default card
