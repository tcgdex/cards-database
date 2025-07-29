import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Shiftry",
		fr: "Tengalice",
		es: "Shiftry",
		it: "Shiftry",
		pt: "Shiftry",
		de: "Tengulist"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		275,
	],

	hp: 130,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Giant Fan",
				fr: "Éventail Géant",
				es: "Abanico Gigante",
				it: "Gigaventaglio",
				pt: "Ventilador Gigante",
				de: "Riesiger Fächer"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may flip a coin. If heads, choose 1 of your opponent’s Pokémon. Your opponent shuffles that Pokémon and all cards attached to it into his or her deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez lancer une pièce. Si c'est face, choisissez 1 des Pokémon de votre adversaire. Votre adversaire mélange le Pokémon choisi et toutes les cartes qui lui sont attachées avec son deck.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes lanzar una moneda. Si sale cara, elige a 1 de los Pokémon de tu rival. Tu rival pone ese Pokémon y todas las cartas unidas a él en su baraja y las baraja todas.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi lanciare una moneta. Se esce testa, scegli uno dei Pokémon del tuo avversario. Il tuo avversario rimischia nel suo mazzo quel Pokémon e tutte le carte a lui assegnate.",
				pt: "Ao jogar este Pokémon da sua mão para evoluir 1 de seus Pokémon, você poderá jogar uma moeda. Se sair cara, escolha 1 Pokémon de seu oponente. Seu oponente embaralha este Pokémon e todos os cards ligados a ele no baralho dele ou dela.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 1 Münze werfen. Wähle bei „Kopf“ 1 Pokémon deines Gegners aus. Dein Gegner mischt dieses Pokémon und alle daran angelegten Karten zurück in sein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Whirlwind",
				fr: "Cyclone",
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
			},
			damage: 60,

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
		cardmarket: 280297
	}
}

export default card
