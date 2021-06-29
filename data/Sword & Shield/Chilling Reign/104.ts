import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Liepard V",
		fr: "Léopardus V",
		es: "Liepard V",
		it: "Liepard V",
		pt: "Liepard V",
		de: "Kleoparda V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Hidden Claw",
			fr: "Griffes Cachées",
			es: "Garra Escondida",
			it: "Artigliocculto",
			pt: "Garra Secreta",
			de: "Versteckte Klaue"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Pokémon Tool from a Pokémon (yours or your opponent’s).",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser un Outil Pokémon d’un Pokémon (le vôtre ou celui de votre adversaire).",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes descartar 1 Herramienta Pokémon de 1 Pokémon (tuyo o de tu rival).",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scartare una carta Oggetto Pokémon da un Pokémon, tuo o del tuo avversario.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá descartar 1 Ferramenta Pokémon de 1 Pokémon (seu ou do seu oponente).",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Pokémon-Ausrüstung von 1 Pokémon (deinem oder dem deines Gegners) auf den Ablagestapel legen."
		}
	}],

	attacks: [{
		name: {
			en: "Shadow Ripper",
			fr: "Écorchure Obscure",
			es: "Guadaña Sombría",
			it: "Falciombra",
			pt: "Rasgo Sombrio",
			de: "Schattenreißer"
		},

		effect: {
			en: "You may put this Pokémon and all attached cards into your hand.",
			fr: "Vous pouvez ajouter à votre main ce Pokémon et toutes les cartes attachées.",
			es: "Puedes poner este Pokémon y todas las cartas unidas a él en tu mano.",
			it: "Puoi riprendere in mano questo Pokémon e tutte le carte a esso assegnate.",
			pt: "Você pode colocar este Pokémon e todas as cartas ligadas a ele na sua mão.",
			de: "Du kannst dieses Pokémon und alle angelegten Karten auf deine Hand nehmen."
		},

		damage: 110,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card