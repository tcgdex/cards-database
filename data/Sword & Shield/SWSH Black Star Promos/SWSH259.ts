import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Giratina V",
		de: "Giratina V",
		es: "Giratina V",
		pt: "Giratina V",
		it: "Giratina V",
		en: "Giratina V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Fouilles Abyssales",
			de: "Suche am Abgrund",
			es: "Búsqueda Abismal",
			pt: "Busca Abissal",
			it: "Cercabisso",
			en: "Abyss Seeking"
		},

		effect: {
			fr: "Regardez les 4 cartes du dessus de votre deck, puis ajoutez 2 d'entre elles à votre main. Placez les autres cartes dans la Zone Perdue.",
			de: "Schau dir die obersten 4 Karten deines Decks an und nimm 2 von ihnen auf deine Hand. Lege die anderen Karten ins Nirgendwo.",
			es: "Mira las 4 primeras cartas de tu baraja y pon 2 de ellas en tu mano. Pon el resto de las cartas en la Zona Perdida.",
			pt: "Olhe as 4 cartas de cima do seu baralho e coloque 2 delas na sua mão. Coloque as demais cartas na Zona Perdida.",
			it: "Guarda le prime quattro carte del tuo mazzo e aggiungi due di esse alle carte che hai in mano. Metti le altre carte nell'area perduta.",
			en: "Look at the top 4 cards of your deck and put 2 of them into your hand. Put the other cards in the Lost Zone."
		}
	}, {
		cost: ["Grass", "Psychic", "Colorless"],

		name: {
			fr: "Déchiquetage",
			de: "Zerfetzer",
			es: "Hacer Trizas",
			pt: "Triturar",
			it: "Tritatutto",
			en: "Shred"
		},

		effect: {
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 674375
	}
}

export default card