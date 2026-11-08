import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [510],
	set: Set,

	name: {
		'fr-fr': "Léopardus V",
		'en-us': "Liepard V",
		'es-es': "Liepard V",
		'it-it': "Liepard V",
		'pt-br': "Liepard V",
		'de-de': "Kleoparda V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Griffes Cachées",
			'en-us': "Hidden Claw",
			'es-es': "Garra Escondida",
			'it-it': "Artigliocculto",
			'pt-br': "Garra Secreta",
			'de-de': "Versteckte Klaue"
		},

		effect: {
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser un Outil Pokémon d'un Pokémon (le vôtre ou celui de votre adversaire).",
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Pokémon Tool from a Pokémon (yours or your opponent's).",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes descartar 1 Herramienta Pokémon de 1 Pokémon (tuyo o de tu rival).",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scartare una carta Oggetto Pokémon da un Pokémon, tuo o del tuo avversario.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá descartar 1 Ferramenta Pokémon de 1 Pokémon (seu ou do seu oponente).",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Pokémon-Ausrüstung von 1 Pokémon (deinem oder dem deines Gegners) auf den Ablagestapel legen."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Écorchure Obscure",
			'en-us': "Shadow Ripper",
			'es-es': "Guadaña Sombría",
			'it-it': "Falciombra",
			'pt-br': "Rasgo Sombrio",
			'de-de': "Schattenreißer"
		},

		effect: {
			'fr-fr': "Vous pouvez ajouter à votre main ce Pokémon et toutes les cartes attachées.",
			'en-us': "You may put this Pokémon and all attached cards into your hand.",
			'es-es': "Puedes poner este Pokémon y todas las cartas unidas a él en tu mano.",
			'it-it': "Puoi riprendere in mano questo Pokémon e tutte le carte a esso assegnate.",
			'pt-br': "Você pode colocar este Pokémon e todas as cartas ligadas a ele na sua mão.",
			'de-de': "Du kannst dieses Pokémon und alle angelegten Karten auf deine Hand nehmen."
		},

		damage: 110,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567288,
				tcgplayer: 241779
			}
		},
	],
}

export default card
