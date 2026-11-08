import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cinderace",
		'fr-fr': "Pyrobut",
		'de-de': "Liberlo",
		'it-it': "Cinderace",
		'es-es': "Cinderace",
		'pt-br': "Cinderace",
		'es-mx': "Cinderace"
	},

	illustrator: "REND",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Raboot",
		'fr-fr': "Lapyro",
		'de-de': "Kickerlo",
		'it-it': "Raboot",
		'es-es': "Raboot",
		'pt-br': "Raboot",
		'es-mx': "Raboot"
	},
	stage: "Stage2",
	dexId: [815],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Explosiveness",
			'fr-fr': "Explosivité",
			'de-de': "Explosivität",
			'it-it': "Carattere Esplosivo",
			'es-es': "Explosividad",
			'pt-br': "Tendência Explosiva",
			'es-mx': "Explosividad"
		},

		effect: {
			'en-us': "If this Pokémon is in your hand when you are setting up to play, you may put it face down in the Active Spot.",
			'fr-fr': "Si ce Pokémon est dans votre main lorsque vous préparez la partie, vous pouvez le placer face cachée sur le Poste Actif.",
			'de-de': "Wenn dieses Pokémon bei deiner Spielvorbereitung auf deiner Hand ist, kannst du es verdeckt in die Aktive Position legen.",
			'it-it': "Se hai questo Pokémon in mano durante l'allestimento del gioco, puoi metterlo a faccia in giù in posizione attiva.",
			'es-es': "Si este Pokémon está en tu mano cuando te estás preparando para jugar, puedes ponerlo boca abajo en el Puesto Activo.",
			'pt-br': "Se este Pokémon estiver na sua mão enquanto você estiver preparando o seu jogo, você poderá colocá-lo virado para baixo no Campo Ativo.",
			'es-mx': "Si este Pokémon está en tu mano cuando te estás preparando para jugar, puedes ponerlo boca abajo en el Puesto Activo."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Turbo Flare",
			'fr-fr': "Flamboiement Turbo",
			'de-de': "Turbofeuer",
			'it-it': "Turbofiammata",
			'es-es': "Turbollamarada",
			'pt-br': "Labareda Turbo",
			'es-mx': "Turboflama"
		},

		effect: {
			'en-us': "Search your deck for up to 3 Basic Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 cartes Énergie de base, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a tre carte Energia base e assegnale ai Pokémon nella tua panchina nel modo che preferisci. Poi rimischia il tuo mazzo.",
			'es-es': "Busca en tu baraja hasta 3 cartas de Energía Básica y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 3 cartas de Energia Básica no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 3 cartas de Energía Básica y únelas a tus Pokémon en Banca de la manera que quieras. Después, baraja tu mazo."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851099,
				tcgplayer: 654367
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851099,
				tcgplayer: 654367
			}
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			foil: "cosmos"
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"],
		}
	],	
}

export default card
