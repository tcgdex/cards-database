import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [700],
	set: Set,

	name: {
		'en-us': "Dark Sylveon V",
		'fr-fr': "Nymphali obscur V",
		'de-de': "Dunkles Feelinara V",
		'es-es': "Sylveon Oscuro V",
		'pt-br': "Sylveon Sombrio V",
		'it-it': "Dark Sylveon V"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Promo",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Disarming Voice",
			'fr-fr': "Voix Enjôleuse",
			'de-de': "Säuselstimme",
			'es-es': "Voz Cautivadora",
			'pt-br': "Voz Desarmante",
			'it-it': "Incantavoce"
		},

		damage: 30,

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Tricky Ribbon",
			'fr-fr': "Ruban Rusé",
			'de-de': "Listiges Band",
			'es-es': "Cinta Engañosa",
			'pt-br': "Laço de Travessura",
			'it-it': "Fiocco Ingannevole"
		},

		damage: 100,

		effect: {
			'en-us': "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
			'fr-fr': "Choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la mélange avec son deck.",
			'de-de': "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck.",
			'es-es': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
			'pt-br': "Escolha 1 carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no próprio baralho.",
			'it-it': "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo."
		}
	}],

	regulationMark: "E",
	suffix: "V",
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],

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
		cardmarket: 576733,
		tcgplayer: 251090
	}
}

export default card
