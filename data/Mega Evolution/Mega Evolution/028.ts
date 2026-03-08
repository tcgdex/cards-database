import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Cinderace",
		fr: "Pyrobut",
		de: "Liberlo",
		it: "Cinderace",
		es: "Cinderace",
		pt: "Cinderace",
		'es-mx': "Cinderace"
	},

	illustrator: "REND",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],
	evolveFrom: {
		en: "Raboot",
		fr: "Lapyro",
		de: "Kickerlo",
		it: "Raboot",
		es: "Raboot",
		pt: "Raboot",
		'es-mx': "Raboot"
	},
	stage: "Stage2",
	dexId: [815],

	abilities: [{
		type: "Ability",

		name: {
			en: "Explosiveness",
			fr: "Explosivité",
			de: "Explosivität",
			it: "Carattere Esplosivo",
			es: "Explosividad",
			pt: "Tendência Explosiva",
			'es-mx': "Explosividad"
		},

		effect: {
			en: "If this Pokémon is in your hand when you are setting up to play, you may put it face down in the Active Spot.",
			fr: "Si ce Pokémon est dans votre main lorsque vous préparez la partie, vous pouvez le placer face cachée sur le Poste Actif.",
			de: "Wenn dieses Pokémon bei deiner Spielvorbereitung auf deiner Hand ist, kannst du es verdeckt in die Aktive Position legen.",
			it: "Se hai questo Pokémon in mano durante l'allestimento del gioco, puoi metterlo a faccia in giù in posizione attiva.",
			es: "Si este Pokémon está en tu mano cuando te estás preparando para jugar, puedes ponerlo boca abajo en el Puesto Activo.",
			pt: "Se este Pokémon estiver na sua mão enquanto você estiver preparando o seu jogo, você poderá colocá-lo virado para baixo no Campo Ativo.",
			'es-mx': "Si este Pokémon está en tu mano cuando te estás preparando para jugar, puedes ponerlo boca abajo en el Puesto Activo."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Turbo Flare",
			fr: "Flamboiement Turbo",
			de: "Turbofeuer",
			it: "Turbofiammata",
			es: "Turbollamarada",
			pt: "Labareda Turbo",
			'es-mx': "Turboflama"
		},

		effect: {
			en: "Search your deck for up to 3 Basic Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 cartes Énergie de base, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a tre carte Energia base e assegnale ai Pokémon nella tua panchina nel modo che preferisci. Poi rimischia il tuo mazzo.",
			es: "Busca en tu baraja hasta 3 cartas de Energía Básica y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 3 cartas de Energia Básica no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 3 cartas de Energía Básica y únelas a tus Pokémon en Banca de la manera que quieras. Después, baraja tu mazo."
		},

		damage: 50
	}],

	retreat: 0,
	regulationMark: "I",

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
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

	thirdParty: {
		tcgplayer: 654367,
		cardmarket: 851099
	}
}

export default card