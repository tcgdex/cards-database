import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [144],
	set: Set,

	name: {
		'en-us': "Galarian Articuno V",
		'fr-fr': "Artikodin de Galar V",
		'es-es': "Articuno de Galar V",
		'it-it': "Articuno di Galar V",
		'pt-br': "Articuno de Galar V",
		'de-de': "Galar-Arktos V"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Reconstitute",
			'fr-fr': "Reconstitution",
			'es-es': "Reconstitución",
			'it-it': "Ricostituzione",
			'pt-br': "Reconstituição",
			'de-de': "Rekonfigurieren"
		},

		effect: {
			'en-us': "You must discard 2 cards from your hand in order to use this Ability. Once during your turn, you may draw a card.",
			'fr-fr': "Vous devez défausser 2 cartes de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher une carte.",
			'es-es': "Debes descartar 2 cartas de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 1 carta.",
			'it-it': "Devi scartare due carte che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare una carta.",
			'pt-br': "Você deve descartar 2 cartas da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 1 carta.",
			'de-de': "Du musst 2 Karten aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 1 Karte ziehen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Psyray",
			'fr-fr': "Rayon Psy",
			'es-es': "Rayo Psíquico",
			'it-it': "Psicobagliore",
			'pt-br': "Psicorraio",
			'de-de': "Psyschein"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 608727,
				tcgplayer: 263901
			}
		},
	],
}

export default card
