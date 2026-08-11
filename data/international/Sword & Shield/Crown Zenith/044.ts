import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [405],
	set: Set,

	name: {
		'en-us': "Luxray",
		'fr-fr': "Luxray",
		'es-es': "Luxray",
		'it-it': "Luxray",
		'pt-br': "Luxray",
		'de-de': "Luxtra"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio",
		'de-de': "Luxio"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Explosiveness",
			'fr-fr': "Explosivité",
			'es-es': "Explosividad",
			'it-it': "Carattere Esplosivo",
			'pt-br': "Tendência Explosiva",
			'de-de': "Explosivität"
		},

		effect: {
			'en-us': "If this Pokémon is in your hand when you are setting up to play, you may put it face down as your Active Pokémon.",
			'fr-fr': "Si ce Pokémon est dans votre main lorsque vous préparez la partie, vous pouvez le placer face cachée en tant que Pokémon Actif.",
			'es-es': "Si este Pokémon está en tu mano cuando te estás preparando para jugar, puedes ponerlo boca abajo como tu Pokémon Activo.",
			'it-it': "Se hai questo Pokémon in mano durante l'allestimento del gioco, puoi metterlo a faccia in giù come tuo Pokémon attivo.",
			'pt-br': "Se este Pokémon estiver na sua mão enquanto estiver preparando seu jogo, você poderá colocá-lo virado para baixo como seu Pokémon Ativo.",
			'de-de': "Wenn dieses Pokémon bei der Spielvorbereitung auf deiner Hand ist, kannst du es verdeckt als dein Aktives Pokémon hinlegen."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Seeking Fang",
			'fr-fr': "Croc Chercheur",
			'es-es': "Colmillo Rastreador",
			'it-it': "Zanna Esploratrice",
			'pt-br': "Presa de Caça",
			'de-de': "Suchender Reißzahn"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Trainer cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Dresseur, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Entrenador, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Allenatore, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Treinador no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Trainerkarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "F",


	description: {
		'en-us': "Luxray can see through solid objects. It will instantly spot prey trying to hide behind walls, even if the walls are thick.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691761,
				tcgplayer: 478148
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691761,
				tcgplayer: 478148
			}
		},
	],
}

export default card
