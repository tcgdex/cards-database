import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Bombirdier ex",
		fr: "Lestombaile-ex",
		es: "Bombirdier ex",
		it: "Bombirdier-ex",
		pt: "Bombirdier ex",
		de: "Adebom-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Fast Carrier",
			fr: "Transporteur Rapide",
			es: "Transportista Veloz",
			it: "Corriere Celere",
			pt: "Entrega a Jato",
			de: "Schneller Lieferant"
		},

		effect: {
			en: "If you go first, you can use this attack during your first turn. Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque pendant votre premier tour. Cherchez dans votre deck jusqu'à 3 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			es: "Si sales en primer lugar, puedes usar este ataque durante tu primer turno. Busca en tu baraja hasta 3 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Cerca nel tuo mazzo fino a tre Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Se você for o primeiro a jogar, poderá usar este ataque durante o seu primeiro turno. Procure por até 3 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen. Durchsuche dein Deck nach bis zu 3 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Shadowy Wind",
			fr: "Vent Sombre",
			es: "Viento Sombrío",
			it: "Vento Ombroso",
			pt: "Vento Sombrio",
			de: "Schattenwind"
		},

		effect: {
			en: "You may put this Pokémon and all attached cards into your hand.",
			fr: "Vous pouvez ajouter à votre main ce Pokémon et toutes les cartes qui lui sont attachées.",
			es: "Puedes poner este Pokémon y todas las cartas unidas a él en tu mano.",
			it: "Puoi riprendere in mano questo Pokémon e tutte le carte a esso assegnate.",
			pt: "Você pode colocar este Pokémon e todas as cartas ligadas a ele na sua mão.",
			de: "Du kannst dieses Pokémon und alle angelegten Karten auf deine Hand nehmen."
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "PLANETA Mochizuki",

	thirdParty: {
		cardmarket: 740696
	}
}

export default card