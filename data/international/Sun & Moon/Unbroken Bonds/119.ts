import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Malamar",
		'fr-fr': "Sepiatroce",
		'es-es': "Malamar",
		'it-it': "Malamar",
		'pt-br': "Malamar",
		'de-de': "Calamanero"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		687,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Inkay",
		'fr-fr': "Sepiatop",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Hypnotic Reign",
				'fr-fr': "Règne Hypnotique",
				'es-es': "Reino Hipnótico",
				'it-it': "Regno Ipnotico",
				'pt-br': "Reino Hipnótico",
				'de-de': "Hypnotische Herrschaft"
			},
			effect: {
				'en-us': "Your opponent reveals their hand. You may discard a Pokémon you find there and use one of that Pokémon’s non-GX attacks as this attack.",
				'fr-fr': "Votre adversaire dévoile sa main. Vous pouvez défausser un Pokémon que vous y trouvez et utiliser l’une des attaques non GX de ce Pokémon en tant que cette attaque.",
				'es-es': "Tu rival enseña las cartas de su mano. Puedes descartar 1 Pokémon que encuentres entre ellas y usar uno de los ataques no GX de ese Pokémon para este ataque.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Puoi scartare un Pokémon presente tra esse e usare uno degli attacchi non GX di quel Pokémon al posto di questo attacco.",
				'pt-br': "Seu oponente revela a própria mão. Você pode descartar 1 Pokémon que encontrar lá e usar um dos ataques daquele Pokémon que não é um ataque GX como este ataque.",
				'de-de': "Dein Gegner zeigt dir seine Handkarten. Du kannst 1 Pokémon, das du dort findest, auf seinen Ablagestapel legen und 1 Attacke jenes Pokémon, die keine GX-Attacke ist, als diese Attacke einsetzen."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Pressure",
				'fr-fr': "Pression Ténébreuse",
				'es-es': "Presión Oscura",
				'it-it': "Pressione Oscura",
				'pt-br': "Pressão Obscura",
				'de-de': "Finsterer Druck"
			},
			effect: {
				'en-us': "Discard the top card of your opponent’s deck.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
				'es-es': "Descarta la primera carta de la baraja de tu rival.",
				'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
				'pt-br': "Descarte a primeira carta do baralho do seu oponente.",
				'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it comes to strong hypnosis, there's an endless number of people who utilize Malamar for their nefarious deeds.",
	},

	thirdParty: {
		cardmarket: 372409,
		tcgplayer: 189219
	}
}

export default card
