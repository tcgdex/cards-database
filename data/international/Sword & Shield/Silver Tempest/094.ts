import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [344],
	set: Set,

	name: {
		'en-us': "Claydol",
		'fr-fr': "Kaorine",
		'es-es': "Claydol",
		'it-it': "Claydol",
		'pt-br': "Claydol",
		'de-de': "Lepumentas"
	},

	illustrator: "Nisota Niso",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto",
		'es-es': "Baltoy",
		'it-it': "Baltoy",
		'pt-br': "Baltoy",
		'de-de': "Puppance"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Mystery Charge",
			'fr-fr': "Charge Mystère",
			'es-es': "Carga Misteriosa",
			'it-it': "Carica Mistero",
			'pt-br': "Carga Misteriosa",
			'de-de': "Geheimnisvolle Ladung"
		},

		effect: {
			'en-us': "You can use this Ability only if you have no Supporter cards in your discard pile. Once during your turn, you may attach a Fighting Energy card from your discard pile to 1 of your Pokémon.",
			'fr-fr': "Vous ne pouvez utiliser ce talent que si vous n'avez pas de carte Supporter dans votre pile de défausse. Une fois pendant votre tour, vous pouvez attacher une carte Énergie Fighting de votre pile de défausse à l'un de vos Pokémon.",
			'es-es': "Puedes usar esta habilidad solo si no tienes ninguna carta de Partidario en tu pila de descartes. Una vez durante tu turno, puedes unir 1 carta de Energía Fighting de tu pila de descartes a 1 de tus Pokémon.",
			'it-it': "Puoi usare questa abilità solo se non hai carte Aiuto nella tua pila degli scarti. Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia Fighting dalla tua pila degli scarti.",
			'pt-br': "Você só pode usar esta Habilidade se não tiver cartas de Apoiador na sua pilha de descarte. Uma vez durante o seu turno, você poderá ligar 1 carta de Energia Fighting da sua pilha de descarte a 1 dos seus Pokémon.",
			'de-de': "Du kannst diese Fähigkeit nur einsetzen, wenn du keine Unterstützerkarten in deinem Ablagestapel hast. Einmal während deines Zuges kannst du 1 Fighting-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon anlegen."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'it-it': "Attacco Rotante",
			'pt-br': "Ataque Giratório",
			'de-de': "Rundumangriff"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "This mysterious Pokémon started life as an ancient clay figurine made over 20,000 years ago.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682141,
				tcgplayer: 451748
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682141,
				tcgplayer: 451748
			}
		},
	],
}

export default card
