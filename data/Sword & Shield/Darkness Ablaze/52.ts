import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Toxapex",
		fr: "Prédastérie",
		es: "Toxapex",
		it: "Toxapex",
		pt: "Toxapex",
		de: "Aggrostella"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Mareanie",
		fr: "Vorastérie",
		es: "Mareanie",
		it: "Mareanie",
		pt: "Mareanie",
		de: "Garstella"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Recover",
				fr: "Soin",
				es: "Recuperación",
				it: "Ripresa",
				pt: "Recuperação",
				de: "Genesung"
			},
			effect: {
				en: "Discard an Energy from this Pokémon and heal all damage from it.",
				fr: "Défaussez une Énergie de ce Pokémon, puis soignez tous les dégâts de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon y cura todos sus puntos de daño.",
				it: "Scarta un'Energia da questo Pokémon e curalo da tutti i danni.",
				pt: "Descarte 1 Energia deste Pokémon e cure todo o dano dele.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel und heile bei ihm allen Schaden."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poisonous Whip",
				fr: "Fouet Empoisonné",
				es: "Látigo Venenoso",
				it: "Frustata Velenosa",
				pt: "Chicote Venenoso",
				de: "Giftpeitsche"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "To survive in the cold waters of Galar, this Pokémon forms a dome with its legs, enclosing its body so it can capture its own body heat."
	}
}

export default card
