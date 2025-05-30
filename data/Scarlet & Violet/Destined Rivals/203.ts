import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Armarouge",
		fr: "Carmadura",
		de: "Crimanzo",
		it: "Armarouge",
		es: "Armarouge",
		pt: "Armarouge"
	},

	illustrator: "nagimiso",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fire Off",
			fr: "Feu Projeté",
			de: "Abfeuern",
			it: "Raffica Ignea",
			es: "Pirodisparo",
			pt: "Disparada de Fogo"
		},

		effect: {
			en: "As often as you like during your turn, you may move a {R} Energy from 1 of your Benched Pokémon to your Active Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer une Énergie {R} de l'un de vos Pokémon de Banc vers votre Pokémon Actif.",
			de: "Beliebig oft während deines Zuges kannst du 1 {R}-Energie von 1 Pokémon auf deiner Bank auf dein Aktives Pokémon verschieben.",
			it: "Durante il tuo turno, puoi spostare un'Energia {R} da uno dei tuoi Pokémon in panchina al tuo Pokémon attivo tutte le volte che vuoi.",
			es: "Todas las veces que quieras durante tu turno, puedes mover 1 Energía {R} de uno de tus Pokémon en Banca a tu Pokémon Activo.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá mover uma Energia {R} de 1 dos seus Pokémon no Banco para o seu Pokémon Ativo."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Flame Cannon",
			fr: "Canon Flamme",
			de: "Flammenkanone",
			it: "Fiammacannone",
			es: "Cañón Llama",
			pt: "Canhão de Chamas"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card