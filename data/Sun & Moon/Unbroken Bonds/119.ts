import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Malamar",
		fr: "Sepiatroce",
		es: "Malamar",
		it: "Malamar",
		pt: "Malamar",
		de: "Calamanero"
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
		en: "Inkay",
		fr: "Sepiatop",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Hypnotic Reign",
				fr: "Règne Hypnotique",
				es: "Reino Hipnótico",
				it: "Regno Ipnotico",
				pt: "Reino Hipnótico",
				de: "Hypnotische Herrschaft"
			},
			effect: {
				en: "Your opponent reveals their hand. You may discard a Pokémon you find there and use one of that Pokémon’s non-GX attacks as this attack.",
				fr: "Votre adversaire dévoile sa main. Vous pouvez défausser un Pokémon que vous y trouvez et utiliser l’une des attaques non GX de ce Pokémon en tant que cette attaque.",
				es: "Tu rival enseña las cartas de su mano. Puedes descartar 1 Pokémon que encuentres entre ellas y usar uno de los ataques no GX de ese Pokémon para este ataque.",
				it: "Il tuo avversario mostra le carte che ha in mano. Puoi scartare un Pokémon presente tra esse e usare uno degli attacchi non GX di quel Pokémon al posto di questo attacco.",
				pt: "Seu oponente revela a própria mão. Você pode descartar 1 Pokémon que encontrar lá e usar um dos ataques daquele Pokémon que não é um ataque GX como este ataque.",
				de: "Dein Gegner zeigt dir seine Handkarten. Du kannst 1 Pokémon, das du dort findest, auf seinen Ablagestapel legen und 1 Attacke jenes Pokémon, die keine GX-Attacke ist, als diese Attacke einsetzen."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Pressure",
				fr: "Pression Ténébreuse",
				es: "Presión Oscura",
				it: "Pressione Oscura",
				pt: "Pressão Obscura",
				de: "Finsterer Druck"
			},
			effect: {
				en: "Discard the top card of your opponent’s deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
				es: "Descarta la primera carta de la baraja de tu rival.",
				it: "Scarta la prima carta del mazzo del tuo avversario.",
				pt: "Descarte a primeira carta do baralho do seu oponente.",
				de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
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

	thirdParty: {
		cardmarket: 372409,
		tcgplayer: 189219
	}
}

export default card
