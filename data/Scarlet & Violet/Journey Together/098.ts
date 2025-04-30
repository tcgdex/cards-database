import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "N's Zoroark ex",
		fr: "Zoroark-ex de N",
		es: "Zoroark ex de N",
		de: "Ns Zoroark-ex",
		it: "Zoroark-ex di N",
		pt: "Zoroark ex do N",
		'es-mx': "Zoroark ex de N"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Trade",
			fr: "Troc",
			es: "Intercambiar",
			de: "Ersetzen",
			it: "Contraccambio",
			pt: "Troca",
			'es-mx': "Transacción"
		},

		effect: {
			en: "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards.",
			fr: "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes.",
			es: "Debes descartar 1 carta de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 2 cartas.",
			de: "Du musst 1 Karte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 2 Karten ziehen.",
			it: "Devi scartare una carta che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare due carte.",
			pt: "Você deve descartar uma carta da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 2 cartas.",
			'es-mx': "Debes descartar 1 carta de tu mano para poder usar esta Habilidad. Una vez durante tu turno, puedes robar 2 cartas."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Night Joker",
			fr: "Joker Nocturne",
			es: "Bromista Nocturno",
			de: "Nachtjoker",
			it: "Burlone Notturno",
			pt: "Curinga Noturno",
			'es-mx': "Comodín Nocturno"
		},

		effect: {
			en: "Choose 1 of your Benched N's Pokémon's attacks and use it as this attack.",
			fr: "Choisissez l'une des attaques de vos Pokémon de N de Banc et utilisez-la en tant que cette attaque.",
			es: "Elige uno de los ataques de tus Pokémon de N en Banca y úsalo para este ataque.",
			de: "Wähle 1 Attacke der Ns Pokémon auf deiner Bank und setze sie als diese Attacke ein.",
			it: "Scegli un attacco di un Pokémon di N nella tua panchina e usalo al posto di questo attacco.",
			pt: "Escolha 1 dos ataques dos seus Pokémon do N no Banco e use-o como este ataque.",
			'es-mx': "Elige 1 de los ataques de tus Pokémon de N en Banca y úsalo como este ataque."
		}
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
