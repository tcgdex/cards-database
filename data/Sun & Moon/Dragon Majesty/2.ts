import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Charmeleon",
		fr: "Reptincel",
		es: "Charmeleon",
		it: "Charmeleon",
		pt: "Charmeleon",
		de: "Glutexo"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		5,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Burning Fighter",
				fr: "Combattant Brûlant",
				es: "Luchador Ardiente",
				it: "Lottatore Ardente",
				pt: "Lutador em Chamas",
				de: "Feuerkämpfer"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard the top 5 cards of your deck. If any of those cards are Fire Energy cards, attach them to this Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez défausser les 5 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie Fire, attachez-les à ce Pokémon.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes descartar las 5 primeras cartas de tu baraja. Si entre esas cartas hay cartas de Energía Fire, únelas a este Pokémon.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi scartare le prime cinque carte del tuo mazzo. Se fra queste ci sono delle carte Energia Fire, assegnale a questo Pokémon.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode descartar as 5 primeiras cartas do seu baralho. Se houver cartas de Energia Fire entre elas, ligue-as a este Pokémon.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du die obersten 5 Karten deines Decks auf deinen Ablagestapel legen. Wenn unter jenen Karten Fire-Energiekarten sind, lege sie an dieses Pokémon an."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
				es: "Lanzallamas",
				it: "Lanciafiamme",
				pt: "Lança-chamas",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon.",
				it: "Scarta un’Energia assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia deste Pokémon.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 363475,
		tcgplayer: 175269
	}
}

export default card
