import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Mienshao",
		fr: "Shaofouine",
		es: "Mienshao",
		it: "Mienshao",
		pt: "Mienshao",
		de: "Wie-Shu"
	},

	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Mienfoo",
		fr: "Kungfouine"
	},

	attacks: [{
		name: {
			en: "Pound",
			fr: "Écras’Face",
			es: "Destructor",
			it: "Botta",
			pt: "Pancada",
			de: "Klaps"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Spinning Whip",
			fr: "Fouet Tournant",
			es: "Látigo Giratorio",
			it: "Frustata Rotante",
			pt: "Chicote Giratório",
			de: "Wirbelpeitsche"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Confused. Shuffle this Pokémon and all attached cards into your deck.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Mélangez dans votre deck ce Pokémon et toutes les cartes attachées.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido. Pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			it: "Il Pokémon attivo del tuo avversario viene confuso. Rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso. Embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Mische dieses Pokémon und alle angelegten Karten in dein Deck."
		},

		damage: 90,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card