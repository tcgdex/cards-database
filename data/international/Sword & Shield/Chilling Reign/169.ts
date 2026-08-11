import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [144],
	set: Set,

	name: {
		'fr-fr': "Artikodin de Galar V",
		'en-us': "Galarian Articuno V",
		'es-es': "Articuno de Galar V",
		'it-it': "Articuno di Galar V",
		'pt-br': "Articuno de Galar V",
		'de-de': "Galar-Arktos V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Reconstitution",
			'en-us': "Reconstitute",
			'es-es': "Reconstitución",
			'it-it': "Ricostituzione",
			'pt-br': "Reconstituição",
			'de-de': "Rekonfigurieren"
		},

		effect: {
			'fr-fr': "Vous devez défausser 2 cartes de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher une carte.",
			'en-us': "You must discard 2 cards from your hand in order to use this Ability. Once during your turn, you may draw a card.",
			'es-es': "Debes descartar 2 cartas de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 1 carta.",
			'it-it': "Devi scartare due carte che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare una carta.",
			'pt-br': "Você deve descartar 2 cartas da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 1 carta.",
			'de-de': "Du musst 2 Karten aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 1 Karte ziehen."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Rayon Psy",
			'en-us': "Psyray",
			'es-es': "Rayo Psíquico",
			'it-it': "Psicobagliore",
			'pt-br': "Psicorraio",
			'de-de': "Psyschein"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 110,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567277,
				tcgplayer: 241718
			}
		},
	],
}

export default card
