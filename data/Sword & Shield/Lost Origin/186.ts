import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [487],
	set: Set,

	name: {
		en: "Giratina V",
		fr: "Giratina V",
		es: "Giratina V",
		it: "Giratina V",
		pt: "Giratina V",
		de: "Giratina V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Abyss Seeking",
			fr: "Fouilles Abyssales",
			es: "Búsqueda Abismal",
			it: "Cercabisso",
			pt: "Busca Abissal",
			de: "Suche am Abgrund"
		},

		effect: {
			en: "Look at the top 4 cards of your deck and put 2 of them into your hand. Put the other cards in the Lost Zone.",
			fr: "Regardez les 4 cartes du dessus de votre deck, puis ajoutez 2 d'entre elles à votre main. Placez les autres cartes dans la Zone Perdue.",
			es: "Mira las 4 primeras cartas de tu baraja y pon 2 de ellas en tu mano. Pon el resto de las cartas en la Zona Perdida.",
			it: "Guarda le prime quattro carte del tuo mazzo e aggiungi due di esse alle carte che hai in mano. Metti le altre carte nell'area perduta.",
			pt: "Olhe as 4 cartas de cima do seu baralho e coloque 2 delas na sua mão. Coloque as demais cartas na Zona Perdida.",
			de: "Schau dir die obersten 4 Karten deines Decks an und nimm 2 von ihnen auf deine Hand. Lege die anderen Karten ins Nirgendwo."
		}
	}, {
		cost: ["Grass", "Psychic", "Colorless"],

		name: {
			en: "Shred",
			fr: "Déchiquetage",
			es: "Hacer Trizas",
			it: "Tritatutto",
			pt: "Triturar",
			de: "Zerfetzer"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 670816,
		tcgplayer: 284137
	}
}

export default card