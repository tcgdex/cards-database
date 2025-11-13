import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [916],
	set: Set,

	name: {
		en: "Oinkologne",
		fr: "Fragroin",
		es: "Oinkologne",
		it: "Oinkologne",
		pt: "Oinkologne",
		de: "Fragrunz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	evolveFrom: {
		en: "Lechonk",
		fr: "Gourmelet",
		es: "Lechonk",
		it: "Lechonk",
		pt: "Lechonk",
		de: "Ferkuli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Finest Selection",
			fr: "Premier Choix",
			es: "Cuidada Selección",
			it: "Assortimento Sopraffino",
			pt: "Seleção Primorosa",
			de: "Feinste Auslese"
		},

		effect: {
			en: "Flip 3 coins. Put a number of cards up to the number of heads from your discard pile into your hand.",
			fr: "Lancez 3 pièces. De votre pile de défausse, ajoutez à votre main un nombre de cartes inférieur ou égal au nombre de côtés face obtenus.",
			es: "Lanza 3 monedas. Coge de tu pila de descartes una cantidad de cartas igual o inferior al número de caras que te hayan salido y ponlas en tu mano.",
			it: "Lancia tre volte una moneta. Prendi dalla tua pila degli scarti un numero di carte uguale o inferiore al numero di volte in cui è uscito testa e aggiungile a quelle che hai in mano.",
			pt: "Jogue 3 moedas. Coloque um número de cartas da sua pilha de descarte na sua mão até o número de caras.",
			de: "Wirf 3 Münzen. Nimm bis zu so viele Karten, wie du Kopf geworfen hast, aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Perfume Press",
			fr: "Pression Entêtante",
			es: "Presión Perfume",
			it: "Profumopressa",
			pt: "Apertão Perfumado",
			de: "Duftdruck"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Akira Komayama",

	thirdParty: {
		cardmarket: 751610
	}
}

export default card