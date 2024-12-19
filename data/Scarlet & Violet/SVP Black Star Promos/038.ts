import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Togekiss",
		fr: "Togekiss",
		es: "Togekiss",
		it: "Togekiss",
		pt: "Togekiss",
		de: "Togekiss"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Precious Gift",
			fr: "Don Précieux",
			es: "Regalo Valioso",
			it: "Dono Prezioso",
			pt: "Presente Precioso",
			de: "Kostbares Geschenk"
		},

		effect: {
			en: "Once at the end of your turn (after your attack), you may use this Ability. Draw cards until you have 8 cards in your hand.",
			fr: "Une fois à la fin de votre tour (après votre attaque), vous pouvez utiliser ce talent. Piochez des cartes jusqu'à en avoir 8 en main.",
			es: "Una vez al final de tu turno (después de tu ataque), puedes usar esta habilidad. Roba cartas hasta que tengas 8 cartas en tu mano.",
			it: "Una sola volta alla fine del tuo turno, dopo il tuo attacco, puoi usare questa abilità. Pesca fino ad avere otto carte in mano.",
			pt: "Uma vez no final do seu turno (depois do seu ataque), você poderá usar esta Habilidade. Compre cartas até ter 8 cartas na sua mão.",
			de: "Einmal am Ende deines Zuges (nachdem du angegriffen hast) kannst du diese Fähigkeit einsetzen. Ziehe so lange Karten, bis du 8 Karten auf deiner Hand hast."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Power Cyclone",
			fr: "Cyclone d'Énergie",
			es: "Ciclón Poderoso",
			it: "Ciclone Potente",
			pt: "Ciclone Poderoso",
			de: "Kraftwirbel"
		},

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			es: "Mueve 1 Energía de este Pokémon a uno de tus Pokémon en Banca.",
			it: "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			pt: "Mova uma Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			de: "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 110
	}],

	retreat: 0,
	regulationMark: "G",

	evolveFrom: {
		en: "Togetic",
		fr: "Togetic",
		es: "Togetic",
		it: "Togetic",
		pt: "Togetic",
		de: "Togetic"
	}
}

export default card