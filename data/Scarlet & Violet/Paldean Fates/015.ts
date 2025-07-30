import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Armarouge",
		fr: "Carmadura",
		es: "Armarouge",
		it: "Armarouge",
		pt: "Armarouge",
		de: "Crimanzo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fire Off",
			fr: "Feu Projeté",
			es: "Pirodisparo",
			it: "Raffica Ignea",
			pt: "Disparada de Fogo",
			de: "Abfeuern"
		},

		effect: {
			en: "As often as you like during your turn, you may move a {R} Energy from 1 of your Benched Pokémon to your Active Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer une Énergie {R} de l'un de vos Pokémon de Banc vers votre Pokémon Actif.",
			es: "Todas las veces que quieras durante tu turno, puedes mover 1 Energía {R} de uno de tus Pokémon en Banca a tu Pokémon Activo.",
			it: "Durante il tuo turno, puoi spostare un'Energia {R} da uno dei tuoi Pokémon in panchina al tuo Pokémon attivo tutte le volte che vuoi.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá mover uma Energia {R} de 1 dos seus Pokémon no Banco para o seu Pokémon Ativo.",
			de: "Beliebig oft während deines Zuges kannst du 1 {R}-Energie von 1 Pokémon auf deiner Bank auf dein Aktives Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Flame Cannon",
			fr: "Canon Flamme",
			es: "Cañón Llama",
			it: "Fiammacannone",
			pt: "Canhão de Chamas",
			de: "Flammenkanone"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false
	},

	illustrator: "AKIRA EGAWA",

	thirdParty: {
		cardmarket: 751541
	}
}

export default card
