import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Articuno V",
		fr: "Artikodin de Galar V",
		es: "Articuno de Galar V",
		it: "Articuno di Galar V",
		pt: "Articuno de Galar V",
		de: "Galar-Arktos V"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Reconstitute",
			fr: "Reconstitution",
			es: "Reconstitución",
			it: "Ricostituzione",
			pt: "Reconstituição",
			de: "Rekonfigurieren"
		},

		effect: {
			en: "You must discard 2 cards from your hand in order to use this Ability. Once during your turn, you may draw a card.",
			fr: "Vous devez défausser 2 cartes de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher une carte.",
			es: "Debes descartar 2 cartas de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 1 carta.",
			it: "Devi scartare due carte che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare una carta.",
			pt: "Você deve descartar 2 cartas da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 1 carta.",
			de: "Du musst 2 Karten aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 1 Karte ziehen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Psyray",
			fr: "Rayon Psy",
			es: "Rayo Psíquico",
			it: "Psicobagliore",
			pt: "Psicorraio",
			de: "Psyschein"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "E",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card